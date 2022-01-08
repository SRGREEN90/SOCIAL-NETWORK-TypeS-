import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogsItems from './DialogsItems/DialogsItems'
import Message from "./Message/Message";
import {dialogsPageType} from "../../index";


type appStatePropsType = {
    onSendMessageClickContainer: () => void
    onSendMessageChangeContainer: (text: string) => void
    dialogsPage: dialogsPageType
}

const Dialogs: React.FC<appStatePropsType> = (props) => {

let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogsItems key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(mess => <Message key={mess.id} message={mess.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
    props.onSendMessageClickContainer()
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let text = e.currentTarget.value
        props.onSendMessageChangeContainer(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements}</div>

                <div className={s.area}>
                    <div>
                        <textarea onChange={onSendMessageChange}
                                   value={newMessageBody}
                                   placeholder={'Write something!'}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs