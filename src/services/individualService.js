import { API_URL } from '../redux/api';
import axios from 'axios';


// individual function
const individual = async(first_name,last_name,email,phone_number,message) =>{
    const response = await axios.post(API_URL.individual,{
        first_name,
        last_name,
        email,
        phone_number,
        message
    })
    // console.log(response);
    return response
}


const individualService = {
    individual
}

export default individualService;