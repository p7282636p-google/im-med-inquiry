@echo off
set PORT=%1

if "%PORT%"=="" (
  echo Usage: %0 <port>
  exit /b 1
)

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%PORT%') do (
  echo Killing process %%a using port %PORT%
  taskkill /PID %%a /F
  exit /b 0
)

echo No process found using port %PORT%
