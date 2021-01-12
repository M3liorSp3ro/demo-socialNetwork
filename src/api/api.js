import * as axios from 'axios'

const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4a66ea1f-295f-412d-ba5d-d6eb5fd995c6"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    getProfile(userId) {
        console.warn('Obsolete methed. Please profileAPI object.');
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(res => res.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    },
}
