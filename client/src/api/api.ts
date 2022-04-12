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
export const authAPI = {
    me() {
      return axios.get(`auth/me`);
    },
    login(email:string, password:string) {
      return axios.post(`auth/login`, { email, password });
    },
    logout() {
      return axios.delete(`auth/login`);
    },
  };
  