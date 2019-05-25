const path = require("path");
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');

const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// Inform web pack that we are building bundle for node js
	// not for browser

	target: 'node',

	// Tell webpack the root file for our server application
	entry : './src/index.js',

	// this option tell webpack where to put output file after generated
	// dirname is reference of dir project executed
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	// Do not bundle any library inside my server bundle 
	// if that library exist in node module foler 
	externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);
// stage-0 to handle aysnc code
// env preset is master preset 
  // run all transform rules on popular browsers