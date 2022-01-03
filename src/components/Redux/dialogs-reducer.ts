import {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'
//==================================================

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ] as Array<dialogsType>,
    messages: [
        {id: 1, message: 'Hi! How are you?'},
        {id: 2, message: 'I like a programming!'},
        {id: 3, message: 'Now im here!'},
        {id: 4, message: 'Im so happy!'},
        {id: 5, message: 'I like React'},
        {id: 6, message: 'I like TypeScript'}
    ] as Array<messagesType>,
    newMessageBody: '' as string
}
type dialogsType = {
    name: string
    id: number
}
type messagesType = {
    id: number
    message: string
}
export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newBody || ''
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state
    }
}

// type updateNewMessageBodyCreatorType = {
//     type: typeof UPDATE_NEW_MESSAGE_BODY
//     newBody: string
// }
// type sendMessageCreatorType = {
//     type: typeof SEND_MESSAGE
// }

type mainMessageType = sendMessageCreatorType | updateNewMessageBodyCreatorType

type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (newBody: string) => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    newBody
})


export default dialogsReducer