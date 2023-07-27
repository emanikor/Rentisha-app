import { useState } from 'react';
import React from 'react'
import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar=() => {
  const [clicked, setClicked] = useState(false)
    const menuList = MenuList.map(({ url, title }, index) => {
        return (
          <li key={index}>
            <NavLink exact to={url} className="active">
                {title}
            </NavLink>
          </li>
        );
      });

     
      const handleClick =() =>{
        setClicked(!clicked)
      }
      

  return (
    
    <nav>
<div className='logo'>
    <span>Rentisha</span>

</div>
<div className='menu-icon' onClick={handleClick}>
    <i className={clicked ? 'fa-solid fa-x': 'fa-solid fa-bars'} ></i>
</div>
<ul className={clicked ? "menu-list " :" menu-list close"}>
{menuList}
</ul>
{/* <button>signup & signin</button> */}
    </nav>

  )
}

export default Navbar