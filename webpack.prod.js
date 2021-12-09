const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/generateid.ts"),
  output: {
    path: path.resolve(__dirname, "dist-prod"),
    filename: "parsegraph-generateid.js",
    globalObject: "this",
    library: "parsegraph_generateid",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".glsl"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  mode: "production",
};
