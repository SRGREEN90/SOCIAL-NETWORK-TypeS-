import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type PostArrayPropsType = {
    posts: Array<PostObjectPropsType>
    addPost: (newPostText: string) => void
}

type PostObjectPropsType = {
    id: number
    post: string
    likesKount: number
}

const MyPosts = (props: PostArrayPropsType) => {

    let postsElements = props.posts.map((p: PostObjectPropsType) => <Post key={p.id} post={p.post} likesKount={p.likesKount}/>)
  //  let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = (values: any) => {
       props.addPost(values.newPostText)
    }

    return <div className={s.postBlock}>
        <h3>My Posts</h3>

       <AddNewPostFormRedux onSubmit={onAddPost}/>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

type AddNewPostFormType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newPostText' placeholder={'Post Message'}
            validate={[required, maxLength10]}
            />

        </div>
        <div>
            <button>Add post</button>
        </div>

    </form>
}
const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts