import React from "react";

interface SidebarProps {
    chatHistory: { user: string; bot: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ chatHistory }) => {
    return (
        <div className="sidebar">
            <ul>
                {chatHistory.map((chat, index) => (
                    <li key={index}>
                        <strong>Tú:</strong> {chat.user} <br />
                        <strong>GPT:</strong> {chat.bot}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
