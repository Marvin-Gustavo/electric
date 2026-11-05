# Script automatizado para subir el proyecto a GitHub
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  ELECTROSUCRE & CEA AZARI - SUBIR A GITHUB" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

if (-not (Test-Path ".\gh.exe")) {
    Write-Host "[ERROR] No se encontró gh.exe en la carpeta actual." -ForegroundColor Red
    exit 1
}

Write-Host "1. Verificando autenticación en GitHub..." -ForegroundColor Yellow
$authStatus = & .\gh.exe auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Iniciando sesión en GitHub..." -ForegroundColor Green
    Write-Host "Se abrirá tu navegador para confirmar el código de verificación." -ForegroundColor Yellow
    & .\gh.exe auth login --web -h github.com
} else {
    Write-Host "¡Ya tienes una sesión activa en GitHub!" -ForegroundColor Green
}

Write-Host ""
Write-Host "2. Creando repositorio remoto y subiendo el proyecto..." -ForegroundColor Yellow
& .\gh.exe repo create electrosucre-cea-azari --public --source=. --remote=origin --push

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Si el repositorio ya fue creado anteriormente en tu GitHub, subiendo rama main..." -ForegroundColor Yellow
    git push -u origin main
}

Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
Write-Host "  ¡PROYECTO SUBIDO CON ÉXITO A GITHUB!" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
