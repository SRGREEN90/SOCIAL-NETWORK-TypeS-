// import {newStoreType, profilePageType, StateType} from "../../index";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
// import React from "react";
//
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
//
export type ActionType = {
    type: typeof UPDATE_NEW_POST_TEXT | typeof ADD_POST | typeof UPDATE_NEW_MESSAGE_BODY | typeof SEND_MESSAGE
    newLetter?: string
    newBody?: string
}
//
//
//
//
// let store: newStoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, post: 'Hi, how are you?', likesKount: 12},
//                 {id: 2, post: 'It is my first post', likesKount: 50},
//                 {id: 3, post: 'Im so happy', likesKount: 70},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Victor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi! How are you?'},
//                 {id: 2, message: 'I like a programming!'},
//                 {id: 3, message: 'Now im here!'},
//                 {id: 4, message: 'Im so happy!'},
//                 {id: 5, message: 'I like React'},
//                 {id: 6, message: 'I like TypeScript'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'Andrew'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Dimych'},
//                 {id: 5, name: 'Victor'},
//                 {id: 6, name: 'Valera'}
//             ]
//         }
//     },
//     _callSubscriber(state: StateType) {
//         console.log('state changed')
//     },
//     subscribe(observer: (state: StateType) => void) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber(this._state)
//     }
// }
//
//
//
//
// export default store
//
//
// // window.store = store
