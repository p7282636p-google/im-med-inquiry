# Chatbot UI

This project is a simple chatbot interface built with React. It allows users to send and receive messages in a chat format.

## Project Structure

- **public/**: Contains static files.
  - **index.html**: The main HTML file that serves as the entry point for the application.
  - **styles.css**: Contains styles for the chatbot UI.

- **src/**: Contains the source code for the React application.
  - **App.js**: The main React component that sets up the application structure.
  - **components/**: Contains reusable components.
    - **ChatBox.js**: Manages the state of chat messages and renders Message and InputBox components.
    - **Message.js**: Displays individual chat messages.
    - **InputBox.js**: Allows users to type and send messages.
  - **utils/**: Contains utility functions for API calls.
    - **api.js**: Functions for sending messages and receiving responses.

- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **.babelrc**: Configuration file for Babel.
- **.eslintrc.json**: Configuration file for ESLint.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd chatbot-ui
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the chatbot UI.

## Usage Guidelines

- Type your message in the input box and press Enter to send.
- The chatbot will respond based on the implemented backend logic.

## Contributing

Feel free to submit issues or pull requests to improve the chatbot UI!