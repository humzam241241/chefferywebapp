@echo off
echo ===== Checking for errors =====
echo.

echo === Node version ===
node -v
echo.

echo === NPM version ===
npm -v
echo.

echo === Next.js files ===
dir node_modules\.bin\next* 2>nul
echo.

echo === Package.json ===
type package.json
echo.

echo === .next folder ===
dir .next 2>nul
echo.

echo === Network ports in use ===
netstat -ano | findstr :3000
echo.

echo ===== Debug complete =====
echo If Next.js is running, open http://localhost:3000 in your browser
echo.

pause
