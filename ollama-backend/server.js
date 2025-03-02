const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    ensureModelDownloaded()
        .then(() => runOllamaCommand(userMessage))
        .then(botResponse => {
            res.json({ response: botResponse });
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

function ensureModelDownloaded() {
    return new Promise((resolve, reject) => {
        exec('ollama list', (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            if (!stdout.includes('deepseek-r1:7b')) {
                exec('ollama download deepseek-r1:7b', (error, stdout, stderr) => {
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
        exec(`ollama run deepseek-r1:7b --input "${message}"`, (error, stdout, stderr) => {
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
