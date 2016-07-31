# Route

## **依赖**
```
vue-router
```

## **目录**
```
src/routes
├── About                       # 
│   ├── components              # 视图 组件
│   └── modules                 # vuex 模块文件
├── Home
│   ├── assets
│   ├── components
│   └── modules
└── User
    ├── components
    └── routes                  # 子路由
        └── Login
            ├── components
            └── modules
```

## **用法**
在 index.js 引入 Router 插件
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import { routes, alias } from 'routes'

// 使用插件
Vue.use(Route)

// 创建一个路由器实例
const router = new Router({
  // 选项对象，可选
  history: false,
  saveScrollPosition: true,
  linkActiveClass: 'link-active'
})

// 注册路由与别名
router.map(routes)
router.alias(alias)

// 启动应用
router.start(App, '#app')
```

## **入口文件**
```javascript
// routes/index.js
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/themes/': require("./Themes"),
		'/user/': require("./User"),
		'/about/': require("./About")
	},

	alias: {
		// '/login/:username': '/login'
	}
}


export default createRoutes
```

## **路由定义**
```javascript
// routes/User
// 结合 Webpack 实现 [动态载入](http://router.vuejs.org/zh-cn/lazy.html) 组件
// 如果无需异步加载，直接 require 即可
import subRoutes from './routes'
export default {
  name: 'user',
  title:'用户中心',
  component: resolve => require(['./components/UserView'], resolve),
  subRoutes  // 子路由
}


// 子路由定义
// routes/User/routes/Login
export default {
  title: '用户登陆',
  component: resolve => require(['./components/LoginView'], resolve)
}
```