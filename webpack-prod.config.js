var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            'process.env.BABEL_ENV': '"production'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.css?$/,
                loaders: [ 'style', 'raw' ],
                include: __dirname
            }
        ]
    }
};