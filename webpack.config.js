var path = require('path'), webpack = require('webpack')

module.exports = {
    entry: './index.js',

    output: {
        publicPath: '/',
        path: __dirname,
        filename: 'generated/bundle.js'
    },

    devServer: { contentBase: './' },

    resolve: {
        extensions: ['', '.js'],
        modules: [path.resolve('./'), "node_modules"]
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.glsl$/, loader: 'raw-loader' }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, output: { comments: false }, sourceMap: false }),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': 'production' } })
    ]
};
