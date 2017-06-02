var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('src'),
    entry: './index',
    output: {
        path: path.resolve('dist'),
        filename: 'nestedObjectAssign.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /dist/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};