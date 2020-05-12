import React, { Component } from 'react';
import './chat.css';

import queryString from 'query-string';
import io from 'socket.io-client';

import Chat from '../../components/Chat';

class ChatContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      room: '',
      socket: null
    }
  }

  componentWillMount() {
    const { name, room } = queryString.parse(this.props.location.search);
  
    const currentSocket = io('http://localhost:3000');
    
    currentSocket.on('connect', function () {
      console.log('connected!');
    
    });
    

    this.setState(() => ({name: name, room: room, socket: currentSocket}));
  }

  render() {
    console.log(this.state);
    return (
      <Chat></Chat>
    )
  }
}

export default ChatContainer;