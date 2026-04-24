@echo off
cls
echo ========================================
echo     Toystore - Iniciando Frontend
echo ========================================
echo.

cd /d "%~dp0frontend"

echo Verificando dependencias...
echo.

if not exist "node_modules" (
    echo Instalando dependencias (primeira vez)...
    call npm install
    echo.
)

echo Iniciando servidor de desenvolvimento...
echo.
echo Acesse: http://localhost:3000
echo.
echo ========================================
echo.

call npm run dev
