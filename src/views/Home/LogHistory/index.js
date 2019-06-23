import './index.scss'
import React from 'react'

export default function LogHistory () {
  const logList = [
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test',
    'bjstdmngbdr01/Acceptance_test'
  ]
  return (
    <div className='tw_log_history'>
      <h1>History</h1>
      <ul className='history_list'>
        {logList.map((log, index) => {
          return <li key={index}><i className='dot' /> <p className='log'>{log}</p></li>
        })}
      </ul>
    </div>
  )
}
