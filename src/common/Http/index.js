import baseUrl from '@/utils/http'

let instacne = null
class Http {

	static getInstance() {
		if (!instacne) {
			instacne = new Http();
		}
		return instacne;
	}

	constructor() {
		this.timeout = 60
		this.headers = {
			app_id: 'krkgkjgyou8kffus',
			app_secret: 'V0dKdmErZUptS3hNWC92V2Zvb2hHUT09'
		}
	}

	// 请求拦截器
	requestInterceptor({
		url,
		method = 'GET',
		header = {},
		data = {}
	}) {
		header = { ...header, ...this.headers }
		return Promise.resolve({ url, method, header, data })
	}

	request({
		url,
		method,
		header,
		data
	}) {
		return new Promise((resolve, reject) => {
			this.requestInterceptor({ url, method, header, data }).then(({ url, method, header, data }) => {
				uni.request({
					timeout: this.timeout * 1000,
					url: `${baseUrl}/api${url}`,
					method,
					header,
					data,
					success: response => {
						this.responseInterceptor(response).then(success => {
							resolve(success)
						}).catch(error => {
							reject(error)
						})
					},
					fail: ({ errMsg }) => {
						reject({
							title: errMsg,
							icon: 'none'
						})
					}
				})
			}).catch(error => reject(error))
		})
	}

	// 响应拦截器
	responseInterceptor(response) {
		if (response.statusCode >= 200 && response.statusCode <= 300) {
			if (response.data.code == 200 || response.data.code == 1) {
				return Promise.resolve(response.data.data)
			} else {
				return Promise.reject({
					title: response.data.message ?? response.data.msg,
					icon: 'none'
				})
			}
		} else {
			return Promise.reject({
				title: `ERROR-CODE:${response.statusCode}`,
				icon: 'none',
				success: ({ confirm }) => confirm && uni.setClipboardData({
					data: response.message
				})
			})
		}
	}

}

export default new Http.getInstance()
