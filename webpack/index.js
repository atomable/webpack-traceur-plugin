const config = require('./config');
const webpack = require('webpack');

module.exports = (log, source, destination, minify) => {
  log.dim('Bundling...');

  return new Promise((resolve, reject) => {
    const webpackConfig = config(webpack, source, destination, minify);

    webpack(webpackConfig, (err, stats) => {
      if (stats.hasWarnings()) {
        log.reset('webpack').yellow(stats.toJson());
      }
      if (stats.hasErrors()) {
        reject(`\nWebpack failed:\n${stats.toJson()}`);
      }
      resolve();
    });
  });
};
