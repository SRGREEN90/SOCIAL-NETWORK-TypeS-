import React, {ComponentType} from 'react';
import {ReduxStateType} from "../Redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUsersProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileType, updateUserStatusThunkCreator
} from "../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import WithAuthRedirectComponent from "../../hok/WithAuthRedirect";
import {compose} from "redux";


export type ProfilePropsType = MSTP & MDispTP
export type UrlParams = {
    params: {
        userId: number
    }
}

class ProfileContainer extends React.Component<ProfilePropsType & UrlParams> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = 15574
        }
        this.props.getUsersProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)

        //this.props.setToggleIsFetching(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
        // usersAPI.getUsersProfile()
        //     .then(data => {
        //         //  this.props.setToggleIsFetching(false)
        //         this.props.setUserProfile(data.data)
        //     })
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
    status: state.profilePage.status
})

type MSTP = {
    profile: ProfileType,
    status: string
}
export type MDispTP = {
    getUsersProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    updateUserStatusThunkCreator: (status: string) => void
}

function withRouter<T extends {}>(WrappedComponent: ComponentType<T>) {
    return (props: T) => {
        const params = useParams();
        return (
            <WrappedComponent
                {...props}
                params={params}
            />
        );
    }
}

export default compose<React.ComponentType>(
    connect<MSTP, MDispTP, {}, ReduxStateType>(mapStateToProps,
        {getUsersProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter,
    WithAuthRedirectComponent
)(ProfileContainer)

//let AuthRedirectComponent = WithAuthRedirectComponent(ProfileContainer)
//export default connect<MSTP, MDispTP, {}, ReduxStateType>(mapStateToProps, { getUsersProfileThunkCreator})(withRouter(AuthRedirectComponent))

