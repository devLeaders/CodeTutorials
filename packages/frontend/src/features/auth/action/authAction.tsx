import Axios from "../../../config/axios/configAxios"
import {useHistory} from "react-router-dom"
import NAVIGATION from "../../../config/routing/NavigationPath"

    export const loginSubmit = async (value: any, action: any) => {

        
        const dataResponse = await Axios.post('/auth/signin', {
            "email": `${value.lastName}`,
            "password": `${value.pass}`
            })

            const token = dataResponse.data.token
            localStorage.setItem('token', token)
            Axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    }