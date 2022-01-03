import {FullUsersPropsType, ResponseDataType} from "../Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
        // {id: 1, photoUrl: 'https://sun1-18.userapi.com/impf/c845020/v845020683/baec0/vLaocSigxiI.jpg?size=200x0&quality=96&crop=372,28,481,481&sign=40d69fa2ade71f00cbfb8234e688c48c&c_uniq_tag=Wbfb4K2ehWND-bEYacWnUvA9MDIQiBTfFEpZE1Gly_E&ava=1',
        //     followed: true, fullName: 'Dmitry', status: "I'm a boss", location: {sity: 'Minsk', country: 'Belarus'}},
        // {id: 2,
        //     photoUrl: 'https://sun1-18.userapi.com/impf/c845020/v845020683/baec0/vLaocSigxiI.jpg?size=200x0&quality=96&crop=372,28,481,481&sign=40d69fa2ade71f00cbfb8234e688c48c&c_uniq_tag=Wbfb4K2ehWND-bEYacWnUvA9MDIQiBTfFEpZE1Gly_E&ava=1',
        //     followed: false, fullName: 'Sasha', status: "Me too", location: {sity: 'Moskow', country: 'Russia'}},
        // {id: 3,
        //     photoUrl: 'https://sun1-18.userapi.com/impf/c845020/v845020683/baec0/vLaocSigxiI.jpg?size=200x0&quality=96&crop=372,28,481,481&sign=40d69fa2ade71f00cbfb8234e688c48c&c_uniq_tag=Wbfb4K2ehWND-bEYacWnUvA9MDIQiBTfFEpZE1Gly_E&ava=1',
        //     followed: true, fullName: 'Valera', status: "Me too", location: {sity: 'Kiev', country: 'Ukraine'}}
    ]
}


export type initialStateType = typeof initialState

const usersReducer = (state = initialState , action: mainUsersACType): initialStateType => {

    switch (action.type) {
        case FOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userID){
                    return{...u, followed: true}
                }
                return u
            })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return{...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

type mainUsersACType = followACType | unfollowACType | setUsersACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: ResponseDataType) => ({type: UNFOLLOW, users})

export default usersReducer