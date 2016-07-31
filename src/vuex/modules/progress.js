// ------------------------------------
// Constants
// ------------------------------------
const SET_PROGRESS = 'SET_PROGRESS'

// ------------------------------------
// States
// ------------------------------------
const state = {
	progress: 0
}

// ------------------------------------
// Getters
// ------------------------------------
const getters = {
	progress: state => state.progress
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
	//设置 进度条
	setProgress({ commit }, progress) {
		commit(SET_PROGRESS, progress)
		if (progress === 100) {
			setTimeout(() => {
				commit(SET_PROGRESS, 0)
			}, 500)
		}
	}
}

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
	[SET_PROGRESS](state, payload) {
		state.progress = payload
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}