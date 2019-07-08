import './index.scss'

import React, { Component } from 'react'

export default class Modal extends Component {
  modalRef = null
  state = {
    top: 0,
    left: 0,
    value: ''
  }
  componentDidMount () {
    document.addEventListener('click', this.onOpenModal.bind(this))
    document.addEventListener('mousedown', this.checkClickOutside.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onOpenModal.bind(this))
    document.removeEventListener('mousedown', this.checkClickOutside.bind(this))
  }

  checkClickOutside = (e) => {
    if (this.modalRef && !this.modalRef.contains(e.target)) {
      this.onHideModal()
    }
  }

  onHideModal = (e) => {
    this.props.info.onHideModal()
    this.setState({
      value: ''
    })
  }

  onChangeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onCommitResources = () => {
    this.props.info.onCommitResources(this.state.value)
    this.onHideModal()
  }

  onOpenModal = (e) => {
    if (this.modalRef && this.modalRef.contains(e.target)) {
      return
    }
    const box = e.target.getBoundingClientRect()
    const top = box.top + box.height + 14
    const left = box.left - box.width / 2 - 14 / 2
    this.setState({
      top,
      left
    })
  }

  render () {
    const { left = 0, top = 0, value } = this.state
    return (
      this.props.info.modalVisible ? <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}>
        <div className='tw-modal' ref={node => { this.modalRef = node }} style={{ left: left, top: top }}>
          <p className='notice'>Separate multiple resource name with commas</p>
          <input value={value} onChange={this.onChangeValue} className='modal-input' type='text' placeholder='Input value' />
          <div className='modal-button-group'>
            <button onClick={this.onCommitResources} className='add'>Add Resources</button>
            <button onClick={this.onHideModal} className='cancel'>Cancel</button>
          </div>
        </div>
      </div> : null
    )
  }
}
