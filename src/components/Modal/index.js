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
    document.addEventListener('mousewheel', this.disableScroll.bind(this), false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onOpenModal.bind(this))
    document.removeEventListener('mousedown', this.checkClickOutside.bind(this))
  }

  disableScroll (e) {
    e.preventDefault()
  }

  checkClickOutside = (e) => {
    if (this.modalRef && !this.modalRef.contains(e.target)) {
      this.props.info.onHideModal()
    }
  }

  onChangeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onCommitResources = () => {
    this.props.info.onCommitResources(this.state.value)
    this.setState({
      value: ''
    })
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
      this.props.info.modalVisible ? <div className='tw-modal' ref={node => { this.modalRef = node }} style={{ left: left, top: top }}>
        <p className='notice'>Separate multiple resource name with commas</p>
        <input value={value} onChange={this.onChangeValue} className='modal-input' type='text' placeholder='Input value' />
        <div className='modal-button-group'>
          <button onClick={this.onCommitResources} className='add'>Add Resources</button>
          <button onClick={this.props.info.onHideModal} className='cancel'>Cancel</button>
        </div>
      </div> : null
    )
  }
}
