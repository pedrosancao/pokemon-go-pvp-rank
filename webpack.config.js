const path = require('path');

module.exports = {
  entry: './web/main.js',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    publicPath: '/web/',
    open: true,
    quiet: true,
    watchContentBase: true,
  },
};
