import axios from 'axios';
// const API_URL = 'https://aicenterofexcellence.herokuapp.com/';
import { API_URL } from '../redux/api';


// register function
const register = (username,firstname,lastname,email,description,company,designation,password) =>{
    return axios.post(API_URL.authentication + 'register/', {
        username,
        firstname,
        lastname,
        email,
        description,
        company,
        designation,
        password,
    })
}

// login function
const Login = async(email, password) =>{
    const response = await axios.post(API_URL.authentication + 'login/',{
        email,
        password
    })
    return response
}



const authService = {
    register,
    Login,
}

export default authService;