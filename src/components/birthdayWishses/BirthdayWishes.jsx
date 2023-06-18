import React
,{useState,useEffect} 
from 'react'
import MainContent from '../mainContent/MainContent'
import './BirthdayWishes.css'


function BirthdayWishes() {
  var defSec = 536457613;
  var defMin = 149016;
  const [minutes, setMinutes] = useState(defMin)
  const [seconds, setSeconds] = useState(defSec)
  useEffect(() => {
    const id = setInterval(() => 
      setSeconds((oldCount) => oldCount + 1)
    , 1000);
    return ()=> {
      clearInterval(id);
    };
  }, [])
  useEffect(() => {
    const classN = setInterval(() => 
    setMinutes((oldMin) => oldMin + 1)
  , 60000);
  return ()=> {
    clearInterval(classN);
  };
  }, [])
  

  return (
    <div className='topping'>
        <span className='banner'>The year 2006  // March 2006  //  March 20th, 2006</span>
      <MainContent>
      <table className='contents'>
        <tbody>
            <tr className='firstRow'>
                <td>Weekday</td>
                <td>Age</td>
                <td>Zodiac</td>
            </tr>
            <tr className='secondRow'>
                <td>Monday</td>
                <td>17</td>
                <td id='zodiacIcon'>♓</td>
            </tr>
            <tr className='thirdRow'>
                <td>March 20th 2006, the day that you were born, was a Monday.</td>
                <td>Turned 17 yesterday!!!!!</td>
                <td>Pisces (The Fish) <br />February 20th, 2006 - March 20th, 2006</td>
            </tr>
        </tbody>
      </table>
        </MainContent>
        <MainContent>
          <h1>Wow, over 6,000 days old!</h1>
          <p><b>Why not celebrate an alternative birthday?</b> In 794 days, exactly on <b> May 19th, 2025</b>, people who were born on March 20th, 2006 will be <b>7,000 days old!</b> </p>
          <div className='aboutBirthday'>
            <div>
              <div className='dayBar'> <h2>Days</h2> <h2>6,206</h2> </div>
              <div className='dayLevel'></div>
            </div>
            <div>
              <div className='weekBar'> <h2>Weeks</h2> <h2>886</h2> </div>
              <div className='weekLevel'></div>
            </div>
            <div>
              <div className='monthBar'> <h2>Months</h2> <h2>203</h2> </div>
              <div className='monthLevel'></div>
            </div>
          </div>
          <div>
            <h2 id='heading'>Age in hours, minutes and seconds</h2>
            <table className='timeDet'>
              <tbody>
                <tr>
                  <td>{seconds.toLocaleString()}</td>
                  <td>{minutes.toLocaleString()}</td>
                  <td>149,016</td>
                </tr>
                <tr>
                  <td> <hr id='blue'/></td>
                  <td> <hr id='green'/></td>
                  <td> <hr id='yellow'/></td>
                </tr>
                <tr>
                  <td>seconds</td>
                  <td>minutes</td>
                  <td>hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </MainContent>
    </div>
  )
}

export default BirthdayWishes