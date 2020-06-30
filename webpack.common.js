module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "img",
              mozjpeg: {
                progressive: true,
                quality: 60,
              },
            },
          },
        ],
      },
    ],
  },
};
