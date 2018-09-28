// Reference: http://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'mocha'
    ],
    reporters: [
      'mocha',
      'coverage'
    ],
    mochaReporter: {
      showDiff: true
    },
    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern: 'tests/**/*_test.*',
        watched: false,
        included: true,
        served: true
      }
    ],
    preprocessors: {
      'tests/**/*_test.*': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-coverage'
    ],
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
