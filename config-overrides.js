const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "crypto": require.resolve("crypto-browserify"),
    "url": require.resolve("url"),
    "stream": require.resolve("stream-browserify"),
    "vm": require.resolve("vm-browserify"),
    "process": require.resolve("process/browser") // Ensure this line is here
  };

  config.resolve.extensions = [...config.resolve.extensions, '.js', '.jsx', '.json', '.mjs']; // Add .mjs extension

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);

  return config;
};
