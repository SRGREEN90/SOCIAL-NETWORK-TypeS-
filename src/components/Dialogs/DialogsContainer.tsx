import React, {ChangeEvent} from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/dialogs-reducer";
import {AppDispatch, ReduxStateType, ReduxStoreType} from "../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";



const mapStateToProps = (state: ReduxStateType) => {
    return {dialogsPage: state.dialogsPage}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClickContainer: () => {
            dispatch(sendMessageCreator())
        },
        onSendMessageChangeContainer: (text: string) => {
            dispatch(updateNewMessageBodyCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer