import React, { useState } from 'react';
import Message from './Message';
import InputBox from './InputBox';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="chatbox">
            <div className="messages">
                {messages.map((msg, index) => (
                    <Message key={index} content={msg.content} sender={msg.sender} />
                ))}
            </div>
            <InputBox onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatBox;