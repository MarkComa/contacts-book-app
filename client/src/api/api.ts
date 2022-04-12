import axios from 'axios'

export const userAPI = {
    
}

export const сontactsAPI = {

    getContact() {
        return axios
        .get(``)
        .then(res => {
            return res.data})
    }

}