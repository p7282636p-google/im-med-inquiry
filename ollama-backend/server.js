const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const { exec } = require('child_process');

const app = express();
const port = 3001; // Change the port number

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    console.log(`Received message: ${userMessage}`); // Log the received message
    ensureModelPulled()
        .then(() => runOllamaCommand(userMessage))
        .then(botResponse => {
            console.log(`Bot response: ${botResponse}`); // Log the bot response
            res.json({ response: botResponse });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

function ensureModelPulled() {
    return new Promise((resolve, reject) => {
        exec('ollama list', (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            if (!stdout.includes('ollama3.2')) { // Update the model name
                exec('ollama pull ollama3.2', (error, stdout, stderr) => { // Use the pull command
                    if (error) {
                        return reject(error);
                    }
                    resolve();
                });
            } else {
                resolve();
            }
        });
    });
}

function runOllamaCommand(message) {
    return new Promise((resolve, reject) => {
        exec(`ollama run ollama3.2 --input "${message}"`, (error, stdout, stderr) => { // Update the model name
            if (error) {
                return reject(error);
            }
            resolve(stdout.trim());
        });
    });
}

app.listen(port, () => {
    console.log(`Ollama backend running at http://localhost:${port}`);
});
