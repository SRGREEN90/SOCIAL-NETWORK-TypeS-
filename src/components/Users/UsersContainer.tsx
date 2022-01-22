import React from 'react'
import {ReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsersContainer,
    unfollow,
    UserType,
} from "../Redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../../preloader/Preloader";

class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsersContainer(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsFetching(false)
                this.props.setUsersContainer(response.data.items)

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
        isFetching: state.usersPage.isFetching

    }
}

export type MDTP = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsersContainer: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void

}
type MSTP = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}

export type UserPropsType = MSTP & MDTP
export default connect<MSTP, MDTP, {}, ReduxStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsersContainer,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
    }
)(UsersContainer)
