import React from 'react'
import s from "./Users.module.css"
import axios from "axios";
import {UserPropsType} from "./UsersContainer";






const Users: React.FC<UserPropsType> = (props) => {

   if(props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response =>{
        props.setUsersContainer(response.data.items )
    })
}
    return <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                           <img src={u.photos.small !== null ? u.photos.small
                               : 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'}
                                className={s.userPhoto}
                           />
                        </div>
                        <div>
                            {u.followed
                                ?  <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{props.unfollow(u.id)}}>Follow</button>
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

