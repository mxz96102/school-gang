import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ProjectDetail from '@/components/ProjectDetail'
import Projects from '@/components/Projects'
import Talents from '@/components/Talents'
import Error from '@/components/Error'
import ProfileInfo from '@/components/Profile/Info'
import ProfileMessage from '@/components/Profile/Message'
import ProfileProject from '@/components/Profile/Project'
import Publish from '@/components/Publish'

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
      path: '/projects/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/talents/',
      name: 'Talents',
      component: Talents
    },
    {
      path: '/projects/:keyword',
      name: 'ProjectsAll',
      component: Projects
    },
    {
      path: '/talents/:keyword',
      name: 'TalentsAll',
      component: Talents
    },
    {
      path: '/profile/info',
      name: 'ProfileInfo',
      component: ProfileInfo
    },
    {
      path: '/profile/message',
      name: 'ProfileMessage',
      component: ProfileMessage
    },
    {
      path: '/profile/project/:type',
      name: 'ProfileProject',
      component: ProfileProject
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    }
  ]
})
