const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [                
                { loader: 'babel-loader' }
            ]
        }]
    },

    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'app.js'
    },

    devServer: {
        contentBase: './build',
        host: 'localhost', 
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
}
