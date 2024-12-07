import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<string[]>([]); // Initialize as an empty array
  const [userMessage, setUserMessage] = useState<string>();

  useEffect(() => {
    const socket = new WebSocket("http://localhost:8080");

    socket.onopen = () => {
      console.log("socket is connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("received Message", message.data);
      setMessages((prevMessages) => [message.data, ...prevMessages]);
    };
      return ()=>socket.close()
      
    
  }, []);
  
  if (!socket) return <div>Connecting to socker server</div>;

  return (
    <div>
      <input
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button onClick={() => socket.send(userMessage)}>send Message</button>

      <div>
        {messages?.map((msg) => (
        <p>{msg}</p>
      ))}
        
      </div>
    </div>
  );
}

export default App;
