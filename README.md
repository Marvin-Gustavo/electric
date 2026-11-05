# ElectroSucre & CEA AZARI ⚡
### Plataforma Web de Electricidad Industrial — Sucre, Chuquisaca, Bolivia

Plataforma web dinámica, moderna y profesional orientada al sector de la **Electricidad Industrial** en la ciudad de **Sucre, Bolivia**, destacando el rol institucional y de certificación del centro técnico **CEA AZARI** (Centro de Educación Alternativa Azari - Especialidad Electricidad Industrial).

Diseñada bajo los principios estéticos minimalistas de **Apple** (paleta de blancos puros, gris titanio, acentos electro blue, efectos *glassmorphism* y microinteracciones fluidas de 300ms).

---

## 🌟 Características Principales

### 1. Directorio de Electricistas Industriales
* **15 Perfiles Reales y Detallados**: Nombres, fotos, tarifas referenciales en Bolivianos (Bs/hr), años de experiencia y proyectos industriales en Chuquisaca.
* **Insignia Distintiva "Verificado / Egresado CEA AZARI"**: Resalta a los técnicos formados en los talleres del CEA AZARI con su código de registro oficial y año de promoción.
* **Filtros Avanzados**: Por especialidad (*Motores Trifásicos, Automatización y PLC, Tableros de Distribución, Variadores de Frecuencia, Subestaciones, etc.*), por zona de Sucre (*Zona Azari, Mesa Verde, San Roque, Lajastambo, etc.*) y botón conmutador para ver exclusivamente egresados del CEA AZARI.
* **Acciones en el Cliente**:
  - Ver modal completo con biografía, normas dominadas (NB 777, IEC, NFPA) y proyectos.
  - Botón directo de **WhatsApp** con mensaje preconfigurado.
  - Llamada telefónica directa.
  - Sistema de valoración (1 a 5 estrellas con reseñas y recálculo automático de promedio).
  - Compartir perfil mediante copiado al portapapeles con alertas toast.

### 2. Marketplace de Tiendas y Materiales Eléctricos
* **15 Productos y Equipos Industriales**: Disyuntores Schneider, contactores WEG, variadores Danfoss Micro Drive, multímetros True-RMS Fluke, cables Conduspar THHN, guardamotores Siemens, gabinetes IP66, capacitores Epcos, etc.
* **Comercio Local de Sucre**: Asociados a tiendas y distribuidores de Sucre (*ElectroSucre SRL, Ferretería Industrial Azari, Distribuidora Eléctrica Chuquisaca, TecnoEléctrica San Roque*).
* **Filtros por Categoría**: Conductores, Protecciones, Motores y Variadores, Herramientas, Sensores y Contactores, Tableros, Iluminación Industrial.
* **Carrito de Compras Completo**:
  - Badge interactivo con contador en el Header.
  - Drawer lateral deslizable con incremento/decremento de cantidades y cálculo de total en Bs.
  - **Cotización y Pedido vía WhatsApp**: Genera automáticamente la orden detallada con formato listo para enviar a distribuidores locales.
  - **Simulación de Compra**: Genera código de orden (`SUC-XXXXXX`) con confirmación en pantalla.

### 3. Foro de Consultas Técnicas & Normativa NB 777
* **15 Hilos de Discusión Especializados**: Casos reales de plantas de Sucre sobre caídas de tensión (NB 777), falla en arranques estrella-triángulo, alarmas en variadores Danfoss, mallas a tierra en terrenos rocosos, bancos de condensadores y requisitos de CESSA.
* **Interacción Dinámica en el Cliente**:
  - Sistema de votos positivo / negativo (*upvotes/downvotes*).
  - Verificación de solución: permite marcar y desmarcar respuestas como **"Solución Verificada"**.
  - Formulario de respuesta inmediata con avatar y rol de usuario.
  - Modal para formular **Nuevas Consultas Técnicas** con selección de etiquetas (*tags*) e insignia CEA AZARI.

