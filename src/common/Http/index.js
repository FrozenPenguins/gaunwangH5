import Vue from 'vue'

let instacne = null
class Http {

	static getInstance() {
		if (!instacne) {
			instacne = new Http();
		}
		return instacne;
	}

	constructor() {
		this.baseUrl = '/api'
		this.timeout = 60
		this.headers = {}
	}

	init({
		baseUrl,
		timeout,
		headers
	}) {
		this.baseUrl = baseUrl
		this.timeout = timeout
		this.headers = headers
	}

}

Vue.prototype.Http = new Http.getInstance()