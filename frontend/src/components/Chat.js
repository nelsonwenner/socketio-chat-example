import React from 'react';

const Chat = ({value, onChange, onKeyPress}) => {
  return (
    <div className="outerContainer">
      <div className="container">
        <input
          type="text" 
          value={ value }
          onChange={ onChange }
          onKeyPress={ event => event.key === 'Enter' ? onKeyPress(event) : null }  
        />
      </div>
    </div>
  )
}

export default Chat;