// Sync route definition
export default {
  name: '<%= dashesEntityName %>',
  title: '<%= pascalEntityName %>',
  exact: true,
  component: resolve => require(['./components/<%= pascalEntityName %>View'], resolve)
};


