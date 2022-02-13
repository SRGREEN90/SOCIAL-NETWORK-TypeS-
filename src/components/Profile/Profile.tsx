import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'

import {ProfilePropsType} from "./ProfileContainer";




const Profile = (props: ProfilePropsType) => {

    return <div className={s.all}>

        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
        />
        <MyPostsContainer  />
    </div>
}
export default Profile