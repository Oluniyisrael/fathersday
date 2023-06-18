import './MainContent.css'
import React, { Component } from 'react'

export default class MainContent extends Component {
  render() {
    return (
<div className='details'>
        {/* <span id='head'>March 20th, 2006</span> */}
       {this.props.children}
    </div>    )
  }
}
