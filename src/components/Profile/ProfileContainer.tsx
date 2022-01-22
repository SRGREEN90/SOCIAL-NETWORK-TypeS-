import React from 'react';
import {ReduxStateType} from "../Redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
    ///    this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
             //   this.props.setToggleIsFetching(false)
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return <div>
            <Profile  {...this.props} />
        </div>
    }
}

let mapStateToProps = (state: ReduxStateType) => ({
    profile: state.profilePage.profile
})

export type ProfilePropsType = MSTP & MDispTP
type MSTP = {
    profile: ProfileType
}
export type MDispTP = {
    setUserProfile: (profile: ProfileType)=>void
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MSTP, MDispTP, {}, ReduxStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)