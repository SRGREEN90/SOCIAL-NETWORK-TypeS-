import {authApi} from "../../api/Api";
import {Dispatch} from "redux";
import {getAuthUserDataThunkCreator} from "./auth-reducer";
import {AppActionsType, AppThunk} from "./redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED'
//==================================================

let initialState = {
    initialized: false
}

export type initialStateType = typeof initialState

const appReducer = (state: initialStateType = initialState, action: mainType): initialStateType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
type mainType = setInitializedACType
type setInitializedACType = ReturnType<typeof setInitializedAC>

export const setInitializedAC = () => ({type: 'SET_INITIALIZED'} as const)

export const initializeAppTC = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())

    promise.then(() => {
        dispatch(setInitializedAC())
    })

    // Promise.all([promise]).then(() => {
    //     dispatch(setInitializedAC())
    // })
}

export default appReducer

