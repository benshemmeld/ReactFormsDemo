const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/app/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                loader: 'file-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        historyApiFallback: true,
        watchContentBase: true
    },
    plugins: [
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'app', 'index.html') }),
    ]
}