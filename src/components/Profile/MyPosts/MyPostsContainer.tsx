import React from 'react';
import {addPostActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

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
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer