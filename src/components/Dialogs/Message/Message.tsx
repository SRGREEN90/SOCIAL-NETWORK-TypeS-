import React from 'react'
import s from './Message.module.css'

type MessagePropsType = { message: string }

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.mess}>
            
            <div>{props.message}</div>

        </div>
    )
}
export default Message
