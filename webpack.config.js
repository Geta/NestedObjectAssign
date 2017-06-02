var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('src'),
    entry: './index',
    output: {
        path: path.resolve('dist'),
        filename: 'nested-object.assign.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /dist/],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};