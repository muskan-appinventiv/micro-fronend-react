const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'development',
    devServer: {
        port: 8002
    },
    module: {
        rules: [
          {
            test: /\.?js$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env',/* to transfer any advansed ES to ES5 */
                 '@babel/preset-react'// to compile react to ES5
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          }
        ]
      },
    plugins: [
      new ModuleFederationPlugin({
        name: "layout",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./Header": "./src/Header.js",
          "./Footer": "./src/Footer.js"
        }
      }),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
};