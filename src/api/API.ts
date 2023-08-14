import axios from 'axios'

const API_KEY: string = 'be66d620-6e85-427f-94dc-593ca36ea8a9'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': API_KEY
    }
})

// TODO: use thunks for all requests (Navbar, etc)
// TODO: Access has been blocked by CORS policy on GH-pages
export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) =>
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data),

    follow: (id: number = 1) => instance.post(`follow/${id}`),

    unfollow: (id: number = 1) => instance.delete(`follow/${id}`)
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    getMe: () => instance.get(`auth/me`)
}
