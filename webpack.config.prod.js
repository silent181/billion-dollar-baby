const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ]
});