@echo off
cls
echo ========================================
echo      FLATOYS - Iniciando Backend
echo ========================================
echo.
echo Configurando ambiente...
echo.

cd /d "%~dp0backend"

REM Detectar JAVA_HOME
for /f "tokens=*" %%i in ('where java 2^>nul') do set JAVA_PATH=%%i
if "%JAVA_PATH%"=="" (
    echo ERRO: Java nao encontrado!
    echo Instale o Java 17 ou superior
    pause
    exit /b 1
)

for %%i in ("%JAVA_PATH%") do set JAVA_BIN=%%~dpi
set JAVA_HOME=%JAVA_BIN:~0,-5%

echo Java encontrado: %JAVA_HOME%
echo.
echo Iniciando Spring Boot...
echo (Primeira execucao pode demorar 2-5 minutos)
echo.
echo Aguarde a mensagem: "Started FlatoysApplication"
echo.
echo ========================================
echo.

.\mvnw.cmd spring-boot:run

if errorlevel 1 (
    echo.
    echo Erro ao iniciar o backend!
    pause
)
