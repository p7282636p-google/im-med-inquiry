import React, { useState } from 'react';

const InputBox = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-box">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type your message..."
                className="input-field"
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    );
};

export default InputBox;