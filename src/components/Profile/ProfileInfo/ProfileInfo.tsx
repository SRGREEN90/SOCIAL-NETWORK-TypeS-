import React from 'react';
import pngHeader from '../../../Images/pngHeader.png';
import s from './ProfileInfo.module.css'
import {profileInitialStateType, ProfileType} from "../../Redux/profile-reducer";
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
            <div className={s.description}>
                <img src={props.profile.photos?.large}/>
                {/*{props.profile.contacts}*/}
                {/*{props.profile.fullName}*/}
                {/*{props.profile.aboutMe}*/}
                {/*{props.profile.userId}*/}
                {/*{props.profile.lookingForAJob}*/}
                {/*{props.profile.lookingForAJobDescription}*/}
            </div>
        </div>
    </div>

}
export default ProfileInfo