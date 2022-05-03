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

const dialogsReducer = (state = initialState, action: mainDialogsType): initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state
    }
}
export type mainDialogsType = sendMessageCreatorType
type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND_MESSAGE', newMessageBody}as const)

export default dialogsReducer