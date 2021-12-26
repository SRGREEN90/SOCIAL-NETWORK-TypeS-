import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../Redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../Redux/redux-store";




const Profile = () => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer  />
    </div>
}
export default Profile