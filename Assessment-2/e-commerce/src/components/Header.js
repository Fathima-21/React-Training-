import React from 'react'

function Header() {
  return (
    <nav>
        <div className="logo">Our Page.</div>
        <ul className='logobuttons'>
            <li>Home</li>
            <li>Our Products</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <div className="search">
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-basket"></i>
        </div>
    </nav>
  )
}

export default Header