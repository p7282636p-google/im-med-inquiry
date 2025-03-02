const express = require('express');
const app = express();
const processRAG = require('./processRAG');

app.use(express.json());
app.use('/processRAG', processRAG);

// ...existing code...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
