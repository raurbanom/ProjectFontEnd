const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlnWebpackPlugin = require("html-webpack-plugin")

const webpack = require("webpack")

module.exports = {
    entry: {
        app: "./src/assets/js/index.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlnWebpackPlugin({ template: "./index.html" }),
        new CopyWebpackPlugin(
            [
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