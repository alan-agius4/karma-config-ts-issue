import { join } from 'path';

module.exports = function (config) {
  config.set({
    basePath: '',
    coverageIstanbulReporter: {
      dir: join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });
};