import { API_URL } from '../redux/api';
import axios from 'axios';


// individual function
const request = async(email) =>{
    const response = await axios.post(API_URL.request,{
       email
    })
    // console.log(response);
    return response
}


const requestService = {
    request
}

export default requestService;