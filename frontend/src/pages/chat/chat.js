import React, { Component } from 'react';
import './chat.css';

import queryString from 'query-string';
import socket from 'socket.io-client';

import Chat from '../../components/Chat';

class ChatContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      room: '',
      socket: null,
      message: '',
      messages: []
    }
  }
  
  componentWillMount() {
    const { name, room } = queryString.parse(this.props.location.search);
    
    const currentSocket = socket('http://localhost:3000');
    
    currentSocket.emit('join', {name, room});

    this.setState(() => ({name: name, room: room, socket: currentSocket}));
  }

  onMessages = (socket, messages) => {
    socket.on('message', message => this.setState({messages: [...messages, message]}));
  } 

  handleChange = (event) => {
    event.preventDefault();
    this.setState({message: event.target.value});
  }

  sendMenssage = (event) => {
    event.preventDefault();

    const { message } = this.state;

    if (message) {
      this.state.socket.emit('sendMessage', message, () => this.setState({message: ''}));
    }

  } 

  render() {
    const { message, socket, messages } = this.state;
      
    this.onMessages(socket, messages);

    console.log(messages)

    return (
      <Chat
        value={ message }
        onChange={ this.handleChange }
        onKeyPress={ this.sendMenssage }
      />
    )
  }
}

export default ChatContainer;