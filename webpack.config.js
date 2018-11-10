const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    publicPath: 'dist/',
    contentBase: path.resolve(__dirname, "./"),
    watchContentBase: true,
    compress: true,
    port: 9001
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'development'
};
