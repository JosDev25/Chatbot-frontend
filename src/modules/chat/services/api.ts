import axios from "axios";

export const fetchChatResponse = async (text: string): Promise<string> => {

    try {
        //Session id was indeed needed first before sending the request to the chat
        const sessionResponse = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/session`)
        const session_id = sessionResponse.data.session_id;

        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/chat`,
            { text },
            { params: { session_id } }
        );

        return response.data.response;
    } catch (error) {
        console.error("Error al obtener respuesta:", error);
        return "Error al conectar con el servidor.";
    }
};
