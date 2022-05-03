import React from 'react';
import natural from '../../Images/natural.png';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
            <img src={natural}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>

        </header>
}
export default Header