const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
        },
      };

module.exports = ({ develop }) => ({
  mode: develop ? "development" : "production",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),

    // Pages
    new HtmlWebpackPlugin({
      template: "./src/pages/Main/Main.html",
      filename: "Main.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/AboutUs/AboutUs.html",
      filename: "AboutUs.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Contact-us/Contact-us.html",
      filename: "Contact-us.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Contact-form/Contact-form.html",
      filename: "Contact-form.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Documents/Documents.html",
      filename: "Documents.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/History/History.html",
      filename: "History.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/MyRepayments/MyRepayments.html",
      filename: "MyRepayments.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/News/News.html",
      filename: "News.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/News-more/News-more.html",
      filename: "News-more.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Payments/Payments.html",
      filename: "Payments.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/PersonalData/PersonalData.html",
      filename: "PersonalData.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/PersonalDataMobile/PersonalDataMobile.html",
      filename: "PersonalDataMobile.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Questions/Questions.html",
      filename: "Questions.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Repayment/Repayment.html",
      filename: "Repayment.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/ResetPassword/ResetPassword.html",
      filename: "ResetPassword.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/Operator/Operator.html",
      filename: "Operator.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,

        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // Преобразует CSS в модуль JavaScript
          "sass-loader", // Компилирует SCSS в CSS
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(
          __dirname,
          "./node_modules/bootstrap-icons/font/fonts"
        ),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "webfonts",
            publicPath: "../webfonts",
          },
        },
      },
    ],
  },
  ...devServer(develop),
});
