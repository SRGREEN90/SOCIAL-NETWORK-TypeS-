import React from 'react'
import s from "./Users.module.css"
import axios from "axios";
import {MDTP, UserPropsType} from "./UsersContainer";

class Users extends React.Component<UserPropsType, MDTP> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsersContainer(response.data.items)
            })
    }
    render() {
        return <div>
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