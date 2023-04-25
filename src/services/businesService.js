import axios from "axios";
import { API_URL } from "../redux/api";


const service = async(name,company,designation,service,email) =>{
    const response = await axios.post(API_URL.service,{
        name,
        company,
        designation,
        service,
        email
    })
    return response;
}

export const businesService = {
    service
}