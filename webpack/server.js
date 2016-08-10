// Import external dependencies
const webpack   = require('webpack');
const devServer = require("webpack-dev-server");
const merge     = require('webpack-merge');

// Import environment configurations
var common = require('./common.config');
var dev    = require('./dev.config');
var prod   = require('./prod.config');

// Import defined constants
var PATHS = require('./paths');
const PORT = 9069;

// Define environment
const TARGET = process.env.npm_lifecycle_event;

// Define babel environment - may not need this
//process.env.BABEL_ENV = TARGET;

// Object with the compiler configuration
var compiler = {};
// Object with the options for the server
var options = {};

// DEVELOPMENT
if(TARGET === 'start' || !TARGET) {
    compiler = merge(common, dev.compiler);
    options = dev.options;
}

// PRODUCTION
if(TARGET === 'build') {
    compiler = merge(common, prod.compiler);
    options = prod.options;
}

// Create server instance
var server = new devServer( webpack(compiler), options);

// Run server
server.listen(PORT);
