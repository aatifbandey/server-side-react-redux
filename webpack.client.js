const path = require("path");
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.js');
const config = {

	// Tell webpack the root file for our UI application
	entry : './src/client/client.js',

	// this option tell webpack where to put output file after generated
	// dirname is reference of dir project executed
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}

};

module.exports = merge(baseConfig, config);

// stage-0 to handle aysnc code
// env preset is master preset - run all transform rules on popular browsers