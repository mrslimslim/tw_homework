import './index.scss'
import React, { Component } from 'react'

export default class Navbar extends Component {
  render () {
    return (
      <div className='tw_navbar'>
        <ul className='tab'>
          <li className='item active'>ALL</li>
          <li className='item'>Physical</li>
          <li className='item'>Virtual</li>
        </ul>
        <div className='input-search'>
          <i className='cruisefont icon-search' />
          <input />
        </div>
        <i className='cruisefont layout-icon icon-th-card' />
        <i className='cruisefont layout-icon icon-th-list active' />
      </div>
    )
  }
}
