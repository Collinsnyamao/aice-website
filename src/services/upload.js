import { API_URL } from '../redux/api';
import axios from 'axios';

// upload functon
const upload = (title,key_words,fields,abstract,file)=>{
    const response = axios.post(API_URL.upload,{
        title,
        key_words,
        fields,
        abstract,
        file,
    })
    console.log(response)
    return response;
}

const uploadService = {
    upload
}

export default uploadService;