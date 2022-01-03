import React from 'react'
import {ReduxStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users, {FullUsersPropsType, ResponseDataType} from "./Users";
import {followAC, setUsersAC, unfollowAC, } from "../Redux/users-reducer";


const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },

        setUsersContainer: (users: ResponseDataType) => {
            dispatch(setUsersAC(users))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default MyPostsContainer