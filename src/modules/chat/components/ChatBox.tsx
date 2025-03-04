import { useState } from "react";
import { fetchChatResponse } from "../../auth/services/api";

const ChatBox = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [error, setError] = useState("")

    const handleInputChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        setInput(value);

        if (value.length < 10) {
            setError("Ingresa al menos 10 carácteres");
        } else {
            setError("")
        }
    }

    const handleSend = async () => {
        if (error) {
            alert("Por favor, corrige el error antes de enviar.");
            return;
        }
        if (input.length < 10) {
            alert("Por favor, ingresa al menos 10 caracteres");
            return;
        }
        const reply = await fetchChatResponse(input);
        setResponse(reply);
    };


    return (
        <>
            <h1>Freemiun GPT</h1>
            <input value={input} onChange={handleInputChange} placeholder="Escribe algo..." />
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <button onClick={handleSend}>Enviar</button>
            <p>Respuesta: {response}</p>
        </>
    );
};

export default ChatBox;
