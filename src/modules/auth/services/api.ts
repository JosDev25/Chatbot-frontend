import axios from "axios";

export const fetchChatResponse = async (text: string): Promise<string> => {

    try {
        //Session id was indeed needed first before sending the request to the chat
        const sessionResponse = await axios.post("http://localhost:8000/session");
        const session_id = sessionResponse.data.session_id;

        const response = await axios.post(`http://localhost:8000/chat`,
            { text },
            { params: { session_id } }
        );

        return response.data.response;
    } catch (error) {
        console.error("Error al obtener respuesta:", error);
        return "Error al conectar con el servidor.";
    }
};
