const path = require('path');

module.exports = {
  entry: './public/src/main.ts',
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'development'
};
