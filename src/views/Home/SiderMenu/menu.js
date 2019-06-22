import Loadable from 'react-loadable'
import PageLoading from '@components/PageLoading'

const loadComponent = (loader) =>
  Loadable({
    loader,
    loading: PageLoading
  })

export const asynchronousComponents = {
  DashboardPage: loadComponent(() => import(/* webpackChunkName: "dashboardpage" */ '@pages/Home/DashboardPage')),
  AgentPage: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@pages/Home/AgentPage')),
  MycruisePage: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@pages/Home/MycruisePage')),
  HelpPage: loadComponent(() => import(/* webpackChunkName: "dashboard" */ '@pages/Home/HelpPage'))
}

export const menu = [
  {
    id: 1,
    path: '/dashboard',
    title: 'DASHBOARD',
    icon: 'dashboard',
    component: 'DashboardPage',
    exact: true
  }, {
    id: 2,
    path: '/',
    title: 'AGENT',
    icon: 'agent',
    component: 'AgentPage'
  }, {
    id: 3,
    path: '/mycruise',
    title: 'MYCRUISE',
    icon: 'mycruise',
    component: 'MycruisePage',
    exact: true
  }, {
    id: 4,
    path: '/agent',
    title: 'HELP',
    icon: 'help',
    component: 'HelpPage',
    exact: true
  }
]

export default menu
