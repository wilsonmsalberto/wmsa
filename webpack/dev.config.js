// Import dependencies
const webpack           = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Import defined constants
var PATHS = require('./paths');
const PORT = 9069;

module.exports = {
    compiler: {
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),

            new HtmlWebpackPlugin({
                // Required
                inject: false,
                template: 'node_modules/html-webpack-template/index.ejs',

                // Optional
                appMountId: 'app',
            }),

            new OpenBrowserPlugin({ url: 'http://localhost:' + PORT })
        ]
    },
    options: {
        contentBase: PATHS.build,

        historyApiFallback: true, // Enable history API fallback
        hot: true, // Enable hot module replacement
        inline: true,
        progress: true,

        stats: 'errors-only', // Display only errors to be less verbose

        //host: process.env.HOST,
        //port: process.env.PORT || PORT
    }
}
