import './index.scss'

import React, { Component } from 'react'
import AgentItem from './AgentItem'
import data from './../../../../mocks/db.json'

export default class AgentList extends Component {
  state = {
    agents: [],
    mousePosition: { left: 0, top: 0 },
    modalVisible: false,
    currentAgentId: -1
  }

  componentDidMount () {
    this.setState({
      agents: data.agents
    })
  }

  onOpenModal = (id) => {
    this.setState({
      modalVisible: true,
      currentAgentId: id
    })
  }

  onHideModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  onCommitResources = (value) => {
    const resources = value.split(',').map(item => item.trim()).filter(item => item !== '')

    const list = this.state.agents.map(item => {
      if (item.id === this.state.currentAgentId) {
        item.resources = [...item.resources.concat(resources)]
      }
      return item
    })
    this.setState({ modalVisible: false, agents: list })
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
    const { agents, modalVisible } = this.state
    return (
      <div className='tw-agent-list'>
        {agents.map(agent => {
          return <AgentItem key={String(agent.id)} onOpenModal={this.onOpenModal} onDeleteResource={this.onDeleteResource} {...agent} />
        })}
        {this.props.renderModal({ modalVisible, onHideModal: this.onHideModal, onCommitResources: this.onCommitResources })}
      </div>
    )
  }
}
