import Navbar from "./components/Navbar/Navbar";
import ChatBox from "../chat/components/ChatBox";
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}> 
        <ChatBox />
      </div>
    </div>
  );
};

export default AppLayout;