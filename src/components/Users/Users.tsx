import React from 'react'
import s from "./Users.module.css"
import {UserType} from "../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    follow: (userID: number)=> void
    unfollow: (userID: number)=> void
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
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY':'a900de3d-69b2-4d80-9701-5045a006cecd'
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0){
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY':'a900de3d-69b2-4d80-9701-5045a006cecd'
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        })
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