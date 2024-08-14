import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username") || "Anonymous");

  useEffect(() => {
    axios.get("/api/messages").then((response) => {
      setMessages(response.data);
    });

    const socket = new SockJS("/ws");
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe("/topic/messages", (message) => {
        if (message.body) {
          setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
        }
      });
    });

    return () => {
      stompClient.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        username,
        content: newMessage,
        imageUrl: "", // Handle image URL if necessary
      };

      axios.post("/api/messages", message).then((response) => {
        setNewMessage("");
      });
    }
  };

  return (
    <div>
      <div className="messages">
        {messages.map((msg) => (
          <div className="message" key={msg.id}>
            <p><strong>{msg.username}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>
      <div className="input">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
