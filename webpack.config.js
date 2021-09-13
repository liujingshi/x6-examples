const path = require("path"); //nodejs内置模块
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HtmlWebpackPlugin
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
        ],
    },

    // 插件
    plugins: [
        // 加载index.html
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve("public/index.html"),
        }),
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
