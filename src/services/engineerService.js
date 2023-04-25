import axios from "axios";
import { API_URL } from "../redux/api";


const engineers = async(name,email,gender,nationality,bio,python_proficiency,sql_proficiency,data_experience) =>{
    const response = await axios.post(API_URL.engineers,{
        name,
        email,
        gender,
        nationality,
        bio,
        python_proficiency,
        sql_proficiency,
        data_experience
    })
    console.log(response);
    return response;
}

export const engineersService = {
    engineers
}