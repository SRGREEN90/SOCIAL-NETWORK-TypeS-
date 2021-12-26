import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(rootReducer)

export type ReduxStoreType = typeof store
export type ReduxStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store