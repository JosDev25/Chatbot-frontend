# AI Chat Assistant SPA - Frontend

![Project Status](https://img.shields.io/badge/STATUS-DEPLOYED-green)

## Table of Contents
1. [Project Description](#project-description)
2. [Main Features](#main-features)
3. [System Architecture](#system-architecture)
4. [Technologies Used](#technologies-used)
5. [Prerequisites](#prerequisites)
6. [Installation and Execution](#installation-and-execution)
7. [Main Screens](#main-screens)
8. [Contact](#contact)

## Project Description
The **AI Chat Assistant SPA** frontend is a **Single Page Application (SPA)** built with **React 19 + Vite**. It provides a smooth and efficient interface for users to interact with the AI assistant, manage their sessions, and retrieve chat history.

## Main Features
- **User Authentication**: Supports login, signup, and session management.
- **Chat Interface**: Allows users to send messages and receive AI responses.
- **Chat History**: Displays past conversations for registered users.
- **Code Syntax Highlighting**: Uses `react-syntax-highlighter` for formatting AI-generated code responses.
- **Fast Performance**: Optimized using **Vite** for a quick development and build process.
- **TypeScript Support**: Ensures type safety and scalability.
- **ESLint Configured**: Enforces best coding practices.

## Low-Level Wireframes
The frontend UI is designed based on **low-fidelity wireframes**, ensuring a user-friendly experience. The design follows a **modular React component structure**, where different sections of the application handle authentication, chat interactions, and history retrieval.

![image](https://github.com/user-attachments/assets/775f5e21-cebc-463f-be9d-f03c920df0c0)
*Figure 1: Wireframe Landing Idea*

![image](https://github.com/user-attachments/assets/5a495d45-1478-40a5-867f-421dcad97a48)

*Figure 2: Wireframe Login Idea*

![image](https://github.com/user-attachments/assets/54f1959a-3661-4f88-a315-dd0c54af4a0f)

*Figure 3:  Wireframe Register Idea*

![image](https://github.com/user-attachments/assets/4081ac7d-edf2-488e-bb9c-14a47a9352f1)

*Figure 4:  Wireframe chat history Idea*

## Frontend User Flow
The user experience is mapped out through a **User Flow Diagram**, illustrating the navigation between different application states.

![FlowChart](https://github.com/user-attachments/assets/fafc15f8-7b92-4f3a-b7b5-66a9e223ab44)

*Figure 5: User Flow Diagram*


![image](https://github.com/user-attachments/assets/ad6b5e95-ada7-4201-bf46-7b42fb8d5223)

*Figure 6: Frontend Running*
## Technologies Used
- **React 19** 
- **Vite** 
- **TypeScript**
- **Axios** 
- **React Syntax Highlighter** → Formats AI-generated code snippets.

## Prerequisites

Before running the project, ensure you have:

* **Node.js 16+** installed.
* **npm** installed (usually comes with Node.js).
* **Git** for cloning the repository.
* **A running backend** to connect the frontend. The backend API URL will need to be configured.

## Installation and Execution

Follow these steps to set up the frontend locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/JosDev25/chatbot-frontend.git
    ```
2.  **Install dependencies:**

    ```bash
    npm install
    ```
3.  **Set environment variables:**

    * Create a `.env` file in the project's root directory.
    * Add the backend API base URL to the `.env` file:

    ```ini
    VITE_API_BASE_URL=http://localhost:8000
    ```

    * **Note:** Ensure the `VITE_API_BASE_URL` matches the URL of your running backend.
4.  **Run the application:**

    ```bash
    npm run dev
    ```

    The frontend will be available at `http://localhost:5173`.

## Main Functionalities

1.  **Landing Page:**

    * Provides an introduction to the application.
    * Offers login and signup options.
    * Allows anonymous users to proceed with limited access.
2.  **Login & Signup:**

    * Enables users to register for a new account.
    * Allows existing users to log in with their credentials.
3.  **Chat Interface:**

    * The primary interface for interacting with the AI assistant.
    * Users can send and receive messages.
    * Supports markdown rendering for message formatting.
    * Displays timestamps for each message.
4.  **Chat History:**

    * Displays a list of previous conversations for registered users.
    * Allows users to select and resume past chats.
5.  **Error Handling:**

    * Provides custom error messages to inform users of API failures.
    * Implements frontend validation to ensure correct input.


## Contact

Developed by JosDev25 (eJosR-Coding).
