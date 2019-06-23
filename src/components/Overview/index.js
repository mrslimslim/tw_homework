import './index.scss'

import React from 'react'

export default function Summary (props) {
  const { physicalNumber, virtualNumber } = props
  const overviewItems = [{
    name: 'ALL',
    number: physicalNumber + virtualNumber,
    id: 1
  }, {
    name: 'PHYSICAL',
    number: physicalNumber,
    id: 2
  }, {
    name: 'VIRTUAL',
    number: virtualNumber,
    id: 3
  }]
  return (
    <ul className='tw_overview'>
      {overviewItems.map(item => {
        return <li key={String(item.id)} className='item'>{
          <React.Fragment>
            <span>{item.name}</span>
            <span>{item.number}</span>
          </React.Fragment>
        }</li>
      })}
    </ul>
  )
}
