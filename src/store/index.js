import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1Management')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})

const store = new Vuex.Store({
	modules
})

Vue.prototype.$Store = store
export default store
