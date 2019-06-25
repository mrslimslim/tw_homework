import Loadable from 'react-loadable'
import PageLoading from '@components/PageLoading'

const loadComponent = (loader) =>
  Loadable({
    loader,
    loading: PageLoading
  })

export const asynchronousComponents = {
  DashboardPage: loadComponent(() => import(/* webpackChunkName: "dashboardpage" */ '@pages/Home/DashboardPage')),
  AgentPage: loadComponent(() => import(/* webpackChunkName: "agentpage" */ '@pages/Home/AgentPage')),
  MyCruisePage: loadComponent(() => import(/* webpackChunkName: "mycuisepage" */ '@pages/Home/MyCruisePage')),
  HelpPage: loadComponent(() => import(/* webpackChunkName: "helpgage" */ '@pages/Home/HelpPage'))
}

export const menu = [
  {
    id: 1,
    path: '/dashboard',
    title: 'DASHBOARD',
    icon: 'icon-dashboard',
    component: 'DashboardPage',
    exact: true
  }, {
    id: 2,
    path: '/',
    title: 'AGENT',
    icon: 'icon-sitemap',
    component: 'AgentPage',
    exact: true
  }, {
    id: 3,
    path: '/mycruise',
    title: 'MY CRUISE',
    icon: 'icon-boat',
    component: 'MyCruisePage',
    exact: true
  }, {
    id: 4,
    path: '/help',
    title: 'HELP',
    icon: 'icon-life-bouy',
    component: 'HelpPage',
    exact: true
  }
]

export default menu
