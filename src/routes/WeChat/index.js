// Sync route definition
export default {
  name: 'WeChat',
  title: 'WeChat',
  exact: true,
  component: resolve => require(['./components/WeChat'], resolve)
}