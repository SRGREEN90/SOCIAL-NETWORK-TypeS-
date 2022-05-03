import {authApi} from "../../api/Api";
import {Dispatch} from "redux";
import {AppActionsType, ReduxStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
//==================================================

let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export type initialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const authReducer = (state: initialStateType = initialState, action: mainAuthUserDataType): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
export type mainAuthUserDataType = setAuthUserDataACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    {
        type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const)

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
   return  authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

type ThunkType = ThunkAction<void, ReduxStateType, unknown, AppActionsType>

export const LoginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch: any) => {

    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            } else {
                let message = response.data.message.length > 0 ? response.data.message[0] : 'Some error'

                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const LogoutThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}

export default authReducer

