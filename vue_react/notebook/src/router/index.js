import Home from '@/views/Home'
import Data from '@/views/Data'
import User from '@/views/User'
import Login from '@/views/Login'
import UserInfo from '@/views/UserInfo'

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
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/userinfo',
    component: UserInfo
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes 