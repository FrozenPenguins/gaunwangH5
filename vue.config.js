module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'https://www.mxnzp.com',
				// pathRewrite: {
				// 	'^/api': ''
				// }
			}
		}
	},
	chainWebpack: (config) => {
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			compress.drop_console = true
			compress.pure_funcs = [ '__f__' ]
			return args
		})
	}
}