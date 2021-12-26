import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({isActive}) => (isActive ? s.activeLink : "")}>Profile</NavLink>
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
                <div className={s.else}><img src='https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'/></div>
                <b>Andrew</b>
                <div className={s.else}><img src='https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'/></div>
                <b>Sasha</b>
                <div className={s.else}><img src='https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png'/></div>
                <b>Sveta</b>
            </div>

        </nav>
    )
}
export default Navbar
