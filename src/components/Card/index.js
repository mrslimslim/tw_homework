import './index.scss'
import React, { Component } from 'react'

export default class Card extends Component {
  render () {
    const props = { ...this.props }
    const { themeColor, themeIcon, type, actualNumber, isAnimate } = props
    return (
      <div className='tw_card' style={{ backgroundColor: themeColor }}>
        <h1 className='title'>{type}</h1>
        <i className={`cruisefont icon-${themeIcon} ${isAnimate ? 'animate' : ''}`} />
        <p className='number'>{actualNumber}</p>
      </div>
    )
  }
}
