import React, { Component } from 'react';
import './chat.css';

import queryString from 'query-string';
import socket from 'socket.io-client';

import TextContainer from '../../components/TextContainer/TextContainer';
import Messages from '../../components/message/messages';
import InfoBar from '../../components/InfoBar';
import Input from '../../components/Input';


class ChatContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      room: '',
      socket: null,
      message: '',
      messages: [],
      users: []
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
  
  onUsers = (socket) => {
    socket.on('roomData', roomdata => this.setState({users: [...roomdata.users]}));
  }

  setMessage = (event) => {
    event.preventDefault();
    this.setState({message: event.target.value});
  }

  sendMessage = (event) => {
    event.preventDefault();

    const { message } = this.state;

    if (message) {
      this.state.socket.emit('sendMessage', message, () => this.setState({message: ''}));
    }
  } 

  render() {
    const { message, socket, messages, room, name, users } = this.state;

    this.onMessages(socket, messages);
    this.onUsers(socket);

    console.log(users)

    return (
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={ room } />
          <Messages messages={ messages } name={ name } />
          <Input message={ message} setMessage={ this.setMessage } sendMessage={ this.sendMessage } />
        </div>
        <TextContainer users={users}/>
      </div>
    )
  }
}

export default ChatContainer;