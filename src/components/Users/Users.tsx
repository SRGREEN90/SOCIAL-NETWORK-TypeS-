import React from 'react'
import s from "./Users.module.css"
import axios from "axios";


export type FullUsersPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsersContainer: (users: UsersPropsType[]) => void
    users: UsersPropsType[]
}
export type UsersPropsType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
    photoUrl: string
}
export type LocationType = {
    sity: string,
    country: string
}

type ResponseFullType = {
    data: ResponseDataType
    setUsersContainer: (users: ResponseDataType)=> void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
}

export type ResponseDataType = {
    items: ResponseArrayType[]
    totalCount: number,
    error: string
}
type ResponseArrayType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: ResponsePhotosType,
    status: string,
    followed: boolean
}
type ResponsePhotosType = {
    photos: {
        small: string,
        large: string
    }
}

const Users: React.FC<ResponseFullType> = (props) => {

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
                           <img src={u.photos.small !== null ? u.photos.small : 'https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'} className={s.userPhoto}/>
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
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.sity'}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
}
export default Users

