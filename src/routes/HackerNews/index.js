          // Sync route definition
import subRoutes from './routes'

export default {
  name: 'hackernews',
  title: 'HackerNews',
  exact: true,
  component: (resolve => require(['./components/App'], resolve)),
  subRoutes
  //subRoutes: {
  //  'news': {
  //    name:'news',
  //    component: resolve => require(['./components/NewsView'], resolve)
  //  },
  //  'user': {
  //    component: resolve => require(['./components/UserView'], resolve)
  //  },
  //  'item': {
  //    component: resolve => require(['./components/ItemView'], resolve)
  //  }
  //
  //}
}


