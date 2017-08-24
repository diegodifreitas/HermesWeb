import React from 'react'

import { convertTimestamp } from '../../common/utils'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(message => (
      <div className="direct-chat-msg" key={message.id}>
        <div className="direct-chat-info clearfix">
          <span className="direct-chat-name pull-left"> {message.user.name} </span>
          <span className="direct-chat-timestamp pull-right">{convertTimestamp(message.datetime)}</span>
        </div>
        <img className="direct-chat-img" src={message.user.photo} alt={message.user.name} />

        <div className="direct-chat-text">
          {message.text}
        </div>
      </div>
    ))
  }

  return (
    <div className="direct-chat-messages">
      {renderRows()}
    </div>
  )
}