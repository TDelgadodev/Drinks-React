import axios from 'axios';
const apiUrlAuth = import.meta.env.VITE_API_URL_AUTH;

export const registerAuthService = async(info) => {
    try {
        const url = `${apiUrlAuth}register`;
        const {data} = await axios.post(url,
            {
            ...info
        }, 
        {
         headers : {
            "Content-Type" : "application/json",
         },
       body: JSON.stringify(info) 
        })

        return data

    } catch (error) {
        throw error.response.data
    }
}

export const loginAuthService = async (info) => {
    try {
        const url = `${apiUrlAuth}login`;
        const {data} = await axios.post(url,
            {
                ...info
            },
            {
                headers : {
                    "Content-Type" : "application/json",
                 },
            })    
        return data
    }   catch (error) {
        //console.log(error.response.data);
        throw error.response.data
    }
}

export const profileUserService = async (token) => {
    try {
        const url = `${apiUrlAuth}profile`;
        const {data} = await axios.get(url,{
            headers : {
                Authorization : token
            },
        })

        return data
    } catch (error) {
        throw error.response.data
    }
}