const path = require('path');

module.exports = {
  entry: './web/main.js',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    publicPath: '/web/',
    quiet: true,
    watchContentBase: true,
  },
};
