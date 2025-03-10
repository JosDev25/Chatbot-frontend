import axios from "axios";
import { useState, useEffect } from "react";

interface ChatBoxProps {
    isLoggedIn: boolean;
    sessionId?: string | null;
}

const ChatBox: React.FC<ChatBoxProps> = ({ isLoggedIn, sessionId }) => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    const [typingResponse, setTypingResponse] = useState("");
    const [apiCallsRemaining, setApiCallsRemaining] = useState<number | null>(null);
    const [selectedModel, setSelectedModel] = useState("gpt-4o");

    const availableModels = [
        { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
        { value: "gpt-4", label: "GPT-4" },
        { value: "gpt-4o", label: "GPT-4 Omni" },
        { value: "gpt-4o-mini", label: "GPT-4o Mini" },
    ];

    useEffect(() => {
        if (!isLoggedIn && sessionId) {
            fetchApiCallCount(sessionId);
        }
    }, [isLoggedIn, sessionId]);

    useEffect(() => {
        if (response) {
            let tempResponse = "";
            let index = 0;

            const interval = setInterval(() => {
                if (index < response.length) {
                    tempResponse += response.charAt(index);
                    setTypingResponse(tempResponse);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 10);

            return () => clearInterval(interval);
        }
    }, [response]);



    const fetchApiCallCount = async (sessionId: string) => {
        try {
            const res = await axios.get(`http://localhost:8000/api_calls`, { params: { session_id: sessionId } });
            if (res.status !== 200) {
                console.warn("La sesión anónima no tiene registros. Es posible que sea nueva.");
                setApiCallsRemaining(5);
                return;
            }
            if (res.data.api_calls !== undefined) {
                setApiCallsRemaining(5 - res.data.api_calls);
            }
        } catch (err) {
            console.error("Error obteniendo intentos restantes", err);
        }
    };


    const handleInputChange = (e: { target: { value: string } }) => {
        setInput(e.target.value);
        setError(e.target.value.length < 10 ? "Ingresa al menos 10 caracteres" : "");
    };

    const handleSend = async () => {
        if (!isLoggedIn && apiCallsRemaining !== null && apiCallsRemaining <= 0) {
            alert("Has alcanzado el límite de intentos como usuario anónimo. Por favor, regístrate o inicia sesión.");
            return;
        }

        if (input.length < 10) {
            alert("Por favor, ingresa al menos 10 caracteres correctamente.");
            return;
        }

        try {
            const requestBody: any = { text: input, model: selectedModel };

            if (isLoggedIn) {
                const userData = JSON.parse(localStorage.getItem("user") || "{}");
                requestBody.email = userData.email;
            } else if (sessionId) {
                requestBody.session_id = sessionId;
            }

            const response = await axios.post("http://localhost:8000/chat", requestBody);
            const data = response.data;

            if (data.limit_reached) {
                alert("Has alcanzado el límite de intentos. Regístrate o inicia sesión.");
                return;
            }

            setResponse(data.response || "");
            setInput("");

            if (!isLoggedIn && sessionId) {
                fetchApiCallCount(sessionId);
            }
        } catch (err) {
            console.error("Error al obtener respuesta del chat", err);
        }
    };

    return (
        <div className="chat-wrapper">
            <h2>Freemiun GPT</h2>
            <div className="chat-container">
                <div className="model-selector">
                    <label>Selecciona un modelo:</label>
                    <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                        {availableModels.map((model) => (
                            <option key={model.value} value={model.value}>
                                {model.label}
                            </option>
                        ))}
                    </select>
                </div>

                {!isLoggedIn && apiCallsRemaining !== null && apiCallsRemaining <= 0 ? (
                    <p className="error-message">
                        Has alcanzado el límite de intentos como usuario anónimo. <br />
                        <strong>Regístrate o inicia sesión para seguir usando el chat.</strong>
                    </p>
                ) : (
                    <>
                        <div className="answer-container">
                            <div className="gpt-answer">
                                <p>Respuesta: {typingResponse || response || "Hola, ¿en qué puedo ayudarte hoy?"}</p>
                            </div>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <div className="input-container">
                            <input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Escribe algo..."
                                disabled={!isLoggedIn && apiCallsRemaining !== null && apiCallsRemaining <= 0}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!isLoggedIn && apiCallsRemaining !== null && apiCallsRemaining <= 0}
                            >
                                Enviar
                            </button>
                        </div>
                        {!isLoggedIn && apiCallsRemaining !== null && (
                            <p>Intentos restantes: {apiCallsRemaining}</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatBox;
