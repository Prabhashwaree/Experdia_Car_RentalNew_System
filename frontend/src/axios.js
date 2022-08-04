import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8080/BackEnd_war/'

})
export default instance;