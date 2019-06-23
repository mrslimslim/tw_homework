import './index.scss'

import React from 'react'

export default function Avatar () {
  return (
    <div className='tw-avatar'>
      <div className='avatar-img'>
        <img src='../../assets/mockups/1/Guide.png' />
      </div>
      <i className='cruisefont icon-angle-down' />
      <ul className='user-menu'>
        <li>
          <i className='cruisefont icon-id-card' />
          <span>Profile</span>
        </li>
        <li>
          <i className='cruisefont icon-sign-in' />
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  )
}
