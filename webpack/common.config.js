// Import dependencies
const autoprefixer = require('autoprefixer');

// Import defined constants
var PATHS = require('./paths');

module.exports = {
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/dev-server',
        PATHS.app
    ],

    resolve: {
        root: PATHS.app,
        extensions: ['', '.js', '.jsx'],
        modules: [
            'app',
            'node_modules'
        ]
    },

    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.jsx?$/, loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react'], exclude: /node_modules/, include: PATHS.app },
            { test: /\.scss$/, loaders: ['style', 'css', 'postcss','sass'], include: PATHS.app },
            { test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },

    postcss: function () {
        return {
            plugins: [autoprefixer]
        };
    }
}
