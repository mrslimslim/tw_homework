import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Menu from './Menu'
import LogTable from './LogTable'
import { menu, asynchronousComponents } from './Menu/menu'

export default class Home extends Component {
  render () {
    return (
      <section className='container'>
        <Header />
        <section className='content'>
          <div className='left-side'>
            <Menu />
            <LogTable />
          </div>
          <div className='right-side'>
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
      </section>
    )
  }
}
