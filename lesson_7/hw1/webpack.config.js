const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const config = {

        // extends: ['airbnb', 'prettier'],
        // parser: 'babel-eslint',
        // env: {
        //     browser: true,
        //     es6: true,
        //     jest: true,
        // },
        // rules: {
        //     'no-console': 0,
        //     'import/prefer-default-export': 0,
        //     'react/jsx-indent': 0,
        //     'react/jsx-props-no-spreading': 0,
        //     'react/prop-types': 0,
        // },


        entry: "./src/index.jsx",
        output: {
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: ["babel-loader"]
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ],
        resolve: {
            extensions: [".js", ".jsx"]
        },
        devServer: {
            port: 9000,
            hot: true
        }
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name].css"
            })
        );
    }

    return config;
};