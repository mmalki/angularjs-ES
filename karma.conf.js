var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['mocha', 'chai', 'jasmine'],
        reporters: ['mocha'],

        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        colors: true,
        port: 9876,

        basePath: '',
        files: [{ pattern: 'webpack.karma.context.js', watched: false }, './node_modules/angular-mocks/angular-mocks.js'],
        preprocessors: { 'webpack.karma.context.js': ['webpack', 'sourcemap'] },
        exclude: [],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/ },
                    { test: /\.css$/, loader: 'style!css' },
                    { test: /\.tpl.html/, loader: 'html' },
                    { test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000' }
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    'window.jQuery': 'jquery'
                }),
                require("karma-chai"),
                require("karma-chrome-launcher"),
                require("karma-mocha"),
                require("karma-mocha-reporter"),
                require("karma-sourcemap-loader"),
                require("karma-webpack")
            ]
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};