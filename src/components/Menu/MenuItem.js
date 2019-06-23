import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cs from 'classnames'

export default class MenuItem extends Component {
  componentDidMount () {

  }

  onClick = () => {
    const { switchPage, id } = this.props
    switchPage(id)
  }

  render () {
    const props = { ...this.props }
    const mouseEvent = {
      onClick: props.disabled ? null : this.onClick
    }
    return (
      <li className={cs('tw_menu_item', { 'active': props.isActive })} {...mouseEvent}>
        <Link to={props.path}>
          {props.children}
        </Link>
      </li>
    )
  }
}
