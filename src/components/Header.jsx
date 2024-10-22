import React from 'react'

const Header = () => {
  return (
    <div>
     <nav>
      <img src = "Images\brand_logo.png" alt = "Nike logo"></img>

      <ul className='headerContent'>
        <li href = "#">Menu</li>
        <li href = "#">Location</li>
        <li href = "#">About</li>
        <li href = "#">Contact</li>
      </ul>

      <button>Login </button>


     </nav>
      
    </div>
  )
}

export default Header
