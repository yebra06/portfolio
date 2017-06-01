/**
 * File to bundle react application.
 *
 * Since this is a demo, basic config for a dev environment will do.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_DIR = path.resolve('.');
const APP_DIR = path.resolve(ROOT_DIR, 'src');
const BUILD_DIR = path.resolve(ROOT_DIR, 'dist');

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        publicPath: 'http://localhost:3001/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    devServer: {
        inline: true,
        port: 3001
    },
    plugins: [
        // Use to server bundles in html.
        // See: https://www.npmjs.com/package/html-webpack-plugin
        new HtmlWebpackPlugin({
            title: 'Alfredo\'s Portfolio',
            template: path.resolve(APP_DIR, 'index.html'),
            filename: 'index.html',
            inject: true
        }),
    ]
};
