import React, { useState } from 'react';
import './ModalForm.css';
import { LoginValidation } from '../services/api';

interface LoginFormProps {
    isOpen: boolean;
    onClose: () => void;
    setIsLoggedIn: (value: boolean) => void;
    setUserName: (name: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isOpen, onClose, setIsLoggedIn, setUserName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await LoginValidation(email, password);
        
        if (response.startsWith("Bienvenido")) {
            const name = response.split(",")[1].trim();
            setIsLoggedIn(true);
            setUserName(name);
            localStorage.setItem("user", JSON.stringify({ name, email }));
            onClose();  
        } else {
            setMessage(response);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-form">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="modal-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="modal-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button type="submit" className="modal-button">
                            Iniciar Sesión
                        </button>
                    </form>
                    {message && <p className="modal-message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
