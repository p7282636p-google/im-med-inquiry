import React from 'react';

const Message = ({ content, sender }) => {
    return (
        <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
            <span className="message-sender">{sender}:</span>
            <span className="message-content">{content}</span>
        </div>
    );
};

export default Message;