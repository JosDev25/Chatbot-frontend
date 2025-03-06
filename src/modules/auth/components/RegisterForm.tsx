import React, { useState } from 'react';
import './ModalForm.css';
import { Register } from '../services/api';

interface RegisterFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            Register(name, email, password);
            setMessage("Registro exitoso");
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMessage("Error al registrarse. Inténtalo de nuevo.");
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
                    <h2>Registrarse</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre</label>
                        <br />
                        <input 
                            type="text" 
                            name="name" 
                            className="modal-input"
                            value={name}
                            onChange={(e)=> setName(e.target.value)} />
                        <br />
                        <label>Email</label>
                        <br />
                        <input 
                            type="email" 
                            name="email" 
                            className="modal-input"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)} />
                        <br />
                        <label>Password</label>
                        <br /><br />
                        <input 
                            type="password" 
                            name="password" 
                            className="modal-input"
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}/>
                        <br />
                        <button type="submit" className="modal-button">Registrarse</button>
                    </form>
                    {message && <p className="modal-message">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;