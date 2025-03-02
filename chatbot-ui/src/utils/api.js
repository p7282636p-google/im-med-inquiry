export const sendMessage = async (message) => {
    try {
        const response = await fetch('https://api.example.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const fetchMessages = async () => {
    try {
        const response = await fetch('https://api.example.com/chat/messages');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.messages;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};