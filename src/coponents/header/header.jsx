import React from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom'
const Header = (props) => {
  return <header className={s.header}>
    <img src='https://i.pinimg.com/originals/2f/5a/2a/2f5a2aae37a217d323cc0967219ffe1c.jpg' />
    <div className={s.logblok}>
      
      
      {props.isLOG ? 
        props.login+' / '+props.email
         : <NavLink to={'/login'}>LOGIN</NavLink>}
    </div>
  </header>
}
export default Header;