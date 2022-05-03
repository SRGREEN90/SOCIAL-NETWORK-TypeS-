import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {mainPostType} from "./profile-reducer";
import dialogsReducer, {mainDialogsType} from "./dialogs-reducer";
import sidebarReducer, {mainSidebarType} from "./sidebar-reducer";
import usersReducer, {mainUsersACType} from "./users-reducer";
import authReducer, {mainAuthUserDataType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type ReduxStoreType = typeof store
export type ReduxStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppActionsType = mainPostType | mainAuthUserDataType | mainDialogsType | mainSidebarType | mainUsersACType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxStateType, unknown, AppActionsType>
export default store