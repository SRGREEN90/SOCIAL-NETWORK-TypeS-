import React from 'react'
import s from "./Users.module.css"
import axios from "axios";
import {MDTP, UserPropsType} from "./UsersContainer";


class Users extends React.Component<UserPropsType, MDTP> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersContainer(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersContainer(response.data.items)

            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
let pages = []
        for(let i=1; i <= pagesCount; i++){
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map( p => {
                    return <span
                        //className={this.props.currentPage === p && s.selectedPage}
                        onClick={(e)=>{this.onPageChanged(p)}}
                    >
                        {p}
                    </span>
                })}
            </div>

            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                           <img alt='users' src={u.photos.small !== null ? u.photos.small
                               : 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'}
                                className={s.userPhoto}
                           />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(u.id)
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
}

export default Users