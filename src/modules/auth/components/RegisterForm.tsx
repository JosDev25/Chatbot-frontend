import React from 'react';
import './ModalForm.css';

interface RegisterFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-form">
                    <h2>Registrarse</h2>
                    <form>
                        <label>Nombre</label>
                        <br />
                        <input type="text" name="name" className="modal-input" />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="email" name="email" className="modal-input" />
                        <br />
                        <label>Password</label>
                        <br /><br />
                        <input type="password" name="password" className="modal-input" />
                        <br />
                        <button type="submit" className="modal-button">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;