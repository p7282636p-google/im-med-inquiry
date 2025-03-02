#!/bin/bash

# Navigate to the backend directory and create package.json if it doesn't exist
echo "Setting up the backend..."
cd ollama-backend

if [ ! -f package.json ]; then
  echo "Creating package.json..."
  cat <<EOL > package.json
{
  "name": "ollama-backend",
  "version": "1.0.0",
  "description": "Backend for Ollama Chat Bot",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  }
}
EOL
fi

# Install dependencies
npm install

# Start the backend server in the background
echo "Starting the backend server..."
npm start &

# Navigate to the frontend directory
cd ../ollama-frontend

# Open the frontend in the default web browser
echo "Opening the frontend in the web browser..."
if which xdg-open > /dev/null
then
  xdg-open index.html
elif which gnome-open > /dev/null
then
  gnome-open index.html
elif which open > /dev/null
then
  open index.html
else
  echo "Could not detect the web browser to open the frontend."
fi

echo "Setup complete. The Ollama chat bot application is running."
