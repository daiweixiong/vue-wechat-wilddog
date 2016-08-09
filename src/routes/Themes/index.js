// Sync route definition
export default {
  name: 'themes',
  title: 'Themes',
  exact: true,
  component: resolve => require(['./components/ThemesView'], resolve)
};


