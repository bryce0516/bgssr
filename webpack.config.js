const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


function getConfig(isServer,name) {
  return {
    entry: { [name]: `./src/${name}`},
    // entry: isServer
    //   ? { server: path.resolve(__dirname, './src/Server.js') }
    //   : { main: path.resolve(__dirname, './src/index.js') },
    output: {
      filename: isServer ? '[name].bundle.js' : '[name].[chunkhash].js',
      path: isServer ? path.resolve(__dirname, "dist-server") :path.resolve(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    target: isServer ? 'node' : 'web',
    externals: isServer ? [nodeExternals()] : [],
    node: {
      __dirname: false,
    },
    optimization: isServer ? {
      splitChunks: false,
      minimize: false,
    } : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(
                __dirname,
                isServer ?'./babelrc.server.js' : './babelrc.client.js',
              ),
            },
          },
        },
        {
          test:/\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              emitFile: isServer ? false: true,
            },
          },
        },
      ],
    },
    plugins: isServer
    ? []
    : [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './template/index.html',
      }),
    ],
    mode:'production',
  };
}

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: '[name].[chunkhash].js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/dist/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             configFile: path.resolve(__dirname, 'babelrc.client.js'),
//           },
//         }
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './template/index.html',
//     }),
//   ],
//   mode: 'production',
// };

module.exports = [getConfig(false,'index'), getConfig(true,'server'), getConfig(true, 'prerender')] 