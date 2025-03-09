import axios from "axios";

export const LoginValidation = async (email: string, password: string): Promise<string> => {
    try {
        const response = await axios.post("http://localhost:8000/login", {
            email: email,
            password: password
        });

        const data = response.data;

        if (data.success) {
            console.log("Éxito en el login");

            if (data.user?.name && data.user?.email) {
                console.log("Usuario cargado correctamente:", data.user);
                return `Bienvenido, ${data.user.name}!`;
            } else {
                console.error("Error: La respuesta no tiene datos completos.");
                return "Error: Datos de usuario incompletos.";
            }
        } else {
            console.error("Error: Login fallido.");
            return "Error: Credenciales incorrectas.";
        }
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        return "Error al conectar con el servidor.";
    }
};

export const Register = async (name: string, email: string, password: string, sessionId?: string): Promise<string> => {
    try {
        const requestBody: any = { name, email, password };
        if (sessionId) {
            requestBody.session_id = sessionId;
        }

        const response = await axios.post(`http://localhost:8000/register`, requestBody);
        return response.data.message;
    } catch (error) {
        console.error("Error al registrar", error);
        if (axios.isAxiosError(error) && error.response) {
            return `Error: ${error.response.data.detail || "Error desconocido"}`;
        }
        return "Error de conexión con el servidor.";
    }
};