import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleResponseClick = (response) => {
    // Add user message to the chat
    setMessages([...messages, { text: inputText, user: true }]);
    setInputText("");

    // Add chatbot response to the chat
    setMessages([...messages, { text: response, user: false }]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    // Define responses for specific user messages
    const userMessage = inputText.toLowerCase();
    let chatbotResponse = "I did not understand that.";

    if (userMessage === "hello") {
      chatbotResponse = "Hi there! How can I assist you today?";
    } else if (userMessage === "how are you?") {
      chatbotResponse = "I am just a chatbot, but I am functioning well!";
    } else if (userMessage === "options") {
      // Provide response options for 'options' message
      chatbotResponse = "Here are some options:";
    }

    // Add user message to the chat
    setMessages([...messages, { text: inputText, user: true }]);
    setInputText("");

    // Add chatbot response to the chat
    setMessages([...messages, { text: chatbotResponse, user: false }]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? "user" : "chatbot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="message-input"
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
      {inputText.toLowerCase() === "options" && (
        <div className="response-options">
          <button onClick={() => handleResponseClick("Option 1")}>
            Option 1
          </button>
          <button onClick={() => handleResponseClick("Option 2")}>
            Option 2
          </button>
          <button onClick={() => handleResponseClick("Option 3")}>
            Option 3
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
