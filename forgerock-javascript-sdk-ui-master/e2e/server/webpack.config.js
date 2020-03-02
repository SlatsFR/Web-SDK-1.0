const path = require('path');

module.exports = {
  entry: './e2e/server/index.js',
  mode: 'development',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../site'),
  },
};
