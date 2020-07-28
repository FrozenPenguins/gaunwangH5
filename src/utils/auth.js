const TokenKey = 'Vue-UniApp-Project-Token'

export function getToken() {
	return uni.getStorageSync(TokenKey) || null
}

export function setToken(token) {
	return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
	return uni.removeStorageSync(TokenKey)
}