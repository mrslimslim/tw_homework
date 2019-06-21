import * as React from 'react'
import { Route } from 'react-router-dom'

class PrivateRoute extends React.Component {

    checkLocalUserInfo = () => {
       console.log('check authority');
    }

    componentDidMount() {
        this.checkLocalUserInfo()
    }

    render() {
        const { component: Component, ...rest } = this.props
        return <Route {...rest} render={props => <Component {...props} {...rest} />} />
    }
}

export default PrivateRoute
