const path = require('path');

module.exports = {
  entry: './testing/George/src/main.ts',
  module: {
    rules: [{
      // Include ts, tsx, js, and jsx files.
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
  }],
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'testing/George/dist')
  },


  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  mode: 'development'
};
