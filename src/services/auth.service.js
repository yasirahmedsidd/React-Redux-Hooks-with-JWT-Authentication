import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", { username, password, email })
}
const login = (email, password) => {
    return axios.post(API_URL + "signup", { username, password, email })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
}

const logout = () => localStorage.removeItem("user")

export default {
    login,
    register,
    logout
}