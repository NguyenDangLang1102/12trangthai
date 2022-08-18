import { REST_API_METHOD as METHOD, BASE_URL } from '../constants/apiConfig/index'
 
const API_SCHEME = {
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
    },
    //business API
    STATUS: {
        GET: {
 
            url: `${BASE_URL}/status`,
            method: METHOD.GET
        },
        SEARCH: {
            url: `${BASE_URL}/status`,
            method: METHOD.SEARCH
        },
        ADD: {
            url: `${BASE_URL}/status`,
            method: METHOD.POST
        },
        UPDATE: {
 
            url: `${BASE_URL}/status/:id_Status`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/status/:id`,
            method: METHOD.DELETE
        },
    },
    USER: {
        GET: {
 
            url: `${BASE_URL}/user`,
            method: METHOD.GET
        },
        GET_HR: {
            url: `${BASE_URL}/user/hr`,
            method: METHOD.SEARCH
        },
        ADD: {
            url: `${BASE_URL}/user`,
            method: METHOD.POST
        },
        UPDATE: {
 
            url: `${BASE_URL}/user/:id_User`,
            method: METHOD.PUT
        },
        UPDATE_HR: {
 
            url: `${BASE_URL}/user/:id_User/hr`,
            method: METHOD.PUT
        },
        DELETE: {
            url: `${BASE_URL}/user/:id_User`,
            method: METHOD.DELETE
        },
    },
    
}
 
export default API_SCHEME