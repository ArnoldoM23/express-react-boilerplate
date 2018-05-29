var path = require('path');

module.exports = {
  mode: process.env === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        options: {
          plugins: [require('babel-plugin-transform-object-rest-spread')]
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    compress: true,
    hot: true,
    contentBase: './public'
  }
};
