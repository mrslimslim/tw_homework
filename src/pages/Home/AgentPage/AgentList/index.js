import './index.scss'

import React, { Component } from 'react'
import AgentItem from './AgentItem'
import data from './../../../../mocks/db.json'
import Modal from '@components/Modal'

export default class AgentList extends Component {
  state = {
    agents: []
  }

  componentDidMount () {
    this.setState({
      agents: data.agents
    })
  }

  onDeleteResource = (id, index) => {
    const agents = this.state.agents.map(item => {
      if (item.id === id) {
        item.resource = [...item.resources.splice(index, 1)]
      }
      return item
    })
    this.setState({
      agents
    })
  }

  render () {
    const agents = this.state.agents
    return (
      <div className='tw-agent-list'>
        {agents.map(agent => {
          return <AgentItem key={String(agent.id)} onDeleteResource={this.onDeleteResource} {...agent} />
        })}
        <Modal />
      </div>
    )
  }
}
