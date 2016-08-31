"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: {
        app: './app'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: "bundle.js",
        library: "bundle"
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
    ],
    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel?presets[]=es2015'
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]?[hash]'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.html$/,
                loaders: ['ngtemplate', 'html']
            },
        ]

    },
};

if (NODE_ENV == 'development') {

    module.exports.devtool = "#inline-source-map";

    module.exports.devServer = {
        stats: 'errors-only',
        port: 3001,
        host: '0.0.0.0',
        hot: true
    };
}

if (NODE_ENV == 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    );

}

