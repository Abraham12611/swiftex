const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      url: require.resolve('url/'),                // Polyfill for Node.js 'url'
      stream: require.resolve('stream-browserify'), // Polyfill for stream
      buffer: require.resolve('buffer/'),           // Polyfill for buffer
      process: require.resolve('process/browser'),  // Polyfill for process
      assert: require.resolve('assert/'),           // Polyfill for assert
      http: require.resolve('stream-http'),         // Polyfill for http
      https: require.resolve('https-browserify'),   // Polyfill for https
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],  // Provide Buffer globally
      process: 'process/browser',    // Provide process globally
    }),
  ],
};
