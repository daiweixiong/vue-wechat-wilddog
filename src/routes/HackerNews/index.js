// Sync route definition
export default {
  name: 'hackernews/news',
  title: 'HackerNews',
  exact: true,
  component: (resolve => require(['./components/App'], resolve)),
  subRoutes: {
    'news': {
      name:'news',
      component: resolve => require(['./components/NewsView'], resolve)
    },
    'user': {
      component: resolve => require(['./components/UserView'], resolve)
    },
    'item': {
      component: resolve => require(['./components/ItemView'], resolve)
    }

  }
}


