const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    const devConfig = {
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\s?css$/,
                    oneOf: [
                        {
                            resourceQuery: /module/,
                            use: [
                                'style-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        localIdentName: '[local]-[hash:base64]',
                                        modules: true
                                    }
                                },
                                'sass-loader'
                            ]
                        },
                        {
                            use: [
                                'style-loader',
                                'css-loader',
                                'sass-loader'
                            ]
                        }
                    ]
                }
            ]
        },
        plugins: [

        ]
    };
    if (env.bundleAnalysis) {
        devConfig.plugins.push(new BundleAnalyzerPlugin());
    }
    return merge(base, devConfig);
};