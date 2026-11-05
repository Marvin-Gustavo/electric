@echo off
chcp 65001 >nul
echo ========================================================
echo   ELECTROSUCRE & CEA AZARI - SUBIR A GITHUB
echo ========================================================
echo.

if not exist gh.exe (
    echo [ERROR] No se encontró gh.exe en este directorio.
    pause
    exit /b 1
)

echo Paso 1: Autenticación en GitHub...
echo Se abrirá el navegador para ingresar el código de verificación.
echo.
gh.exe auth login --web -h github.com

echo.
echo Paso 2: Creando repositorio remoto y subiendo el proyecto...
gh.exe repo create electrosucre-cea-azari --public --source=. --remote=origin --push

if %errorlevel% neq 0 (
    echo.
    echo El repositorio probablemente ya existe en tu cuenta.
    echo Intentando subir la rama main directamente...
    git push -u origin main
)

echo.
echo ========================================================
echo   ¡PROYECTO SUBIDO CON ÉXITO A GITHUB!
echo ========================================================
pause
