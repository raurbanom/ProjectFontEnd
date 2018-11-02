const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlnWebpackPlugin = require("html-webpack-plugin")

const webpack = require("webpack")

module.exports = {
    entry: {
        app: "./src/assets/js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlnWebpackPlugin({ template: "./index.html" }),
        new CopyWebpackPlugin(
            [
                /*{
                    from: "./src/components/*",
                    to: "components/[name].[ext]",
                    toType: "template"
                },*/
                {
                    from: "./src/components",
                    to: "components",
                    toType: "dir"
                },
                {
                    from: "./src/data",
                    to: "data",
                    toType: "dir"
                }
            ], {
                ignore: ["*.js", "*.css"]
            }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.ProvidePlugin({
            Ractive: ["ractive/ractive.min.js"]
        })

    ]
}