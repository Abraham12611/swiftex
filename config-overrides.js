const { override } = require('customize-cra');
const webpack = require('webpack');

module.exports = override((config) => {
  config.resolve.fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "url": require.resolve("url"),
    "vm": require.resolve("vm-browserify"),
    "process": require.resolve("process/browser")
  };
  
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  );

  return config;
});
