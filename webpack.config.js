const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      url: require.resolve('url/'),               // Polyfill for 'url'
      stream: require.resolve('stream-browserify'), // Required for stream-related packages
      buffer: require.resolve('buffer/'),          // Required for buffer usage
      process: require.resolve('process/browser'), // Polyfill for Node.js process
      assert: require.resolve('assert/'),          // Polyfill for assert
      http: require.resolve('stream-http'),        // Polyfill for http
      https: require.resolve('https-browserify'),  // Polyfill for https
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],  // Automatically provide Buffer globally
      process: 'process/browser',    // Provide process globally for browser environment
    }),
  ],
};
