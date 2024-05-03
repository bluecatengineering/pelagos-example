'use strict';

module.exports = (env) => ({
	mode: env.WEBPACK_SERVE ? 'development' : 'production',
	devtool: env.WEBPACK_SERVE ? 'eval-cheap-module-source-map' : false,
	module: {
		rules: [
			{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			{test: /\.m?js$/, exclude: /node_modules/, loader: 'babel-loader'},
		],
	},
});
