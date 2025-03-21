import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ChatBox from "../chat/components/ChatBox";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import axios from "axios";

const AppLayout: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUserName(parsedUser.name);
    } else {
      createAnonymousSession();
    }
  }, []);

  const createAnonymousSession = async () => {
    try {
      const storedSession = localStorage.getItem("session_id");
      if (!storedSession) {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/session`);
        localStorage.setItem("session_id", response.data.session_id);
        setSessionId(response.data.session_id);
      } else {
        setSessionId(storedSession);
      }
    } catch (error) {
      console.error("Error creando sesión anónima:", error);
    }
  };

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("user");
    localStorage.removeItem("session_id");
    createAnonymousSession();
    setChatHistory([]);
  };

  return (
    <div className="app-layout">
      <Navbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onLogoutClick={handleLogout}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />
      <div className="content-container">

        <div className="chat-container">
          <ChatBox
            isLoggedIn={isLoggedIn}
            sessionId={sessionId}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        </div>
      </div>
      <LoginForm
        isOpen={showLoginModal}
        onClose={handleCloseModal}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
      />
      <RegisterForm isOpen={showRegisterModal} onClose={handleCloseModal} />
    </div>
  );
};

export default AppLayout;
