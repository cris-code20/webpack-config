
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssextractplugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization:{
        minimizer: [new OptimizeCssAssetsPlugin()]
    },
    output:{
        filename: 'manin.[contentHash].js'
    },
    module:{

        rules:[

            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use:[
                    'babel-loader'
                ]
            },

            {
                test: /\.css$/,
                exclude: /styles\.css$/, 
                use:[
                    'style.loader',
                    'css-loader'
                ]
            },

            {
                test:/styles\.css$/,
                use: [
                    MiniCssextractplugin. loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimizer: false
                },
            },
            {
                test: /\.(png|svg|jpg|gif$)/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            esModule: false
                        }
                    }
                ]
            }

        ]

    },

    plugin:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './indec.html'
        }),

        new MiniCssexTractPlugin({
            filename: '[name].[contentHsh].css',
            ignoreOrder: false
        }),

        new CopyPlugin([
            {from: 'src/assets', to: 'assets/'}
        ]),

        new MinifyPlugin(),
        new CleanWebpackPlugin()
    ]

}