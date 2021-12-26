import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppDispatch, ReduxStateType, ReduxStoreType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dispatch} from "redux";

//
// type PostContainerArrayPropsType = {
//     store: ReduxStoreType
// }
//
// const MyPostsContainer = (props: PostContainerArrayPropsType) => {
// let state = props.store.getState()
//
//     let addPostContainer = () => {
//         props.store.dispatch(addPostActionCreator());
//         //if (newPostElement.current) newPostElement.current.value = ''
//     }
//     let onPostChangeContainer = (newLetter?: string) => {
//         let action = updateNewPostTextActionCreator(newLetter || '')
//         props.store.dispatch(action)
//     }
//     return (
//         <div>
//             <MyPosts onPostChangeContainer={onPostChangeContainer} addPostContainer={addPostContainer}
//                      posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//         </div>
//     )
// }

const mapStateToProps = (state: ReduxStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPostChangeContainer: ( newLetter?: string) => {
            dispatch(updateNewPostTextActionCreator(newLetter || ''))
        },
        addPostContainer: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer