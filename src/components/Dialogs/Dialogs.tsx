import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogsItems from './DialogsItems/DialogsItems'
import Message from "./Message/Message";
import {dialogsPageType} from "../../index";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


export type dialogsPropsType = {
    onSendMessageClick: (newMessageBody: string) => void
    dialogsPage: dialogsPageType
    isAuth: boolean
}

const Dialogs: React.FC<dialogsPropsType> = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogsItems key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(mess => <Message key={mess.id} message={mess.message}/>)
    //let newMessageBody = state.newMessageBody

    // let onSendMessageClick = () => {
    //     props.onSendMessageClickContainer()
    // }
    // let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.onSendMessageChangeContainer(text)
    // }


    let addNewMessage = (values: any) => {
        props.onSendMessageClick(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>

                <div className={s.area}>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}
export default Dialogs

// type AddMessageFormType = {
//     newMessageBody: string
// }
// const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component='textarea' name='newMessageBody' placeholder='Enter your message!'/>
//             </div>
//             <div>
//                 <button>send</button>
//             </div>
//         </form>
//     )
// }
// const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
// export default Dialogs

