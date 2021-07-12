import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';
const Navbar = () =>{
    return <nav className={s.nav}>
    <div className={`${s.item} ${s.activ}`}>
      <NavLink to='/profile' activeClassName={s.active}>PROFILE</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.active}>MESSAGES</NavLink>
    </div>
    <div className={s.item}>
      <a >MUSIC</a>
    </div>
    <div className={s.item}>
      <a >NEWS</a>
    </div>
    <div className={s.item}>
      <a >SETTING</a>
    </div>
    <div className={s.item}>
      <a >--------------</a>
    </div>
    <div className={s.item}>
    <NavLink to='/users' activeClassName={s.active}>USERS</NavLink>
    </div>
  </nav>
}
export default Navbar;