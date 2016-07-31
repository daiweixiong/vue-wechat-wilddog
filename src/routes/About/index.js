// Sync route definition
export default {
  name: 'about',
  title: 'About',
  exact: true,
  component: resolve => require(['./components/AboutView'], resolve)
};


