import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ProjectDetail from '@/components/ProjectDetail'
import Projects from '@/components/Projects'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/project/:projectID',
      name: 'ProjectDetail',
      component: ProjectDetail
    },
    {
      path: '/error/:type',
      name: 'error',
      component: Error
    },
    {
      path: '/projects/:cateID/:subcateID',
      name: 'Projects',
      component: Projects
    }
  ]
})
