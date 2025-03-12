import axios from "axios";

const API_URL_LOGIN = `${import.meta.env.VITE_API_BASE_URL}/login`;
const API_URL_REGISTER = `${import.meta.env.VITE_API_BASE_URL}/register`;


export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL_LOGIN}/login`, { email, password });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw error.response.data;
        } else {
            throw error;
        }
    }
};

export const register = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL_REGISTER}/register`, { name, email, password });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw error.response.data;
        } else {
            throw error;
        }
    }
}
