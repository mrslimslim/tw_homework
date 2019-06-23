import './index.scss'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../../logo.svg'
import Avatar from '@components/Avatar'

export default class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div />
        <Link to='/'>
          <img src={logo} alt='cruise' />
        </Link>
        <Avatar />
      </div>
    )
  }
}
