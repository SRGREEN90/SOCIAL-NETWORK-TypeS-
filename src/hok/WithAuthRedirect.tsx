import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {ReduxStateType} from "../components/Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: ReduxStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

function WithAuthRedirectComponent<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T} />
    }

    let ConnectedAuthRedirectComponent =
        connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

export default WithAuthRedirectComponent