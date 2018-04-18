var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/app.js",
    output:{
        path: join(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    module:{
        rules:[
            {test: /\.js$/, use: "babel-loader"},
            {test:/\.css$/, use: ExtractTextPlugin.extract("css-loader")},
            {test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=10000','img-loader']}
        ]
    },
    plugins:[
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ]
}