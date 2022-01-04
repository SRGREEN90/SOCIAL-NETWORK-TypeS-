import React from 'react'
import {ReduxStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType,} from "../Redux/users-reducer";


const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },

        setUsersContainer: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
type MDTP={
    follow:(id:number)=>void
    unfollow:(id:number)=>void
    setUsersContainer:(users:Array<UserType>)=>void
}
type MSTP={
    users: Array<UserType>
}

export type UserPropsType = MSTP & MDTP
const MyPostsContainer = connect<MSTP, MDTP, {}, ReduxStateType>(mapStateToProps, mapDispatchToProps)(Users)
export default MyPostsContainer