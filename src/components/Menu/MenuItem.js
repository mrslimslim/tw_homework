import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuItem extends Component {
  componentDidMount () {

  }

  onClick = () => {
    const props = { ...this.props }
    console.log(props)
  }

  onMouseEnter = () => {
    console.log('enter')
  }

  onMouseLeave = () => {
    console.log('leave')
  }

  render () {
    const props = { ...this.props }
    const style = { ...props.style }
    const mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      onMouseLeave: props.disabled ? null : this.onMouseLeave,
      onMouseEnter: props.disabled ? null : this.onMouseEnter
    }
    return (
      <li className='tw_menu' style={style} {...mouseEvent}>
        <Link to={props.path}>
          {props.children}
        </Link>
      </li>
    )
  }
}
