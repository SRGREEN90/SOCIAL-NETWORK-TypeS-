import React from 'react';
import Header from "./Header";
import axios from "axios";
import {ReduxStateType} from "../Redux/redux-store";
import {setAuthUserDataAC} from "../Redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me `, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data.login
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
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
export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)