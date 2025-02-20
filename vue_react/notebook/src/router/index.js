import Home from '@/views/Home'
import Data from '@/views/Data'
import User from '@/views/User'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/data',
    component: Data
  },
  {
    path: '/user',
    component: User
  }
]

export default routes 