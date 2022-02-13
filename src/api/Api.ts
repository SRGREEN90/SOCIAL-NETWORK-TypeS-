import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'a900de3d-69b2-4d80-9701-5045a006cecd'
    }
})
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number ) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getUsersProfile(userId = 0) {
        console.warn('Obsolete method. Please, use profileApi object!')
        return profileAPI.getUsersProfile(userId)

    },

}

export const profileAPI = {
    getUsersProfile(userId = 0) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    },
}


export const  authApi = {
    me(){
       return  instance.get(`auth/me`)
    }
}