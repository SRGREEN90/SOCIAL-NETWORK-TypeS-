import {profileAPI, usersAPI} from "../../api/Api";
import {Dispatch} from "redux";
import { setToggleIsFetching } from "./users-reducer";


export const ADD_POST = 'ADD_POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const SET_STATUS = 'SET_STATUS'
//========================================
let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesKount: 12},
        {id: 2, post: 'It is my first post!', likesKount: 50},
        {id: 3, post: 'Im so happy!', likesKount: 70},
    ] as Array<PostObjectPropsType>,
    profile: {} as ProfileType,
    status: ''
}
export type PostObjectPropsType = {
    id: number
    post: string
    likesKount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}
type PhotosType = {
    small: string
    large: string
}

export type profileInitialStateType = typeof initialState

const profileReducer = (state = initialState, action: mainPostType): profileInitialStateType => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {id: 4, post: action.newPostText, likesKount: 12}
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
            case SET_STATUS:
                return {
                ...state,
                status: action.status
               }
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.data
                }
            }
        default:
            return state
    }
}
//=====================================ActionTypes=================================================
export type mainPostType = addPostActionCreatorType | setUserProfileType | setStatusActionCreatorType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusActionCreatorType = ReturnType<typeof setStatusActionCreator>

//=====================================ActionCreators=================================================
export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (data: any) => ({type: SET_USER_PROFILE, data} as const)
export const setStatusActionCreator = (status: string) => ({type: SET_STATUS, status} as const)

//=====================================ThunkCreators=================================================

export const getUsersProfileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        //dispatch(setToggleIsFetching(true))
        usersAPI.getUsersProfile(userId)
            .then(data => {
                //dispatch(setToggleIsFetching(false))
                dispatch(setUserProfile(data))
            })
    }
}
export default profileReducer

export const getUserStatusThunkCreator = (userId: number) => {
    return(dispatch: Dispatch)=>{
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatusActionCreator(data))
            })
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return(dispatch: Dispatch)=>{
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatusActionCreator(status))
                }

            })
    }
}