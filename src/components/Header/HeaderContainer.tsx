import React from 'react';
import Header from "./Header";
import {ReduxStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../Redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
       this.props.getAuthUserDataThunkCreator()
    }
    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        )
    }
}

const mapStateToProps = (state: ReduxStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserDataThunkCreator})(HeaderContainer)