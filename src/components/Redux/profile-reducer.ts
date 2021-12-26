

export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const ADD_POST = 'ADD_POST'
//========================================
let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesKount: 12},
        {id: 2, post: 'It is my first post', likesKount: 50},
        {id: 3, post: 'Im so happy', likesKount: 70},
    ] as Array<PostObjectPropsType>,
    newPostText: '' as string
}
type PostObjectPropsType = {
    id: number
    post: string
    likesKount: number
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState , action: any): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 4, post: state.newPostText, likesKount: 12}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newLetter

            return state
        default:
            return state
    }
}

type addPostActionCreatorType = {
    type: typeof ADD_POST
    // newPostText: string
}
type updateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newLetter: string
}

export const addPostActionCreator = (): addPostActionCreatorType => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (newLetter: string): updateNewPostTextActionCreatorType => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newLetter
})

export default profileReducer