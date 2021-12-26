import React from "react";
import {sidebarType, StateType} from "../../index";
//=========================
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

export const sidebarReducer = (state = initialState, action: any): initialStateType => {

    return state
}

export default sidebarReducer