const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
    mode: 'development',
    devServer: {
        port: 8003
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
        name: "recipies",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          "./Recipes": "./src/Recipes.js",
          "./Recipe": "./src/Recipe.js"
        },
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