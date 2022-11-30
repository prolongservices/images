module.exports = {
    // pages to exclude.
    // Paths must start with "/"
    excludePaths: [],

    // generated image sitemap filename
    sitemapPath: "sitemap-index.xml",

    // do not change, unless you've done modification to your gatsby-image classes
    //gatsbyImageSelector: ".gatsby-image-wrapper",
    gatsbyImageSelector: "figure",

    // build dir to read the output files from
    // also to write the sitemap to
    buildDir: './public/sitemap',

    // don't add images with missing alt tag to sitemap
    ignoreImagesWithoutAlt: true,

    // add image sitemap link to pages' head
    createLinkInHead: true,
};