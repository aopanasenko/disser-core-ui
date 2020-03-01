const common = require("./webpack.common");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const analyzerMode = process.env.ANALYZE ? "server" : "disabled";
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

common.module.rules.push({
    test: /node_modules[\\/]astroturf.*\.js$/,
    use: {
        loader: "babel-loader",
        options: {
            configFile: path.resolve(__dirname, "../.babelrc.astroturf.js")
        }
    }
});

common.module.rules[0].use.pop();

module.exports = {
    ...common,
    mode: "production",
    devtool: false,
    module: {
        rules: [
            ...common.module.rules,
            {
                test: /global\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /global\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "astroturf/css-loader",
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Laser-pack",
            template: "src/index.html",
            inject: false,
            minify: {
                collapseWhitespace: true
            },
            prod: true
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CompressionPlugin({
            exclude: ["index.html"]
        }),
        new BundleAnalyzerPlugin({
            analyzerMode
        })
    ]
};
