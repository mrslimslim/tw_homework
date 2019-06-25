import './index.scss'

import React, { Component } from 'react'
import AgentItem from './AgentItem'
import Axios from 'axios'

export default class AgentList extends Component {
  state = {
    agents: [],
    mousePosition: { left: 0, top: 0 },
    modalVisible: false,
    currentAgentId: -1
  }

  // 获取数据
  componentDidMount () {
    Axios.get('http://localhost:3004/agents').then(res => {
      this.setState({
        agents: res.data
      })
    })
  }

  // 打开悬浮框
  onOpenModal = (id) => {
    this.setState({
      modalVisible: true,
      currentAgentId: id
    })
  }

  // 隐藏悬浮框
  onHideModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  // 添加resource
  onCommitResources = (value) => {
    let modifiedId, modifiedData
    const resources = value.split(',').map(item => item.trim()).filter(item => item !== '')
    const list = this.state.agents.map(item => {
      if (item.id === this.state.currentAgentId) {
        item.resources = [...item.resources.concat(resources)]
        modifiedId = item.id
        modifiedData = item
      }
      return item
    })
    if (modifiedId) {
      Axios.put(`http://localhost:3004/agents/${modifiedId}`, modifiedData).then(result => {
        if (result.status === 200) {
          this.setState({ modalVisible: false, agents: list })
        }
      })
    }
  }

  // 删除resource
  onDeleteResource = (id, index) => {
    let modifiedId, modifiedData
    const agents = this.state.agents.map(item => {
      if (item.id === id) {
        item.resource = [...item.resources.splice(index, 1)]
        modifiedId = item.id
        modifiedData = item
      }
      return item
    })
    if (modifiedId) {
      Axios.put(`http://localhost:3004/agents/${modifiedId}`, modifiedData).then(result => {
        console.log(result)
        if (result.status === 200) {
          this.setState({ agents })
        } else {
          // todo
          console.log('something odd')
        }
      })
    }
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
