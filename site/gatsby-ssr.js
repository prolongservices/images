const React = require("react");
const defaultOptions = require("./default-options");
const { withPrefix , withAssetPrefix } = require('gatsby')
const posix = require('path')


// TODO: Remove for v3 - Fix janky path/asset prefixing
const withPrefixNew = withAssetPrefix || withPrefix

exports.onRenderBody = async ({ graphql, setHeadComponents }, pluginOptions) => {
    let { createLinkInHead } = { ...defaultOptions, ...pluginOptions };

    if (!createLinkInHead) {
        return;
    }

    setHeadComponents([
        React.createElement("link", {
            key: "gatsby-plugin-sitemap",
            rel: "sitemap",
            type: "application/xml",
            href: withPrefixNew(posix.join(output, `/sitemap-index.xml`)),
        }),
    ]);
};