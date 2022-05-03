import React from 'react';
import Header, {HeaderPropsType} from "./Header";
import {ReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, LogoutThunkCreator} from "../Redux/auth-reducer";

type HeaderContainerPropsType = {
    isAuth: boolean
    login: null | string
    LogoutThunkCreator: () => void
    getAuthUserDataThunkCreator: () => void
}
class HeaderContainer extends React.Component<HeaderContainerPropsType > {

    componentDidMount() {
       this.props.getAuthUserDataThunkCreator()
    }
    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login = { this.props.login}
                logout={this.props.LogoutThunkCreator}
            />
        )
    }
}

const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserDataThunkCreator, LogoutThunkCreator})(HeaderContainer)