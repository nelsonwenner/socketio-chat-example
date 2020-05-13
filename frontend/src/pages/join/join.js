import React, { Component } from 'react';
import './join.css';

import Join from '../../components/Join';

class JoinContainer extends Component {
  
  constructor() {
    super();

    this.state= {
      name: '',
      room: '',
      error: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  handleClick = (event) => {
    const { name, room } = this.state;
    if(!name || !room) {
      event.preventDefault();
      this.setState(() => ({ error: 'Fill in all the fields' }));
    } 
  }

  render() {
    const { name, room, error } = this.state;
    return (
      <Join
        valueName={ name }
        valueRoom={ room }
        error={ error }
        onClick={ this.handleClick }
        onChange={ this.handleChange }
      />
    )
  }
}

export default JoinContainer;