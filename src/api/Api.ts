import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'5da1b16c-8254-442b-be1d-c9d350afdd05'
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
      //  console.warn('Obsolete method. Please, use profileApi object!')
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
        return instance.put(`profile/status/`, {status: status}) // отправляем на сервер
            .then(response => response.data)  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>> приходит с сервера
    },
}


export const  authApi = {
    me(){
       return  instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false){
        return  instance.post(`auth/login`, {email, password, rememberMe}) // отправляем на сервер
    },
    logout(){
        return  instance.delete(`auth/login`) // отправляем на сервер
    }
}