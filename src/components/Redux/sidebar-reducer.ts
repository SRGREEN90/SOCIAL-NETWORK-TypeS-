import React from "react";
import {sidebarType, StateType} from "../../index";
//=========================

export const ADD_FRIENDS = 'ADD_FRIENDS'

let initialState = {
    friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Dimych'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ] as Array<FriendsPropsType>
}

type FriendsPropsType = {
    name: string
    id: number
}
type initialStateType = typeof initialState

export const sidebarReducer = (state = initialState, action: mainPostType): initialStateType => {
    switch (action.type) {
        case ADD_FRIENDS:
            let newFriend = {id: 7, name: 'Serega'}
            return {
                ...state,
                friends: [...state.friends, newFriend]
            }
        default:
            return state
    }


}


type mainPostType = addFriendActionCreatorType
type addFriendActionCreatorType = ReturnType<typeof addFriendActionCreator>

export const addFriendActionCreator = () => ({type: 'ADD_FRIENDS'})

export default sidebarReducer