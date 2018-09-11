const path = require("path");

module.exports = {
    entry: {
        content: ["./src/runtime/content.ts", "./style/content.css"],
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".css"],
        modules: ["./src", "node_modules"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
};
