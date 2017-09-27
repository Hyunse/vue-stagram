import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MyInfo from '@/components/MyInfo'
import MyFeed from '@/components/MyFeed'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/me'
    },
    {
      path: '/me',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/feeds',
      name: 'MyFeed',
      component: MyFeed
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && token === null) {
    if (to.hash.includes('#access_token')) {
      const tokenHash = to.hash
      const tokenValue = tokenHash.split('=')[1]
      localStorage.setItem('token', tokenValue)
      next('/me')
      return
    }
    next('/login')
    return
  }
  next()
})

export default router








