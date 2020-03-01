const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src", "index.tsx"),
        vendor: "@babel/polyfill"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name]-[hash].js",
        publicPath: "./"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },
    stats: { children: false },
    devServer: {
        historyApiFallback: true,
        host: "localhost",
        proxy: {
            "/api": {
                target: "http://localhost:3000/",
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    },
                    "astroturf/loader",
                    "react-hot-loader/webpack"
                ]
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }
            }
        ]
    }
};
