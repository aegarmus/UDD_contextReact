import { Form } from "react-router-dom";
import { apiClient } from "../../../shared/services/apiClient";

export const loginService = async ( { correo, password }) => {
    try {
        const { data } = await apiClient.post('/auth/login', { correo, password })
        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw new Error(error);
    }
}


export const registerService = async(userData) => {
    try {
        if(!(userData instanceof FormData)) userData = new FormData(userData);
        
        const { data } = await apiClient.post('/auth/register', userData)
        return data;
    } catch (error) {
        console.error("Error registering:", error);
        throw new Error(error);
    }
}