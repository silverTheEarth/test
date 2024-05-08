const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", // 将样式插入到DOM中
          {
            loader: "css-loader", // 解析CSS文件
            options: {
              modules: true, // 启用CSS Modules
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
};
