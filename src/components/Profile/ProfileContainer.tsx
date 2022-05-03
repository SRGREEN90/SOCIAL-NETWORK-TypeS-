import React, {ComponentType} from 'react';
import {ReduxStateType} from "../Redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUsersProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileType, updateUserStatusThunkCreator
} from "../Redux/profile-reducer";
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from "react-router-dom";
import WithAuthRedirectComponent from "../../hok/WithAuthRedirect";
import {compose} from "redux";
import { History } from 'history';

export type ProfilePropsType = MSTP & MDispTP
export type UrlParams = {
    params: {
        userId: number
        history: History
    }
}

class ProfileContainer extends React.Component<ProfilePropsType & UrlParams> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            if (this.props.authorizedUserId) {
                userId = this.props.authorizedUserId
               //  if (!userId) {
               //    this.props.params.history.push('/login')
               //  }
            }
        }
        this.props.getUsersProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {

        return <div>
            <Profile  {...this.props}
                      profile={this.props.profile}
                      status={this.props.status}
                      updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}
            />
        </div>
    }
}


let mapStateToProps = (state: ReduxStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

type MSTP = {
    profile: ProfileType,
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean
}
export type MDispTP = {
    getUsersProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    updateUserStatusThunkCreator: (status: string) => void
}

function withRouter<T>(WrappedComponent: ComponentType<T>) {
    function ComponentWithRouterProp(props: T & WithRouterType) {
        const params = useParams();
        const navigate = useNavigate();
        const location = useLocation();
        return (
            <WrappedComponent
                {...props}
                params={{params, navigate, location}}
            />
        );
    }

    return ComponentWithRouterProp;
}

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;

export default compose<React.ComponentType>(
    connect<MSTP, MDispTP, {}, ReduxStateType>(mapStateToProps,
        {getUsersProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    WithAuthRedirectComponent,
    withRouter,
)(ProfileContainer)
