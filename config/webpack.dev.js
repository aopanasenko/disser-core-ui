const common = require("./webpack.common");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

common.output.publicPath = "/";

module.exports = {
    ...common,
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            ...common.module.rules,
            {
                test: /global\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /global\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true
                        }
                    },
                    {
                        loader: "astroturf/css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: false
        }),
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name]-[hash].css" })
    ]
};
