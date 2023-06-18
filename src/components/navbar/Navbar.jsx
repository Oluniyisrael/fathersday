import React from 'react'
import './Navbar.css'
import BirthdayCake from '../../assets/gifs/cake.gif'

function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li>
                <img src={BirthdayCake} alt="BirthdayCake" className='BirthdayCake'/>
            </li>
            <li>
                <span className='sideCake'>happy happy birthday dear!!</span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar