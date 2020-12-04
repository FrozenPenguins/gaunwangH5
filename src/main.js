import Vue from 'vue'
import App from '@/App'
import store from '@/store'
// import util from '@/common/Utils/utils.js'
import '@/common/Utils/utils'
import foot from '@/components/common/foot/foot.vue'
import head from '@/components/common/title-head/head.vue'

Vue.component('foot-view',foot)
Vue.component('head-view',head)

Vue.config.productionTip = false


 
App.mpType = 'app'


const app = new Vue({
	...App,
	store
})
app.$mount()


