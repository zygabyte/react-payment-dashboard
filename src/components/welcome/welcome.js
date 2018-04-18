import React, { Component } from 'react';
import Logo from '../logo/logo'
import logo from '../../img/logo.png'

const welcome = () => {
    return <div>
        <Logo src={logo} width='200px' height='200px'/>
        <h1>Hello Mr Kayode</h1>
        <h3>What do you want to do today?</h3>
    </div>
  }
  
  export default welcome