import React, { Component } from 'react'

export default class Menu extends Component {
  componentDidMount () {

  }

  render () {
    const props = { ...this.props }
    return (
      <ul className='tw_menu'>
        {props.children}
      </ul>
    )
  }
}
