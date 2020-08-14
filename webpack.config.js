const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV;

module.exports = {
  context: __dirname,
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: devMode == 'development' ? 'main.js' : 'index.js',
    filename: 'main.js',
  },

  plugins: [new HtmlWebPackPlugin()],
};
