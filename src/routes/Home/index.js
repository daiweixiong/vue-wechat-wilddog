// Sync route definition
export default {
  name: 'index',
  title: '首页',
  exact: true,
  component: require('./components/HomeView')
  //component: resolve => require(['./components/HomeView'], resolve)
}