import React from 'react';
import pngHeader from '../../../Images/pngHeader.png';
import s from './ProfileInfo.module.css'
import {ProfileType, updateUserStatusThunkCreator} from "../../Redux/profile-reducer";
import {Preloader} from "../../../preloader/Preloader";
import login from "../../Login/Login";
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatusThunkCreator: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.prof}>
            <div >
                <img src={pngHeader} alt='pngHeader'/>
            </div>
        </div>
        <div className={s.description}>
            <div className={s.ava}>
                {
                    <img src={props.profile.photos?.large}/>
                }
                 <ProfileStatus status={props.status}
                                updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                 />
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