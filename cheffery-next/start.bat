@echo off
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION
cd /d "%~dp0"

echo CHEFFERY NEXT.JS STARTER
echo ==========================

REM Create logs directory
if not exist logs mkdir logs >nul 2>&1
set LOGFILE=logs\dev.log

echo Selecting port...
set PORT=3000
netstat -ano | findstr :%PORT% >nul 2>&1 && set PORT=3001
netstat -ano | findstr :%PORT% >nul 2>&1 && set PORT=3002
netstat -ano | findstr :%PORT% >nul 2>&1 && set PORT=3003

REM Prefer local Next.js binary, else use npx
set NEXTBIN=node_modules\.bin\next.cmd
if exist "%NEXTBIN%" (
  set RUNCMD="%NEXTBIN%" dev -p %PORT%
) else (
  set RUNCMD=npx --yes next@14.2.5 dev -p %PORT%
)

echo Launching on http://localhost:%PORT% (logging to %LOGFILE%)
start "" http://localhost:%PORT%/

REM Use PowerShell Tee-Object to write to console and log file
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$p = '%CD%'; $log = Join-Path $p '%LOGFILE%';" ^
  "; & %RUNCMD% 2>&1 | Tee-Object -FilePath $log -Append"

set EXITCODE=%ERRORLEVEL%
echo.
if %EXITCODE% NEQ 0 (
  echo Server exited with code %EXITCODE%. See %LOGFILE% for details.
) else (
  echo Server stopped.
)
echo Press any key to close...
pause > nul