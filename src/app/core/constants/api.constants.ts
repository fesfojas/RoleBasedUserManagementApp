import { environment } from "../../../environments/environment.development";

export const REQ_RES_API: any = {
    BASE_URL: environment.baseURL,
    ENDPOINT: {
        LOGIN: '/login',
        LOGOUT: '/logout'
    }
}