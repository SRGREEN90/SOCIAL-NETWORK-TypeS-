import React from 'react'
import {ReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    unfollow, unfollowThunkCreator,
    UserType
} from "../Redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../../preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../Redux/users-selectors";


class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setToggleIsFetching(false)
        //     this.props.setUsersContainer(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setToggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setToggleIsFetching(false)
        //     this.props.setUsersContainer(data.items)
        // })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
            />
        </>
    }
}

// const mapStateToProps = (state: ReduxStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state: ReduxStateType) => {
    return ({
         users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    })
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
    setCurrentPage: (currentPage: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}
export type UserPropsType = MSTP & MDTP

export default compose<React.ComponentType>(
    connect<MSTP, MDTP, {}, ReduxStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsersThunkCreator,
        unfollowThunkCreator,
        followThunkCreator
    })
)(UsersContainer)


// export default connect<MSTP, MDTP, {}, ReduxStateType>(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     getUsersThunkCreator,
//     unfollowThunkCreator,
//     followThunkCreator
// })(UsersContainer)

