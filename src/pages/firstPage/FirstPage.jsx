import React from 'react'
import './FirstPage.css'

function FirstPage() {
  function goToBirthdayPage() {
    setTimeout(() => {
      window.document.location +="daddy"
    }, 4000);
  }
  return (
    <div id='giftPage'>
        <div className="birthday-gift">
           
            <div className="gift">
            <input id='click' type='checkbox' onClick={goToBirthdayPage}/>
            <label className='click' htmlFor='click'> <span className="clickBanner">Click me!</span></label>
            <div className="wishes">Happy Fathers day <br/> <span id="name"> Daddy!!!</span> </div>
                <div className="sparkles">
                <div className="spark1"></div>
                <div className="spark2"></div>
                <div className="spark4"></div>
                <div className="spark3"></div>
                <div className="spark5"></div>
                <div className="spark6"></div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default FirstPage