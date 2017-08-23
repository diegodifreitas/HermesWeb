import React from 'react'

import IconButton from '../../common/ui/button/ButtonIcon'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(message => (

      <div className="direct-chat-msg" key={message.id}>
        <div className="direct-chat-info clearfix">
          <span className="direct-chat-name pull-left"> {message.user.name} </span>
        </div>
        <img className="direct-chat-img" src={message.user.photo} alt={message.user.name} />

        <div className="direct-chat-text">
          {message.text}
        </div>
      </div>
      /*       <tr key={message.id}>
              <td className={message.done ? 'markedAsDone' : ''}>{message.description}</td>
              <td>
                <IconButton style='sucess' icon='check'
                  hide={message.done}
                  onClick={() => props.handleMarkAsDone(message)}></IconButton>
                <IconButton style='warning' icon='undo'
                  hide={!message.done}
                  onClick={() => props.handleMarkAsPending(message)}></IconButton>
                <IconButton style='danger' icon='trash-o'
                  hide={!message.done}
                  onClick={() => props.handleRemove(message)}></IconButton>
              </td>
            </tr> */
    ))
  }
  return (
    <div className="box-body" >
      <div className="box box-warning direct-chat direct-chat-warning">
        <div className="direct-chat-messages">
          {renderRows()}
        </div>
      </div>
    </div >
  )
}