var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js',
        vendor: ['webpack/hot/dev-server', 'graphql']
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    devServer: {
        contentBase: "./build",
        hot: true,
        lazy: false,
        inline: true
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'app']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.HotModuleReplacementPlugin()
    ]
}
