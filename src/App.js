import * as React from 'react'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import PageLoading from '@components/PageLoading'
import PrivateRoute from '@shared/PrivateRoute'

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '@views/Home'),
    loading: PageLoading
})

const Login = Loadable({
    loader: () => import(/* webpackChunkName: "login" */ '@views/Login'),
    loading: PageLoading
})

const AppWrapper = props => <div>{props.children}</div>

class App extends React.Component {
    render() {
        return (
            <AppWrapper>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute path="/" component={Home} />
                    </Switch>
                </Router>
            </AppWrapper>
        )
    }
}

export default hot(module)(App)
