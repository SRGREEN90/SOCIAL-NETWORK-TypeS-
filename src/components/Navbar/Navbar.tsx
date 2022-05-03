import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import man from '../common/assets/man.png'
import woman from '../common/assets/woman.png'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) => (isActive ? s.activeLink : "")}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={({isActive}) => (isActive ? s.activeLink : "")}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => (isActive ? s.activeLink : "")}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({isActive}) => (isActive ? s.activeLink : "")}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({isActive}) => (isActive ? s.activeLink : "")}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({isActive}) => (isActive ? s.activeLink : "")}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' className={({isActive}) => (isActive ? s.activeLink : "")}>Friends</NavLink>
            </div>
            <div className={s.nameF}>
                <div className={s.else}>
                    <img src={man}/>
                    <b>Andrew</b>
                </div>
                <div className={s.else}>
                    <img src={man} alt='man'/>
                    <b>Sasha</b>
                </div>
                <div className={s.else}>
                    <img src={woman} alt='woman'/>
                    <b>Sveta</b>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
