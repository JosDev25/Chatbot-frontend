import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ChatBox from '../chat/components/ChatBox';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
const AppLayout: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <div>
      <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      <div style={{ padding: '20px' }}>
        <ChatBox />
      </div>
      <LoginForm isOpen={showLoginModal} onClose={handleCloseModal} />
      <RegisterForm isOpen={showRegisterModal} onClose={handleCloseModal} />
    </div>
  );
};

export default AppLayout;