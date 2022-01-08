
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'



const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 2
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: ResponsePhotosType,
    status: string,
    followed: boolean
}
type ResponsePhotosType = {
        small: string,
        large: string
}


const usersReducer = (state: initialStateType = initialState  , action: mainUsersACType): initialStateType => {

    switch (action.type) {
        case FOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userID){
                    return{...u, followed: false}
                }
                return u
            })
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return{...u, followed: true}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        default:
            return state
    }
}

type mainUsersACType = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID}as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}as const)


export default usersReducer
