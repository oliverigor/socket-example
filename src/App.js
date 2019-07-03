


import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import socket from "socket.io-client"


export default class App extends Component {

  async componentDidMount() {
    this.subscribeToNewFiles();
  }

  subscribeToNewFiles = () => {
    const io = socket("https://localhost:5001");

    //No on do socket vc coloca o nome do evento que vc envio do node
    io.on("platform_origin",console.log('Nova plataforma de origem') 
    );
  };


  render() {
    return(<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>);
  }
}




