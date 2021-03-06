import React from 'react'
import {sendMessageCreator} from "../Redux/dialogs-reducer";
import { ReduxStateType} from "../Redux/redux-store";
import Dialogs  from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import WithAuthRedirectComponent from "../../hok/WithAuthRedirect";



const mapStateToProps = (state: ReduxStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
)(Dialogs)

// let AuthRedirectComponent = WithAuthRedirectComponent(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//
// export default DialogsContainer