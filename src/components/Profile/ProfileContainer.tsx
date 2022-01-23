import React, {ComponentType} from 'react';
import {ReduxStateType} from "../Redux/redux-store";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../Redux/profile-reducer";
import {useParams} from "react-router-dom";

export type ProfilePropsType = MSTP & MDispTP
type UrlParams = {
    params: {
        userId: number
    }
}

class ProfileContainer extends React.Component<ProfilePropsType & UrlParams> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = 2
        }
        //this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
            .then(response => {
                //  this.props.setToggleIsFetching(false)
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


type MSTP = {
    profile: ProfileType
}
export type MDispTP = {
    setUserProfile: (profile: ProfileType) => void
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

export default connect<MSTP, MDispTP, {}, ReduxStateType>(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))

