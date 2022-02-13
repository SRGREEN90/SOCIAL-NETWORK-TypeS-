import {authApi} from "../../api/Api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'
//==================================================

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}

export type initialStateType = typeof initialState

const authReducer = (state: initialStateType = initialState, action: mainMessageType): initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
type mainMessageType = setAuthUserDataACType
type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: number, email: string, login: string) => (
    {
        type: 'SET_USER_DATA',
        data: {id, email, login}
    } as const)

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authApi.me()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data.login
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}


export default authReducer

