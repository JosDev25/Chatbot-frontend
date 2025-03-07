import { useState, useEffect } from "react";
import { fetchChatResponse } from "../services/api";

const ChatBox = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    const [typingResponse, setTypingResponse] = useState("");

    const handleInputChange = (e: { target: { value: string } }) => {
        const value = e.target.value;
        setInput(value);
        if (value.length < 10) {
            setError("Ingresa al menos 10 carácteres");
        } else {
            setError("");
        }
    };

    const handleSend = async () => {
        if (error || input.length < 10) {
            alert("Por favor, ingresa al menos 10 caracteres correctamente.");
            return;
        }
        const reply = await fetchChatResponse(input);
        setResponse(reply);
        setTypingResponse("");
    };

    useEffect(() => {
        if (response) {
            let index = 0;
            setTypingResponse("");
            const interval = setInterval(() => {
                if (index < response.length) {
                    setTypingResponse((prev) => prev + response[index]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 10);
            return () => clearInterval(interval);
        }
    }, [response]);

    return (
        <>
            <h1>Freemiun GPT</h1>
            <div className="answer">
                <p className="gpt-answer">Respuesta: {typingResponse}</p>
            </div>
            <div className="inputgpt">
                <input value={input} onChange={handleInputChange} placeholder="Escribe algo..." />
                <button onClick={handleSend}>Enviar</button>
            </div>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}

        </>
    );
};

export default ChatBox;
