import React from 'react';
import natural from '../../Images/natural.png';
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
            <img src={natural}/>
        </header>
}
export default Header