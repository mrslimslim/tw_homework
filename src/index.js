import React from "react";
import * as ReactDOM from "react-dom";
import App from '@src/App'


const render = Component => {
  ReactDOM.render(
        <Component />,
    document.getElementById('app')
  )
}

render(App)