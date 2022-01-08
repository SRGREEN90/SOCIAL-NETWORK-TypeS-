import React from 'react'
import {ReduxStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType,
} from "../Redux/users-reducer";
import UsersClass from "./UsersClass";


const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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
        },
        setCurrentPage: (currentPage: number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export type MDTP={
    follow:(id:number)=>void
    unfollow:(id:number)=>void
    setUsersContainer:(users:Array<UserType>)=>void
    setCurrentPage:(currentPage: number)=>void
    setTotalUsersCount:(totalCount: number)=>void
}
type MSTP={
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

export type UserPropsType = MSTP & MDTP
const MyPostsContainer = connect<MSTP, MDTP, {}, ReduxStateType>(mapStateToProps, mapDispatchToProps)(UsersClass)
export default MyPostsContainer