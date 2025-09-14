# Pasteleria_Mr_Pastel
# 1-Estructura del proyecto

pasteleria-Mr-Pastel/

├── index.html

├── css/

│   ├── styles.css

│   ├── admin.css

│   └── responsive.css

├── js/

│   ├── main.js

│   ├── validations.js

│   ├── cart.js

│   ├── products.js

│   └── regions.js

├── images/

│   ├── logo/

│   ├── products/

│   └── banners/

├── pages/

│   ├── tienda/

│   │   ├── registro.html

│   │   ├── login.html

│   │   ├── nosotros.html

│   │   ├── blogs.html

│   │   ├── blog-detalle-1.html

│   │   ├── blog-detalle-2.html

│   │   ├── contacto.html

│   │   ├── productos.html

│   │   └── producto-detalle.html

│   └── admin/

│       ├── home-admin.html

│       ├── usuarios.html

│       ├── nuevo-usuario.html

│       ├── productos-admin.html

│       └── nuevo-producto.html

└── README.md

# 2-Inventario de Archivos a Crear

**Archivos HTML (Total: 15 archivos) Sección Tienda (9 archivos):**
1. index.html - Página principal
2. pages/tienda/registro.html - Registro de usuarios
3. pages/tienda/login.html - Inicio de sesión
4. pages/tienda/nosotros.html - Información de la empresa
5. pages/tienda/blogs.html - Lista de blogs/noticias
6. pages/tienda/blog-detalle-1.html - Detalle blog 1
7. pages/tienda/blog-detalle-2.html - Detalle blog 2
8. pages/tienda/contacto.html - Formulario de contacto
9. pages/tienda/productos.html - Lista de productos
10. pages/tienda/producto-detalle.html - Detalle de producto
Sección Administrador (5 archivos): 
11. pages/admin/home-admin.html - Dashboard administrativo 
12. pages/admin/usuarios.html - Lista de usuarios 
13. pages/admin/nuevo-usuario.html - Crear/editar usuario 
14. pages/admin/productos-admin.html - Lista de productos admin 
15. pages/admin/nuevo-producto.html - Crear/editar producto

**Archivos CSS (Total: 3 archivos)**
1. css/styles.css - Estilos principales de la tienda
2. css/admin.css - Estilos específicos del panel administrativo
3. css/responsive.css - Estilos responsive para móviles/tablets

**Archivos JavaScript (Total: 5 archivos)**
1. js/main.js - Funciones principales y navegación
2. js/validations.js - Validaciones de formularios
3. js/cart.js - Funcionalidad del carrito de compras
4. js/products.js - Gestión y listado de productos
5. js/regions.js - Datos de regiones y comunas de Chile

# 3-Descripción de contenido archivos HTML

**SECCIÓN TIENDA**

**1. index.html - Página Principal (HOME)**

**Elementos requeridos:**
- Header con navegación: 
- Logo de Pastelería 1000 Sabores
- Menú de navegación: Home | Productos | Nosotros | Blogs | Contacto
- Icono de carrito de compras con contador
- Enlace a login/registro

**Sección principal (Hero):** 
- Banner con imagen de la pastelería
- Mensaje de bienvenida celebrando 50 años
- Texto sobre el récord Guinness 1995
- Botón CTA "Ver Productos"
- Sección de productos destacados: 
- Grid de 6 productos principales con imagen, nombre y precio
- Botón "Añadir al carrito" en cada producto

**Footer:** 
- Información de contacto
- Links de navegación
- Redes sociales
- Copyright y año

**3. pages/tienda/registro.html - Registro de Usuarios**

**Formulario con campos** (según validaciones JS especificadas):
- RUN: input text, requerido, validación RUT chileno (7-9 caracteres)
- Nombre: input text, requerido, máximo 50 caracteres
- Apellidos: input text, requerido, máximo 100 caracteres
- Correo: input email, requerido, máximo 100 caracteres, solo @duoc.cl, @profesor.duoc.cl, @gmail.com
- Fecha de Nacimiento: input date, opcional (para descuento +50 años)
- Región: select dinámico desde JS
- Comuna: select que cambia según región seleccionada
- Dirección: textarea, requerido, máximo 300 caracteres
- Contraseña: input password, requerido, entre 4-10 caracteres
- Confirmar Contraseña: input password, validación de coincidencia
- Código promocional: input text, opcional (para "FELICES50")
- Botones: Registrarse, Limpiar formulario
- Link a página de login

**4. pages/tienda/login.html - Inicio de Sesión**

**Elementos:**
- Logo de la empresa centrado
- Formulario de login: 
- Correo: input email, requerido, máximo 100 caracteres, validación dominios permitidos
- Contraseña: input password, requerido, entre 4-10 caracteres
- Checkbox "Recordarme"
- Botón "Iniciar Sesión"
- Link "¿Olvidaste tu contraseña?"
- Link "¿No tienes cuenta? Regístrate"
- Mensajes de error personalizados

