import React from 'react';
import pngHeader from '../../../Images/pngHeader.png';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div className={s.prof}>
            <div >
                <img src={pngHeader}/>
            </div>
            <div className={s.description}>
                AVA + DESCRIPTION
            </div>
        </div>
    </div>

}
export default ProfileInfo