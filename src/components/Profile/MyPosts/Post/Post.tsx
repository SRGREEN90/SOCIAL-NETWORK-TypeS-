import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    post: string
    likesKount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return <div className={s.item}>
                <img src='https://miro.medium.com/fit/c/1360/1360/2*S4BvCsc_o_KwFCx-gmVTlg.png'/>
                <b>{props.post}</b>
        <div>
            <span>Like</span>
        </div>
            </div>
}
export default Post