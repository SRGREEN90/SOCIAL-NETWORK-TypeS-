import React from 'react'
import {ReduxStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Friends from "./Friends";
import {addFriendActionCreator} from "../../Redux/sidebar-reducer";

// type appStateFriendsTypeProps = {
//     friends: Array<FriendsPropsType>
// }
// // type FriendsType = {
// //     friends: Array<FriendsPropsType>
// // }
// type FriendsPropsType = {
//     name: string
//     id: number
// }
//
// const Friends: React.FC<appStateFriendsTypeProps> = (props) => {
//
//     let friendsElements = props.friends.map(f => <Friend key={f.id} name={f.name}/>)
//
//     return (
//         <div>
//             <div>
//                 {friendsElements}
//             </div>
//         </div>
//     )
// }
// export default Friends

const mapStateToProps = (state: ReduxStateType) => {
    return {
        friends: state.sidebar.friends
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriendsContainer: () => {
            dispatch(addFriendActionCreator())
        }
    }
}
const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default MyFriendsContainer