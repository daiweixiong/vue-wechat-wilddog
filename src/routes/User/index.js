// Sync route definition
import subRoutes from './routes'

export default {
  title: 'user',
  name:'user',
  component: resolve => require(['./components/UserView'], resolve),
  subRoutes
}
