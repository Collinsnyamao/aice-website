import { API_URL } from '../redux/api';
import axios from 'axios';


// individual function
const organization = async(agent_name,company_name,email,phone_number,message) =>{
    const response = await axios.post(API_URL.company,{
        agent_name,
        company_name,
        email,
        phone_number,
        message
    })
    // console.log(response);
    return response
}


const organizationService = {
    organization
}

export default organizationService;