import React, { Component } from 'react'
import './MidWidthContainer.css'

export default class MidWidthContainer extends Component {
  render() {

    return (
      <div className='midwidth'>
        {this.props.children}
      </div>
    )
  }
}
