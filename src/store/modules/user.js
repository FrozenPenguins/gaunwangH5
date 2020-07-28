import { getToken } from '@/utils/auth'

const state = {
	token: getToken(),
	name: '',
	avatar: ''
}

const actions = {

}

const mutations = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}