
export const UPDATE = 'UPDATE'
export const SELECTED = 'SELECTED'
export const SEARCH = 'SEARCH'


// ------------------------------------
// States
// ------------------------------------
var now = new Date()
var state = {
	sessionIndex:0,
	search:'',
	// 登录用户
	user: {
		id: 1,
		name: 'Myself',
		img: '2.jpg'
	},

	// 用户列表
	userList: [
		{
			id: 2,
			name: '示例介绍',
			img: '8.jpg'
		},
		{
			id: 3,
			name: 'webpack',
			img: '3.jpg'
		},
		{
			id: 4,
			name: 'wilddog',
			img: '6.jpg'
		},
		{
			id: 7,
			name: 'vuex',
			img: '5.jpg'
		}
	],

	// 会话列表
	sessionList: [
		{
			userId: 2,
			messages: [
				{
					text: 'Hello，这是一个基于vue的WeChat',
					date: now
				},
				{
					text: '技术栈:vue+wilddog+webpack+vuex+es6...,欢迎来到vue的世界',
					date: now
				},
				{
					text: 'Make your project easy and fast with modern tools',
					date: now
				},
				{
					text: '项目地址: https://github.com/daiweixiong/vue-wechat-wilddog',
					date: now
				}
			]
		},
		{
			userId: 3,
			messages: [{
				text: 'No matter how far you may fly, never forget where you come from.',
				date: now
			}]
		},
		{
			userId: 4,
			messages: [{
				text: 'Make your project easy and fast with modern tools',
				date: now
			}]
		},
		{
			userId: 5,
			messages: [{
				text: 'Make your project easy and fast with modern tools',
				date: now
			}]
		},
		{
			userId: 6,
			messages: [{
				text: 'Make your project easy and fast with modern tools',
				date: now
			}]
		},
		{
			userId: 7,
			messages: [{
				text: 'Make your project easy and fast with modern tools',
				date: now
			}]
		}
	],
}
// ------------------------------------
// Getters
// ------------------------------------
const getters = {
		user: state => state.user,
		userList: state => state.userList,
		sessionList: state => state.sessionList,
		search: state => state.search,
		session: state => state.sessionList[state.sessionIndex],
		sessionIndex:state => state.sessionIndex
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const actions = {
    update({ commit }, msg) {
        commit('UPDATE', msg)
    },
	selected({commit}, index) {
		commit(SELECTED, index)
	},
	inpSearch({commit}, e) {
		commit(SEARCH, e)
	}
}

// ------------------------------------
// Mutations
// ------------------------------------
const mutations = {
    [UPDATE](state, msg) {
			state.sessionList[msg.index].messages.push(msg)
    },
    [SELECTED](state, index) {
		state.sessionIndex = index
    },
    [SEARCH](state, e){
		state.search = e.target.value;
    }
}

export default {
	state,
	getters,
	actions,
	mutations
}