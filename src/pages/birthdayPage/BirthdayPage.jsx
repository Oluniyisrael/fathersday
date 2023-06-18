import React, { Component } from 'react'
import mydaddy from '../../assets/png/Mydaddy.png' 
import './BirthdayPage.css'

export default class BirthdayPage extends Component {
  render() {
        return (
          <div>
            <div class="content">
    <div class="frame">
      <img src={mydaddy} alt="daddy" width="300" height="300"/>
    </div>
    <h1 class="shimmer">Happy Father's Day</h1>
    <p>Any man can be a father, but it takes someone special to be a dad. A father is neither an anchor to hold us back, nor a sail to take us there, but a guiding light whose love shows us the way. I am so luck to have you as a Dad and I cherish this priveledge every day. Happy fathers day sir</p>
  </div>
  <div id="overlay">From Israel</div>
          </div>
    )
  }
}
