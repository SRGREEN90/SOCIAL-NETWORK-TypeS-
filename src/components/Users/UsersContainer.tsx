import React from 'react'
import {ReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsersContainer,
    unfollow,
    UserType,
} from "../Redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../../preloader/Preloader";
import { usersAPI} from "../../api/Api";

class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false)
            this.props.setUsersContainer(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false)
            this.props.setUsersContainer(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                setFollowingInProgress={this.props.setFollowingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: ReduxStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
type MSTP = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type MDTP = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsersContainer: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
}
export type UserPropsType = MSTP & MDTP
export default connect<MSTP, MDTP, {}, ReduxStateType>(mapStateToProps, {
        follow,
        unfollow,
        setUsersContainer,
        setCurrentPage,
        setTotalUsersCount,
        setToggleIsFetching,
        setFollowingInProgress
    }
)(UsersContainer)
