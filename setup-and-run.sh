#!/bin/bash

# Navigate to the backend directory and install dependencies
echo "Setting up the backend..."
cd ollama-backend
npm install

# Start the backend server in the background
echo "Starting the backend server..."
node server.js &

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
