import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../Redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import {ProfilePropsType} from "./ProfileContainer";



const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer  />
    </div>
}
export default Profile