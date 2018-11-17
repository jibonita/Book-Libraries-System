const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      loader: 'ts-loader',
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
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'development'
};
