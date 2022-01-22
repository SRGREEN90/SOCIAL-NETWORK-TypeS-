export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const ADD_POST = 'ADD_POST'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
//========================================
let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesKount: 12},
        {id: 2, post: 'It is my first post!', likesKount: 50},
        {id: 3, post: 'Im so happy!', likesKount: 70},
    ] as Array<PostObjectPropsType>,
    newPostText: '' as string,
    profile: {} as ProfileType
}
type PostObjectPropsType = {
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

const profileReducer = (state = initialState , action: mainPostType): profileInitialStateType => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {id: 4, post: state.newPostText, likesKount: 12}
            return  {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newLetter
            }

        case SET_USER_PROFILE :
            return  {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

type mainPostType = addPostActionCreatorType | updateNewPostTextActionCreatorType | setUserProfileType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type updateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>



export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (newLetter: string) => ({type: UPDATE_NEW_POST_TEXT, newLetter} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)


export default profileReducer


// type addPostActionCreatorType = {
//     type: typeof ADD_POST
//     // newPostText: string
// }
// type updateNewPostTextActionCreatorType = {
//     type: typeof UPDATE_NEW_POST_TEXT
//     newLetter: string
// }