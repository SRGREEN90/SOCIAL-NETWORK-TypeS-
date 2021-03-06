import React from 'react'
import s from "./Users.module.css"
import { UserType} from "../Redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    follow: (userID: number)=> void
   unfollow: (userID: number)=> void
    followingInProgress: Array<number>
    unfollowThunkCreator: (id: number) => void
    followThunkCreator:(id: number)=> void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? s.selectedPage : ''}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                >
                        {p}
                    </span>
            })}
        </div>

        {
            props.users.map(u =>
                <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt='users' src={u.photos.small !== null ? u.photos.small
                                        : 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'}
                                         className={s.userPhoto}
                                    />
                                </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=>id === u.id)}
                                          onClick={() => {props.unfollowThunkCreator(u.id)

                                    // props.setFollowingInProgress(true, u.id)
                                    // usersAPI.unfollow(u.id)
                                    //     .then(data => {
                                    //         if(data.resultCode === 0){
                                    //             props.unfollow(u.id)
                                    //         }
                                    //     props.setFollowingInProgress(false, u.id)
                                    //     })
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=>id === u.id)}
                                          onClick={() => {props.followThunkCreator(u.id)

                                    // props.setFollowingInProgress(true, u.id)
                                    // usersAPI.follow(u.id)
                                    //     .then(data => {
                                    //         if(data.resultCode === 0){
                                    //             props.follow(u.id)
                                    //         }
                                    //     props.setFollowingInProgress(false, u.id)
                                    //     })
                                }}>Follow</button>
                            }
                        </div>
                        </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                {/*<div>{'u.location.country'}</div>*/}
                                {/*<div>{'u.location.sity'}</div>*/}
                            </span>
                        </span>
                </div>
            )
        }
    </div>
}

export default Users