### 4. Componentes Globales de UI/UX Estilo Apple
* **Hero Section de Alto Impacto**: Tipografía de gran escala, subtítulos elegantes, métricas clave (*150+ Egresados, 100% Norma NB 777, 15+ Tiendas*) y botones CTA.
* **Carruseles Dinámicos**:
  - Carrusel de Electricistas Destacados (CEA AZARI).
  - Carrusel de Productos y Ofertas de Tiendas en Sucre.
  - Carrusel continuo (*Infinite Marquee*) de marcas industriales homologadas (*Schneider Electric, Siemens, ABB, WEG, Fluke, Phoenix Contact, Danfoss, Conduspar, Tramontina*).
* **Sección Institucional "Sobre CEA AZARI"**: Misión, módulos formativos (Automatismos, Tableros, Bobinado, NB 777), equipamiento de talleres, turnos y convocatoria de admisión en Barrio Azari.
* **Header & Footer Profesionales**: Transparencias *glassmorphism*, barra de búsqueda global reactiva, modal de autenticación con perfiles demo (*Estudiante CEA AZARI, Docente, Cliente*) y formulario de boletín técnico.

---

## 🛠️ Stack Tecnológico

* **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
* **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
* **Iconografía**: [Lucide React](https://lucide.dev/)
* **Estado Global de Cliente**: React Context API (`AppContext.tsx`) para carrito, filtros, modales, calificaciones y debates.

---

## 🚀 Instrucciones para Ejecución Local

### Prerrequisitos
Tener instalado [Node.js](https://nodejs.org/) (versión 18.17 o superior) y `npm`.

### Paso 1: Clonar o Descargar el Proyecto
```bash
git clone https://github.com/TU-USUARIO/electrosucre-cea-azari.git
cd electrosucre-cea-azari
```

### Paso 2: Instalar Dependencias
```bash
npm install
```

### Paso 3: Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

Abre en tu navegador: [http://localhost:3000](http://localhost:3000)

### Paso 4: Compilación para Producción (Opcional)
```bash
npm run build
npm run start
```

---

## 📦 Subir el Proyecto a GitHub

Ya hemos instalado y configurado **GitHub CLI (`gh`)** y el repositorio Git local en la rama `main`. Elige el método que prefieras:

### Opción A (Recomendada y 100% Automática con GitHub CLI)
Ejecuta en tu terminal:
```bash
# 1. Inicia sesión en GitHub (se abrirá tu navegador para confirmar con un código de 8 dígitos)
gh auth login

# 2. Crea el repositorio remoto y sube todo el código en un solo paso
gh repo create electrosucre-cea-azari --public --source=. --remote=origin --push
```
¡Listo! El repositorio se creará automáticamente en tu cuenta de GitHub y se subirá todo el proyecto.

---

### Opción B (Método Tradicional con Git)
1. Entra a [github.com/new](https://github.com/new) y crea un repositorio llamado `electrosucre-cea-azari`.
2. En tu terminal ejecuta:
```bash
git remote add origin https://github.com/TU-USUARIO/electrosucre-cea-azari.git
git push -u origin main
```

---

## ☁️ Despliegue en Vercel (Paso a Paso)

La plataforma está 100% optimizada para desplegarse con un solo clic en **Vercel**:

1. Inicia sesión en [Vercel](https://vercel.com/) con tu cuenta de GitHub.
2. En el panel principal, haz clic en **"Add New..."** > **"Project"**.
3. Selecciona tu repositorio recién subido: `electrosucre-cea-azari` y presiona **"Import"**.
4. En la pantalla de configuración:
   - **Framework Preset**: Detectará automáticamente `Next.js`.
   - **Root Directory**: `./` (la raíz del proyecto).
   - **Build Command**: `next build` (predeterminado).
   - **Output Directory**: `.next` (predeterminado).
   - *No se requieren variables de entorno obligatorias para la versión inicial con datos semilla.*
5. Haz clic en **"Deploy"**.
6. En aproximadamente 60 segundos, Vercel generará tu URL pública de producción (ej: `https://electrosucre-cea-azari.vercel.app/`).

---

## 🏛️ Créditos e Institución
* **Institución Técnica**: Centro de Educación Alternativa "Azari" (CEA AZARI) — Especialidad en Electricidad Industrial.
* **Ubicación**: Barrio Azari, Sucre, Departamento de Chuquisaca, Estado Plurinacional de Bolivia.
* **Normativa de Referencia**: Norma Boliviana **NB 777** (Diseño y Construcción de Instalaciones Eléctricas en Baja Tensión).

