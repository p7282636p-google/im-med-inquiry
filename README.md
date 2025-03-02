# Ollama Chat Bot

This project sets up a simple chat bot application using a frontend and backend. The frontend allows users to send messages, and the backend processes these messages using the `ollama` command.

## Prerequisites

- Node.js and npm installed
- `ollama` command-line tool installed

## Setup and Run

1. Clone the repository:
    ```sh
    git clone https://github.com/p7282636p-google/im-med-inquiry.git
    cd im-med-inquiry
    ```

2. Make the setup script executable:
    ```sh
    chmod +x setup-and-run.sh
    ```

3. Run the setup script:
    ```sh
    ./setup-and-run.sh
    ```

## Usage

1. In the web browser, type a message in the input box and click the "Send" button.
2. The message will be sent to the backend, processed by the `ollama` command, and the response will be displayed in the chat box.

## Project Structure

```
im-med-inquiry/
├── ollama-backend/
│   ├── server.js
├── ollama-frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
├── setup-and-run.sh
```

## Notes

- Ensure the backend server is running before using the frontend.
- The backend uses the `child_process` module to execute shell commands and interact with the `ollama` tool.
````

</file>