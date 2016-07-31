import Vue from 'vue'
import Router from 'vue-router'
import App from 'App'
import { routes, alias }  from './routes'
import store from 'vuex/store'
import { actions } from 'vuex/modules/progress'
import { domain, fromNow } from './filters'


if (module.hot) {
	module.hot.accept()
}

Vue.config.debug = __DEV__

// global mixins
Vue.mixin({
	store
})

Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

const router = new Router({
	history: false,
	saveScrollPosition: true,
	linkActiveClass: 'link-active'
})

// register routes
router.map(routes)
router.alias(alias)

//
//全局钩子函数
router.beforeEach(transition => {
	if (transition.to.auth) {
		// 对用户身份进行验证...
		// transition.abort()
	} else {
		actions.setProgress(store, 60)
		transition.next()
	}
})

router.afterEach(transition => {
	window.scrollTo(0, 0)
	actions.setProgress(store, 100)
})

router.start(App, '#app')
