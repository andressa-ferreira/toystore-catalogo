@echo off
echo 
echo  toystore -  backend
echo 
echo.

REM Detectar JAVA_HOME automaticamente
for /f "tokens=*" %%i in ('where java') do set JAVA_PATH=%%i
for %%i in ("%JAVA_PATH%") do set JAVA_BIN=%%~dpi
set JAVA_HOME=%JAVA_BIN:~0,-5%

echo Java encontrado em: %JAVA_HOME%
echo.
echo Iniciando Spring Boot...
echo (Primeira execucao pode demorar 2-5 minutos)
echo.

.\mvnw.cmd spring-boot:run

pause
