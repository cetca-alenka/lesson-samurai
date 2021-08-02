import * as axios from 'axios'
const apiInit = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { 'API-KEY': '58062176-57fb-4e61-b41c-ea1f861459b0' }

})
export const userAPI = {
    getUsers(currentP = 1, pageSize = 10) { return apiInit.get(`users?page=${currentP}&count=${pageSize}`).then(response => { return response.data }) },
    getFollow(usId) {
        return apiInit.delete(`follow/${usId}`).then(response => { return response.data })
    },
    noFollow(usId){
        return apiInit.post(`follow/${usId}`).then(response => {return response.data})
    }

}


