import React from 'react';
import './ModalForm.css'

interface LoginFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-form">
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <label>Email</label>
                        <br />
                        <input type="email" name="email" className="modal-input" />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" name="password" className="modal-input" />
                        <br />
                        <button type="submit" className="modal-button">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;