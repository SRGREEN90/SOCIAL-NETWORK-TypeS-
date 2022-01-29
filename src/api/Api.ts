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
    follow(id = 0) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id = 0) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }

}

