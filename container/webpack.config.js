const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:8001/",
  },
    mode: 'development',
    devServer: {
        port: 8001,
        historyApiFallback: true,
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
        name: "container",
        filename: "remoteEntry.js",
        remotes: {
          layout: "layout@http://localhost:8002/remoteEntry.js",
          recipies: "recipies@http://localhost:8003/remoteEntry.js",
        },
        exposes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
};