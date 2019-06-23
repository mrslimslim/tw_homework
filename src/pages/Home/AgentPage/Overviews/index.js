import './index.scss'

import React, { Component } from 'react'
import Card from '@components/Card'
import Overview from '@components/Overview'

export default class Overviews extends Component {
  render () {
    return (
      <div className='tw-overviews'>
        <Card themeColor='#ff9a2a' themeIcon='cog' isAnimate type='Building' actualNumber={8} />
        <Card themeColor='#7fbc39' themeIcon='coffee' type='Idle' actualNumber={5} />
        <Overview physicalNumber={4} virtualNumber={4} />
      </div>
    )
  }
}
