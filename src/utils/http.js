const Config = {
	development: {/* 开发环境 */
		baseUrl: 'https://www.mxnzp.com'
	},
	production: {/* 生产环境 */
		baseUrl: 'https://www.mxnzp.com'
	}
}

// #ifdef  H5
export default ''
// #endif

// #ifndef  H5
export default Config[process.env.NODE_ENV].baseUrl
// #endif