
document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            processFileContent(content);
        };
        reader.readAsText(file);
    }
}

function processFileContent(content) {
    // Send content to the backend for processing
    fetch('/processRAG', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend
        console.log('Processed data:', data);
    })
    .catch(error => {
        console.error('Error processing file:', error);
    });
}