**5. pages/tienda/nosotros.html - Información de la Empresa**

**Contenido:**
- Historia de la pastelería: 
50 años de trayectoria
Participación en récord Guinness 1995 (torta más grande del mundo)
Tradición familiar en repostería chilena
- Misión: Texto completo del documento
- Visión: Texto completo del documento
- Valores y compromiso con la comunidad

**Sección "Nuestro Equipo":** 
- Información de los 3 desarrolladores del proyecto
- Foto y descripción de cada integrante
- Roles en el desarrollo
- Galería de imágenes históricas

**6. pages/tienda/blogs.html - Lista de Blogs/Noticias**

**Contenido:**
- Header de sección: "Noticias y Consejos de Repostería"
- Grid de artículos (mínimo 4 artículos): 
- Imagen destacada de cada artículo
- Título del artículo
- Descripción corta (máximo 150 caracteres)
. Fecha de publicación
- Autor (estudiantes de gastronomía Duoc)
- Botón "Leer más" que lleva al detalle
- Categorías: Recetas, Consejos, Historia, Curiosidades
- Barra lateral con artículos recientes

**7. pages/tienda/blog-detalle-1.html - Primer Artículo de Blog**

**Contenido sugerido:** "Secretos de la Repostería Tradicional Chilena"
- Imagen principal del artículo
- Título completo
- Autor y fecha
- Contenido extenso (mínimo 500 palabras): 
- Historia de la repostería en Chile
- Ingredientes tradicionales
- Técnicas ancestrales
- Recetas familiares

**Sidebar:** 
- Artículos relacionados
- Ingredientes mencionados disponibles en tienda
- Botones para compartir en redes sociales
- Sección de comentarios (estructura HTML)

**8. pages/tienda/blog-detalle-2.html - Segundo Artículo de Blog**

**Contenido sugerido:** "Cómo Elegir la Torta Perfecta para tu Celebración"
- Imagen principal del artículo
- Título completo
- Autor y fecha
- Contenido extenso (mínimo 500 palabras): 
- Guía para diferentes ocasiones
- Tamaños y formas (cuadrada vs circular)
- Opciones personalizables
- Consejos de conservación
- Sidebar: Links a productos mencionados
- Call-to-action hacia catálogo de productos

**9. pages/tienda/contacto.html - Formulario de Contacto**

**Formulario con validaciones JS:**
- Nombre: input text, requerido, máximo 100 caracteres
- Correo: input email, máximo 100 caracteres, validación dominios permitidos
- Teléfono: input tel, opcional
- Asunto: select con opciones predefinidas
- Comentario: textarea, requerido, máximo 500 caracteres
- Información de contacto: 
- Dirección física de la pastelería
- Teléfono y email
- Horarios de atención
- Mapa embebido (iframe de Google Maps)
- Botones: Enviar, Limpiar formulario

**10. pages/tienda/productos.html - Catálogo de Productos**

**Elementos:**
- Filtros laterales: 
- Por categoría (8 categorías del documento)
- Por rango de precio
- Productos sin azúcar
- Productos sin gluten
- Productos veganos
- Grid de productos (16 productos del inventario): 
- Imagen del producto
- Nombre del producto
- Precio en CLP

**Categoría:**
- Botón "Ver detalles"
- Botón "Añadir al carrito"
- Widget de carrito flotante: 
- Contador de productos
- Total acumulado
- Acceso rápido al carrito
- Paginación para más de 12 productos por página

**11. pages/tienda/producto-detalle.html - Detalle de Producto**

**Contenido** (ejemplo: Torta Especial de Cumpleaños TE001):
- Galería de imágenes del producto (principal + thumbnails)

**Información del producto:** 
- Nombre: "Torta Especial de Cumpleaños"
- Código: TE001
- Precio: $55.000 CLP
- Categoría: Tortas Especiales
- Descripción completa del documento

**Opciones de personalización:**
- Tamaño (individual, familiar, grande)
- Mensaje personalizado (textarea)
- Decoraciones especiales
- Selector de cantidad
- Botón "Añadir al carrito" prominente
- Productos relacionados
- Sistema de valoración (estrellas)
- Información nutricional


#SECCIÓN ADMINISTRADOR

**11. pages/admin/home-admin.html - Dashboard Administrativo**

**Layout:**
- Sidebar izquierdo con menú: 
- Dashboard (activo)
- Gestión de Usuarios
- Gestión de Productos
- Órdenes (para futuras entregas)
- Reportes (para futuras entregas)
- Configuración
- Cerrar Sesión

**Área de contenido principal:** 

