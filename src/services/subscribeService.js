import { API_URL } from '../redux/api';
import axios from 'axios';


// subscribe function
const subscribe = async(email) =>{
    const response = await axios.post(API_URL.subscribe,{
        email,
    })
    return response;
}


const research = async(name,email) =>{
    const response = await axios.post(API_URL.research,{
        name,
        email,
    })
    return response
}


const subscribeService = {
    subscribe,
    research,
}

export default subscribeService;