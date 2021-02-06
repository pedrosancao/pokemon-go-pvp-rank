const path = require('path');

module.exports = {
  entry: './web/main.js',
  mode: 'development',
  devServer: {
    publicPath: '/web/',
    quiet: true,
    watchContentBase: true,
  },
};
