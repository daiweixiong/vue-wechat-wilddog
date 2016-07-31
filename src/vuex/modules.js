const modulesContext = require.context('../', true, /modules\/.*\.js$/)

export default modulesContext.keys().reduce((modules, key) => {
  let _key = key.replace(/[^\/]*[\/]+/g, '').replace(/(^\.\/)|(\.js$)/g, '')

  // 未知BUG。。。
  modules[_key] = modulesContext(key).default
  return modules
}, {})
