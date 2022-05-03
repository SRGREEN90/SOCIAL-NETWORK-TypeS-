import React from 'react';
import pngHeader from '../../../Images/pngHeader.png';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../../../preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatusThunkCreator: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profile) {
        return <Preloader/>
    }
    console.log(props.profile.photos?.large)
    return <div>
        <div className={s.prof}>
            <div >
                <img src={pngHeader} alt='pngHeader'/>
            </div>
        </div>
        <div className={s.description}>
            <div className={s.ava}>
                {
                    <img src={props.profile.photos?.large ? props.profile.photos.large : 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png' }/>
                }
                 <ProfileStatusWithHooks status={props.status}
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