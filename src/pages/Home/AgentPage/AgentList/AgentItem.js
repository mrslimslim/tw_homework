import React, { Component } from 'react'

export default class AgentItem extends Component {
  onDeleteResource = (id, index) => {
    this.props.onDeleteResource(id, index)
  }

  onOpenModal = () => {
    this.props.onOpenModal(this.props.id)
  }

  render () {
    const { os, status, name, ip, location, resources, id } = this.props
    return (
      <div className='tw-agent-item'>
        <div className='platform-img'>
          <img src={`./assets/images/${os}.png`} />
        </div>
        <div className='agent-info'>
          <div className='agent-status'>
            <div className='server-site'>
              <i className='cruisefont icon-desktop' />
              <span className='server-name'>{name}</span>
            </div>
            <div className='status' style={{ 'backgroundColor': status === 'building' ? '#ff9a2a' : '#7fbc39' }}>{status}</div>
            <div className='ip-site'>
              <i className='cruisefont icon-info' />
              <span className='ip-name'>{ip}</span>
            </div>
            <div className='location-info'>
              <i className='cruisefont icon-folder' />
              <span className='location-name'>{location}</span>
            </div>
          </div>
          <div className='agent-operations'>
            <div className='operation-group'>
              <button className='add-button' onClick={this.onOpenModal}>
                <i className='cruisefont icon-plus' />
              </button>
              {resources.map((resource, index) => {
                return <button key={String(index)} className='resource-button'>
                  <span className='resource-name'>{resource}</span>
                  <i onClick={() => { this.onDeleteResource(id, index) }} className='cruisefont icon-trash' />
                </button>
              })}
            </div>
            <button className='deny-button' style={{ display: status === 'idle' ? 'none' : 'block' }}>
              <i className='cruisefont icon-deny' />
              <span>Deny</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
