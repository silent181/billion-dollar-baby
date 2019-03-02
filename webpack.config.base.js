const path = require('path');
const glob = require('glob');
const TransferWebpackPlugin = require("transfer-webpack-plugin");

const JS_ROOT = `./src`;
const CSS_ROOT = `./src/skin`;

module.exports = {
    entry: {
        home: `${JS_ROOT}/pages/index.jsx`
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            'lodash',
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.less'],
        alias: {
            Util: path.resolve(__dirname, `${JS_ROOT}/utils`),
            Component: path.resolve(__dirname, `${JS_ROOT}/components`),
            Config: path.resolve(__dirname, `${JS_ROOT}/config`),
            Decorator: path.resolve(__dirname, `${JS_ROOT}/decorators`)
        }
    },
    plugins: [
        new TransferWebpackPlugin([

        ])
    ]
}