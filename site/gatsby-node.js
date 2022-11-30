const cheerio = require("cheerio");
const { simpleSitemapAndIndex } = require('sitemap')
const fs = require("fs");
const defaultOptions = require('./default-options');

exports.onPostBuild = async ({ graphql, pathPrefix }, pluginOptions) => {
    const options = {
        ...defaultOptions,
        ...pluginOptions,
    };

    options.excludePaths.push("/dev-404-page/");

    const allPagesQuery = await graphql(
        `
            {
                site {
                    siteMetadata {
                        siteUrl
                    }
                }
                allSitePage {
                    edges {
                        node {
                            path
                        }
                    }
                }
            }
        `
    );

    const siteUrl = allPagesQuery.data.site.siteMetadata.siteUrl;
    const allPagePaths = allPagesQuery.data.allSitePage.edges.map(node => node.node.path);

    console.log(`Generating image sitemap for ${allPagePaths.length} pages...`);

    let imagesCount = 0;
    let urlData = [];

    allPagePaths.filter(path => options.excludePaths.indexOf(path) === -1).forEach(path => {
        const filePath = path + (path.indexOf(".html") === -1 ? "index.html" : "");

        const fileContent = fs.readFileSync(`${options.buildDir}${filePath}`).toString("utf8");
        const $ = cheerio.load(fileContent, {
            // use xmlMode to read the content in <noscript> tags
            // otherwise you cannot access them
            xmlMode: true,
        });

        const pageImages = {};

        // find all gatsby-image from the current page
        // we have to find the parent (e.g. .gatsby-image-wrapper), 
        // so we can extract the alt from <img /> and all resolution
        // links from the <source /> tag 
        //console.log(fileContent)
        $(options.gatsbyImageSelector).each((i, element) => {
            //console.log(element)
            //return
            const el = $(element);
            const img = el.find("img");
            const alt = img.attr("alt");
            const src = img.attr("src");
            //console.log(img)
            if (options.ignoreImagesWithoutAlt && !alt) {
                return;
            }
                
            pageImages[src] = alt;
        });
        //console.log(pageImages)
        const pageImagesKeys = Object.keys(pageImages);
        if (pageImagesKeys.length === 0) {
            return;
        }

        imagesCount += pageImagesKeys.length;

        urlData.push({
            url: siteUrl + path,
            img: pageImagesKeys.map(image => {
                return {
                    url: siteUrl + image,
                    title: pageImages[image],
                };
            }),
            changefreq: '',
            priority: 0.7
        });
    });

    console.log(`Creating sitemap for ${imagesCount} images.`);

    await simpleSitemapAndIndex({
        hostname: siteUrl,
        destinationDir: options.buildDir,
        sourceData: urlData,
        gzip: false
    })
};