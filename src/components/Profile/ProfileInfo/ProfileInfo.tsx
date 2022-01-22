import React from 'react';
import pngHeader from '../../../Images/pngHeader.png';
import s from './ProfileInfo.module.css'
import { ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../../../preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType
}
const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.prof}>
            <div >
                <img src={pngHeader}/>
            </div>
        </div>
        <div className={s.description}>
            <div className={s.ava}>
                <img src={props.profile.photos?.large}/>
            </div>

            {/*{props.profile.contacts}*/}
            {/*{props.profile.fullName}*/}
            {/*{props.profile.aboutMe}*/}
            {/*{props.profile.userId}*/}
            {/*{props.profile.lookingForAJob}*/}
            {/*{props.profile.lookingForAJobDescription}*/}
        </div>
    </div>

}
export default ProfileInfo