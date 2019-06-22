import React, { Component } from 'react'
import ListItem from './ListItem'
import SearchTab from './SearchTab'

export default class AgentPage extends Component {
  render () {
    return (
      <div>AgentPage
        <ListItem />
        <SearchTab />
      </div>
    )
  }
}
