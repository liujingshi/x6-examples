const path = require("path"); //nodejs内置模块
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HtmlWebpackPlugin
// const CopyWebpackPlugin = require("copy-webpack-plugin"); // 复制静态资源
const resolve = (url) => path.resolve(__dirname, url); // 定义resolve
const join = (url) => path.join(__dirname, url); // 定义join

module.exports = {
    // 模式  development production none
    mode: "development",
    // 入口
    entry: "./src/main.js",

    // 输出
    output: {
        path: resolve("docs"), // 输出路径
        filename: "x6-examples.js", // 打包文件名
    },

    // 设置几个别名
    resolve: {
        alias: {
            "@assets": resolve("src/assets"),
            "@img": resolve("src/assets/img"),
            "@css": resolve("src/assets/css"),
            "@base-model": resolve("src/model"),
            "@custom-cell": resolve("src/custom-cell"),
            "@config": resolve("src/config"),
            "@core": resolve("src/core"),
            "@views": resolve("src/views"),
        },
    },

    // 模块 规则 xx-loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                exclude: /(node_modules|bower_components)/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                loader: "html-loader",
            },
            {
                test: /\.scss$/,
                // 注意:use 的别名 是 loaders。下面3个加载的执行顺序是 3 2 1
                use: [
                    // 1.不用传递参数可以简写
                    "style-loader",
                    {
                        loader: "css-loader",
                        // 2.给css-loader传递参数
                        options: {
                            url: true,
                            import: true,
                        },
                    },
                    // 3.使用sass加载器
                    "sass-loader",
                ],
            },
        ],
    },

    // 插件
    plugins: [
        // 加载index.html
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve("public/index.html"),
        }),
        // 复制静态资源
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: resolve("public/static"),
        //             to: resolve("docs/static"),
        //         },
        //     ],
        // }),
    ],

    // 运行 server
    devServer: {
        // 允许配置从目录提供静态文件的选项
        static: {
            directory: join("public"),
        },
        compress: true, // 启用 gzip compression
        port: 9000,
        historyApiFallback: true, // 不跳转
        liveReload: true, // 实时刷新
    },
};
