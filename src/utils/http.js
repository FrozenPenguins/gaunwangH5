const development = {
	baseUrl: 'https://www.mxnzp.com'
}

const production = {
	baseUrl: 'https://www.mxnzp.com'
}
// #ifdef  H5
export default ''
// #endif
// #ifndef  H5
export default [process.env.NODE_ENV].baseUrl
// #endif