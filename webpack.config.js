const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: ["webpack-dev-server/client", "./src/index.js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/images/',
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader", options: {injectType: "linkTag" } },
                    { loader: "file-loader", options : { name: '[name].css' } },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        overlay: true,
        open: true,
        watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "public/index.html" }),
    ]
}
