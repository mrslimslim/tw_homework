import './index.scss'

import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SiderMenu from './SiderMenu'
import LogTable from './LogHistory'
import { menu, asynchronousComponents } from './SiderMenu/menuConfig'

export default class Home extends Component {
  render () {
    return (
      <section className='tw_container'>
        <section className='tw_header'>
          <Header />
        </section>
        <section className='tw_content'>
          <div className='tw_sider'>
            <SiderMenu />
            <LogTable />
          </div>
          <div className='tw_center'>
            <Router>
              <Switch>
                {menu.map(m => {
                  if (!m.path) {
                    return null
                  }
                  return (
                    <Route
                      key={m.id}
                      exact={m.exact}
                      path={m.path}
                      component={m.component ? asynchronousComponents[m.component] : null}
                    />
                  )
                })}
                <Route component={Error} />
              </Switch>
            </Router>
          </div>
        </section>
        <Footer />
      </section>
    )
  }
}
