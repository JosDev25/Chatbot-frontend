import axios from "axios";

const API_URL="http://localhost:800/login"

export const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error: any) { 
        if(error.response){
          throw error.response.data;
        }else{
          throw error;
        }
      }
  };


