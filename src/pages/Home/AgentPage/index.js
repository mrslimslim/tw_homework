import './index.scss'

import React, { Component } from 'react'
import Overviews from './Overviews'
import Navbar from './Navbar'
import AgentList from './AgentList'
import Modal from '@components/Modal'

export default class AgentPage extends Component {
  render () {
    return (
      <div className='tw-agent'>
        <Overviews />
        <Navbar />
        <AgentList renderModal={info => (
          <Modal info={info} />
        )} />
      </div>
    )
  }
}
