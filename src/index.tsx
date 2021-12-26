import store, {ReduxStateType} from './components/Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./components/Redux/profile-reducer";
import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./components/Redux/dialogs-reducer";
import {Provider} from "react-redux";
// import reportWebVitals from './reportWebVitals';

export type ActionType = {
    type: typeof UPDATE_NEW_POST_TEXT | typeof ADD_POST | typeof UPDATE_NEW_MESSAGE_BODY | typeof SEND_MESSAGE
    newLetter?: string
    newBody?: string
}

export type newStoreType = {
    state: StateType
    // callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
export type profilePageType = {
    posts: Array<PostObjectPropsType>
    newPostText: string
}
export type dialogsPageType = {
    messages: Array<MessagePropsType>
    dialogs: Array<DialogsItemsPropsType>
    newMessageBody: string
}

export type sidebarType = {
    friends: Array<friendsType>
}
type friendsType = {
    id: number
    name: string
}
type PostObjectPropsType = {
    id: number
    post: string
    likesKount: number
}
type DialogsItemsPropsType = {
    name: string
    id: number
}
export type MessagePropsType = { id: number, message: string }

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
