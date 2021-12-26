import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionType} from "../../../index";

type PostArrayPropsType = {
    posts: Array<PostObjectPropsType>
    newPostText: string
    onPostChangeContainer: (newLetter?: string) => void
    addPostContainer: () => void
}

type PostObjectPropsType = {
    id: number
    post: string
    likesKount: number
}

const MyPosts = (props: PostArrayPropsType) => {

    let postsElements = props.posts.map((p: PostObjectPropsType) => <Post key={p.id} post={p.post} likesKount={p.likesKount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let onAddPost = () => {
       props.addPostContainer()
       //props.dispatch(addPostActionCreator());
        //if (newPostElement.current) newPostElement.current.value = ''
    }

    let onPostChange = () => {
        let newLetter = newPostElement.current?.value;
        props.onPostChangeContainer(newLetter)
    }

    return <div className={s.postBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}
                          ref={newPostElement}
                          placeholder={'Please, make a post'}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>

        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts