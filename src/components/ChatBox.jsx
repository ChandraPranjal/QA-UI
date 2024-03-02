import React from "react";
import Message from "./Message";

function ChatBox() {
  const messages = [
    { id: 1, text: "Hi" },
    { id: 2, text: "Hello" },
    { id: 3, text: "Acha bete" },
  ];
  return (
    <div>
      {messages.map((message) => {
        <Message key={message.id} message={message} />;
      })}
    </div>
  );
}

export default ChatBox;