**Tarjetas de resumen:** 
- Total usuarios registrados
- Total productos activos
- Ventas del mes
- Stock bajo crítico
- Gráficos básicos (estructura HTML para futura implementación)
- Actividad reciente
- Productos con stock crítico

**12. pages/admin/usuarios.html - Lista de Usuarios**

**Contenido:**

**Header de sección:** 
- Título "Gestión de Usuarios"
- Botón "Nuevo Usuario"
- Buscador por nombre/email

**Tabla de usuarios:** 
- Columnas: RUN, Nombre, Apellidos, Correo, Tipo Usuario, Fecha Registro, Acciones
- Datos de ejemplo (5-10 usuarios)

**Acciones por fila:** 
- Ver detalles
- Editar
- Eliminar
- Cambiar estado (activo/inactivo)

**Filtros:** 
- Por tipo de usuario (Cliente, Vendedor, Administrador)
- Por estado
- Por fecha de registro
- Paginación

**13. pages/admin/nuevo-usuario.html - Crear/Editar Usuario**

**Formulario administrativo completo:**

**Datos personales:** 
- RUN (validación completa)
- Nombre (máximo 50 caracteres)
- Apellidos (máximo 100 caracteres)
- Correo (validación dominios)
- Fecha de Nacimiento

**Ubicación:** 
- Región (select dinámico)
- Comuna (select dependiente)
- Dirección (máximo 300 caracteres)

**Acceso al sistema:** 
- Tipo de Usuario: select (Administrador, Cliente, Vendedor)
- Contraseña
- Confirmar contraseña

**Estados y permisos según rol:** 
- Administrador: acceso total
- Vendedor: solo productos y órdenes
- Cliente: solo tienda
- Botones: Guardar, Cancelar, Limpiar

**14. pages/admin/productos-admin.html - Lista de Productos**

**Contenido:**
- Header de sección: 
- Título "Gestión de Productos"
- Botón "Nuevo Producto"
- Buscador por nombre/código

**Tabla de productos:** 
- Columnas: Código, Imagen, Nombre, Categoría, Precio, Stock, Stock Crítico, Estado, Acciones
- Todos los 16 productos del inventario

**Indicadores visuales:** 
- Stock crítico en rojo
- Productos agotados

**Acciones:** 
- Ver detalles
- Editar
- Eliminar
- Duplicar
- Cambiar estado

**Filtros:** 
- Por categoría
- Por estado (activo/inactivo)
- Por stock (disponible/agotado/crítico)

**15. pages/admin/nuevo-producto.html - Crear/Editar Producto**

**Formulario completo con todas las validaciones JS:**

**Información básica:** 
- Código producto: input text, requerido, mínimo 3 caracteres
- Nombre: input text, requerido, máximo 100 caracteres
- Descripción: textarea, opcional, máximo 500 caracteres

**Pricing e inventario:** 
- Precio: input number, requerido, mínimo 0, acepta decimales
- Stock: input number, requerido, mínimo 0, solo enteros
- Stock Crítico: input number, opcional, mínimo 0, solo enteros

**Clasificación:** 
- Categorías: select con las 8 categorías del documento

**Media:** 
- Imagen: input file, opcional, con preview

**Estados del producto:**
- Activo/Inactivo
- Destacado
Nuevo
Botones: Guardar, Cancelar, Vista previa

# 4-Plan de desarrollo por fases y división de tareas por integrante

**FASE 1: DESARROLLO HTML (Semana 1 - Días 1-3)**

**Objetivo:** Completar toda la estructura HTML antes de pasar a estilos
Día 1: Estructura Base

**Integrante 1** 

**Páginas Principales:**
- index.html (página principal con navegación, banner, productos destacados, footer)
- pages/tienda/nosotros.html (historia de la pastelería, misión, visión)
- pages/tienda/blogs.html (lista de noticias/blogs sobre repostería)

**Integrante 2**

**Formularios y Autenticación:**
- pages/tienda/registro.html (formulario completo de registro)
- pages/tienda/login.html (formulario de inicio de sesión)
- pages/tienda/contacto.html (formulario de contacto)

**Integrante 3** 

**Productos y Detalles:**
- pages/tienda/productos.html (catálogo de productos con filtros)
- pages/tienda/producto-detalle.html (detalle individual con carrito)
- pages/tienda/blog-detalle-1.html (primer artículo de blog)

**Día 2: Completar Tienda y Comenzar Admin**

**Integrante 1:**
- pages/tienda/blog-detalle-2.html (segundo artículo de blog)
- pages/admin/home-admin.html (dashboard con menú lateral)

**Integrante 2:**
- pages/admin/usuarios.html (tabla de usuarios con acciones)
- pages/admin/nuevo-usuario.html (formulario CRUD de usuario)

**Integrante 3:**
- pages/admin/productos-admin.html (tabla de productos con acciones)
- pages/admin/nuevo-producto.html (formulario CRUD de producto)

