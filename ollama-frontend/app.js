document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const message = chatInput.value;
        if (message.trim()) {
            addMessage('User', message);
            chatInput.value = '';
            sendMessageToBackend(message);
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessageToBackend(message) {
        fetch('http://localhost:3001/chat', { // Update the port number
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        })
        .then(response => response.json())
        .then(data => {
            addMessage('Bot', data.response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
