import './index.scss'

import React, { Component } from 'react'

export default class Modal extends Component {
  render () {
    const { left = 0, top = 0 } = this.props
    return (
      <div className='tw-modal' style={{ left: left, top: top }}>
        <p className='notice'>Separate multiple resource name with commas</p>
        <input className='modal-input' type='text' placeholder='Input value' />
        <div className='modal-button-group'>
          <button className='add'>Add Resources</button>
          <button className='cancel'>Cancel</button>
        </div>
      </div>
    )
  }
}