**Día 3: Revisión y Validación HTML**

**Todos los integrantes:**
- Revisar HTML semántico (header, nav, main, section, article, footer)
- Validar formularios con atributos HTML5
- Asegurar navegación completa entre páginas
- Verificar que todas las imágenes tengan atributos alt
- Commit grupal: "Estructura HTML completa"

**FASE 2: DESARROLLO CSS (Semana 1 - Días 4-5)**

**Objetivo: Aplicar todos los estilos siguiendo la guía de diseño**

**Día 4: Estilos Base y Tienda**

**Integrante 1 - CSS Principal:**
- css/styles.css: 
- Variables CSS (colores: #FFF5E1, #FFC0CB, #8B4513, #5D4037, #B0BEC5)
- Tipografía (Lato, Pacifico de Google Fonts)
- Estilos generales (body, headers, botones, formularios)
- Navegación y footer

**Integrante 2 - CSS Tienda Específico:**
- css/styles.css (continuación): 
- Estilos de página principal (banner, productos destacados)
- Estilos de formularios (registro, login, contacto)
- Estilos de páginas de contenido (nosotros, blogs)

**Integrante 3 - CSS Productos:**
- css/styles.css (continuación): 
- Grid de productos con hover effects
- Página de detalle de producto
- Estilos del carrito de compras (diseño del mockup)

**Día 5: Admin y Responsive**

**Integrante 1:**
- css/admin.css: 
- Layout con menú lateral
- Estilos de dashboard
- Tablas de gestión

**Integrante 2:**
- css/admin.css (continuación): 
- Formularios administrativos
- Botones de acciones (editar, eliminar)

**Integrante 3:**
- css/responsive.css: 
- Media queries para tablets (768px)
- Media queries para móviles (480px)
- Menu hamburguesa para móvil

**FASE 3: DESARROLLO JAVASCRIPT (Semana 1 - Días 6-7)**

**Objetivo: Implementar toda la funcionalidad e interactividad**

**Día 6: Funcionalidad Base**

**Integrante 1 - Validaciones:**

**js/validations.js:** 
- Validación de RUT chileno
- Validación de correos (@duoc.cl, @profesor.duoc.cl, @gmail.com)
- Validación de formulario de registro
- Validación de formulario de login
- Validación de formulario de contacto
- Validación de formularios administrativos

**Integrante 2 - Productos y Carrito:**

**js/products.js:** 
- Array de productos (16 productos del documento)
- Función mostrar productos en grid
- Función filtrar por categorías
- Función mostrar detalle de producto

**js/cart.js:** 
- Añadir productos al carrito
- Modificar cantidades
- Eliminar productos
- Guardar en localStorage
- Mostrar total

**Integrante 3 - Utilidades:**

**js/regions.js:** 
- Array de regiones y comunas de Chile
- Función cargar regiones en select
- Función cargar comunas según región

**js/main.js:** 
- Funciones de navegación
- Inicialización de la aplicación
- Eventos del DOM

**Día 7: Integración y Testing**

**Todos los integrantes:**
- Integrar todos los archivos JS
- Probar todas las validaciones
- Verificar funcionamiento del carrito
- Probar navegación completa
- Ajustar responsive en diferentes dispositivos
- Testing de formularios
- Documentar funcionalidades en README.md
- Commit final: "Proyecto completo - Fase 1"

#Especificaciones Técnicas por Categoría

**HTML Requerido:**
- HTML5 semántico con elementos: <header>, <nav>, <main>, <section>, <article>, <footer>
- Formularios con validación HTML5 (required, maxlength, pattern)
- Navegación entre páginas con hipervínculos
- Imágenes con atributos alt descriptivos
- Estructura de tablas para listados administrativos

**CSS Requerido:**
- Hoja de estilos externa
- Variables CSS para colores y tipografías
- Flexbox/Grid para layouts responsive
- Hover effects en botones e imágenes
- Media queries para responsive design

**JavaScript Requerido:**
- Validación en tiempo real de formularios
- Manipulación del DOM
- LocalStorage para carrito de compras
- Arrays para productos y regiones
- Eventos (click, submit, change)
- Funciones de filtrado y búsqueda

**Entregables Finales:**
- Enlace GitHub público con commits organizados
- Proyecto comprimido con estructura de carpetas
- Documento ERS (Especificación de Requisitos del Software) – Este sería el informe
- README.md con instrucciones de uso

**Distribución de Responsabilidades:**
- Integrante 1: Estructura base, estilos principales, validaciones
- Integrante 2: Formularios, admin, productos y carrito
- Integrante 3: Detalles, responsive, utilidades y regiones

Este plan asegura que todos trabajen de manera coordinada, completando primero HTML, luego CSS y finalmente JavaScript, con entregas incrementales y revisiones grupales.
