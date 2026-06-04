# Respuestas — Examen Tipo Test — Módulo 2: Node.js

---

## SECCIÓN 1: BÁSICAS (1–70)

| Nº | Resp | Pregunta (resumen) |
|----|------|--------------------|
| 1 | **B** | ¿Qué es Node.js? → Entorno de ejecución JS del lado del servidor (V8) |
| 2 | **B** | ¿Diferencia Node.js vs navegador? → Node: FileSystem/red, sin DOM; Browser: DOM, sin FileSystem |
| 3 | **B** | ¿Qué es Express.js? → Framework minimalista para servidores HTTP y APIs |
| 4 | **B** | ¿Instalar Express? → `npm install express` |
| 5 | **A** | ¿Qué hace `app.listen(3000)`? → Inicia servidor HTTP en puerto 3000 |
| 6 | **C** | ¿Código HTTP respuesta exitosa? → 200 |
| 7 | **B** | ¿Código HTTP recurso creado? → 201 |
| 8 | **B** | ¿Qué significa 404? → Recurso no encontrado |
| 9 | **C** | ¿Qué significa 500? → Error interno del servidor |
| 10 | **B** | ¿Qué es REST? → Estilo arquitectónico para servicios web basado en HTTP y recursos |
| 11 | **C** | ¿Método HTTP para obtener recursos? → GET |
| 12 | **B** | ¿Método HTTP para crear recursos? → POST |
| 13 | **D** | ¿Método HTTP para actualizar recurso completo? → PUT |
| 14 | **C** | ¿Método HTTP para eliminar? → DELETE |
| 15 | **B** | ¿Qué es un middleware? → Función con acceso a req, res, next |
| 16 | **B** | ¿Qué hace `next()`? → Pasa el control al siguiente middleware |
| 17 | **B** | ¿Qué hace `express.json()`? → Parsea el body con Content-Type JSON |
| 18 | **B** | ¿Cómo se definen rutas? → `app.get('/ruta', (req, res) => {})` |
| 19 | **C** | ¿Acceder al body POST? → `req.body` |
| 20 | **C** | ¿Acceder a parámetro de ruta dinámica? → `req.params.id` |
| 21 | **C** | ¿Acceder a query param `?q=hola`? → `req.query.q` |
| 22 | **B** | ¿Qué es CommonJS? → Sistema de módulos con `require()` y `module.exports` |
| 23 | **B** | ¿Importar módulo CommonJS? → `const module = require('module')` |
| 24 | **B** | ¿Exportar función CommonJS? → `module.exports = miFuncion` |
| 25 | **B** | ¿Qué es `package.json`? → Define nombre, versión, dependencias, scripts |
| 26 | **B** | ¿Para qué sirve `.env`? → Variables de entorno sensibles fuera del código |
| 27 | **B** | ¿Acceder a variable de entorno? → `process.env.VARIABLE` |
| 28 | **B** | ¿Para qué sirve `dotenv`? → Carga variables del archivo `.env` en `process.env` |
| 29 | **B** | ¿Qué es POO? → Paradigma que organiza código en clases y objetos |
| 30 | **B** | ¿Cómo definir una clase en JS? → `class MiClase {}` |
| 31 | **B** | ¿Qué es el constructor? → Método especial al instanciar con `new` |
| 32 | **B** | ¿Cómo heredar de una clase? → `class Hijo extends Padre {}` |
| 33 | **B** | ¿Qué hace `super()`? → Llama al constructor de la clase padre |
| 34 | **B** | ¿Qué es PostgreSQL? → SGBD relacional de código abierto |
| 35 | **A** | ¿Qué es SQL? → Structured Query Language para BD relacionales |
| 36 | **B** | ¿Qué hace `SELECT * FROM usuarios`? → Devuelve todas las columnas y filas |
| 37 | **B** | ¿Qué hace `WHERE`? → Filtra filas según una condición |
| 38 | **B** | ¿Qué es un ORM? → Mapea tablas a objetos, abstrae SQL |
| 39 | **B** | ¿Qué es Prisma? → ORM moderno para Node.js y TypeScript con type-safety |
| 40 | **B** | ¿Qué archivo define el schema en Prisma? → `schema.prisma` |
| 41 | **B** | ¿Qué es la autenticación? → Verificar la identidad (quién eres) |
| 42 | **B** | ¿Qué es la autorización? → Verificar qué acciones puede hacer el usuario |
| 43 | **B** | ¿Qué es JWT? → Estándar para tokens con info JSON firmada criptográficamente |
| 44 | **B** | ¿Tres partes de un JWT? → Header, Payload, Signature |
| 45 | **B** | ¿Qué hace `bcrypt`? → Hashea contraseñas con algoritmo seguro |
| 46 | **B** | ¿Dónde se guarda el JWT? → localStorage, sessionStorage o cookie HttpOnly |
| 47 | **B** | ¿Cómo se envía un JWT? → En header `Authorization: Bearer <token>` |
| 48 | **B** | ¿Qué es un router en Express? → Mini-servidor que agrupa rutas relacionadas |
| 49 | **B** | ¿Cómo montar un router? → `app.use('/api/usuarios', usuariosRouter)` |
| 50 | **B** | ¿Qué es el patrón MVC? → Model-View-Controller |
| 51 | **C** | ¿Responsabilidad del Controller? → Recibir petición, orquestar lógica, enviar respuesta |
| 52 | **B** | ¿Responsabilidad del Model? → Gestionar datos y acceso a BD |
| 53 | **B** | ¿Qué hace el módulo `fs`? → Lee, escribe, modifica, elimina archivos del sistema |
| 54 | **A** | ¿Versión async de leer archivo? → `fs.readFile()` o `fs.promises.readFile()` |
| 55 | **A** | ¿Qué es CORS? → Cross-Origin Resource Sharing: controla peticiones entre orígenes |
| 56 | **B** | ¿Por qué configurar CORS? → Para controlar qué dominios pueden hacer peticiones |
| 57 | **B** | ¿Cómo habilitar CORS en Express? → `app.use(require('cors')())` |
| 58 | **B** | ¿Qué es `nodemon`? → Reinicia el servidor al detectar cambios |
| 59 | **B** | ¿Qué hace `npm run start`? → Ejecuta el script `start` de `package.json` |
| 60 | **B** | ¿Qué es TypeScript en Node.js? → Superset de JS con tipado estático |
| 61 | **B** | ¿Qué hace `ts-node`? → Ejecuta TypeScript sin compilar primero |
| 62 | **B** | ¿Qué es `tsconfig.json`? → Configuración del compilador TypeScript |
| 63 | **B** | ¿Qué hace `INSERT INTO usuarios (...) VALUES (?)`? → Inserta nuevo registro |
| 64 | **C** | ¿Qué hace `UPDATE usuarios SET nombre = ? WHERE id = ?`? → Actualiza campo nombre |
| 65 | **B** | ¿Qué hace `DELETE FROM usuarios WHERE id = ?`? → Elimina registro con ese id |
| 66 | **B** | ¿Qué es una foreign key? → Columna que referencia PK de otra tabla |
| 67 | **B** | ¿Un usuario tiene múltiples posts? → Relación uno a muchos (1:N) |
| 68 | **B** | ¿Qué es `express-validator`? → Valida y sanitiza datos de entrada en Express |
| 69 | **B** | ¿Qué es el manejo de errores global? → Middleware de 4 parámetros `(err, req, res, next)` |
| 70 | **B** | ¿Qué es `morgan`? → Middleware de logging HTTP para Express |

---

## SECCIÓN 2: MEDIAS (71–150)

| Nº | Resp | Pregunta (resumen) |
|----|------|--------------------|
| 71 | **B** | ¿Qué hace el middleware de 4 parámetros? → Captura errores propagados con `next(err)` |
| 72 | **B** | ¿Diferencia `app.use` vs `app.get`? → `use` acepta todos métodos/partial match; `get` solo GET/exacta |
| 73 | **B** | ¿Qué hace `express.Router()`? → Crea router montable con sus propias rutas y middleware |
| 74 | **B** | ¿Cómo implementar paginación? → Con `?page=2&limit=10` y total en la respuesta |
| 75 | **B** | ¿Obtener usuario por ID en Prisma? → `prisma.usuario.findUnique({ where: { id: 1 } })` |
| 76 | **B** | ¿Crear registro en Prisma? → `prisma.usuario.create({ data: {...} })` |
| 77 | **B** | ¿Qué hace `findMany` con `include: { posts: true }`? → Devuelve usuarios con sus posts |
| 78 | **B** | ¿Flujo de autenticación con JWT? → Credenciales → verificar → generar JWT → enviar en cada petición |
| 79 | **B** | ¿Generar JWT? → `jwt.sign(payload, secret, { expiresIn: '1h' })` |
| 80 | **B** | ¿Verificar JWT? → `jwt.verify(token, secret)` |
| 81 | **B** | ¿Middleware de autenticación JWT? → Extrae token, verifica con `jwt.verify`, llama `next()` o 401 |
| 82 | **A** | ¿Diferencia `bcrypt.hash` vs `bcrypt.compare`? → `hash` cifra; `compare` compara texto con hash |
| 83 | **B** | ¿Qué es el "salt" en bcrypt? → Datos aleatorios para que el mismo password genere hashes diferentes |
| 84 | **A** | ¿Qué hace `prisma migrate dev`? → Sincroniza BD con schema y crea archivos de migración |
| 85 | **B** | ¿Qué hace `prisma generate`? → Genera el cliente TypeScript tipado de Prisma |
| 86 | **B** | ¿Qué es el patrón Repository? → Capa que abstrae el acceso a datos |
| 87 | **B** | ¿Qué hace `express.urlencoded`? → Parsea bodies de formularios HTML |
| 88 | **B** | ¿Diferencia PUT vs PATCH? → PUT reemplaza todo; PATCH actualiza solo campos enviados |
| 89 | **B** | ¿Qué son las migraciones? → Archivos versionados de cambios incrementales en el esquema |
| 90 | **B** | ¿Qué es un índice en SQL? → Estructura que acelera búsquedas en columnas consultadas frecuentemente |
| 91 | **B** | ¿Qué hace `JOIN`? → Combina filas de tablas basándose en columnas relacionadas |
| 92 | **B** | ¿Diferencia INNER JOIN vs LEFT JOIN? → INNER: solo coincidencias; LEFT: todas las filas de la izquierda |
| 93 | **B** | ¿Qué hace `GROUP BY`? → Agrupa filas con el mismo valor para funciones de agregación |
| 94 | **B** | ¿Qué tipo de testing usa TDD? → Escribir tests ANTES del código de producción |
| 95 | **B** | ¿Ciclo correcto de TDD? → Red → Green → Refactor |
| 96 | **B** | ¿Qué es un mock? → Objeto/función falsa que simula una dependencia real |
| 97 | **B** | ¿Qué es un spy? → Función que envuelve la original para registrar sus llamadas |
| 98 | **B** | ¿Qué hace `jest.fn()`? → Crea función mock que registra llamadas y permite definir comportamiento |
| 99 | **B** | ¿Diferencia test unitario vs integración? → Unitario: unidad aislada; Integración: interacción entre capas |
| 100 | **B** | ¿Qué hace `describe()`? → Agrupa tests relacionados bajo un nombre descriptivo |
| 101 | **B** | ¿Qué es una transacción? → Secuencia de operaciones que se ejecuta como unidad atómica |
| 102 | **B** | ¿Propiedades ACID? → Atomicity, Consistency, Isolation, Durability |
| 103 | **B** | ¿Qué hace `prisma.$transaction()`? → Ejecuta múltiples operaciones como transacción atómica |
| 104 | **B** | ¿Qué es XSS? → Inyecta scripts en páginas para ejecutarse en navegador de otros usuarios |
| 105 | **B** | ¿Qué es SQL Injection? → Inyecta SQL malicioso en inputs para manipular consultas |
| 106 | **B** | ¿Cómo prevenir SQL Injection? → Consultas parametrizadas (prepared statements) u ORM |
| 107 | **B** | ¿Qué es `helmet`? → Configura headers HTTP de seguridad contra ataques comunes |
| 108 | **B** | ¿Qué hace `express-rate-limit`? → Limita peticiones por cliente en un período (anti-brute force) |
| 109 | **B** | ¿Diferencia sesión vs JWT? → Sesión: stateful (servidor guarda estado); JWT: stateless |
| 110 | **B** | ¿Qué es un refresh token? → Token de larga vida para obtener nuevo access token |
| 111 | **B** | ¿Qué define la relación en el schema de Prisma? → Un Usuario puede tener múltiples Posts (1:N) |
| 112 | **B** | ¿`ORDER BY createdAt DESC`? → Ordena de más reciente a más antiguo |
| 113 | **B** | ¿`async/await` en controladores? → Maneja operaciones asíncronas con sintaxis síncrona |
| 114 | **A** | ¿Por qué try/catch en handlers async? → Express 4 no maneja automáticamente errores async |
| 115 | **B** | ¿Qué hace `next(error)`? → Salta al middleware de manejo de errores (4 parámetros) |
| 116 | **B** | ¿Qué es `swagger`? → Especificación y herramienta para documentar APIs REST |
| 117 | **B** | ¿Qué es `pm2`? → Gestor de procesos Node.js para producción |
| 118 | **B** | ¿Qué es Docker? → Plataforma de contenedores para empaquetar la app con sus dependencias |
| 119 | **B** | ¿Qué contiene un Dockerfile? → Instrucciones para construir la imagen Docker |
| 120 | **B** | ¿Qué hace `docker-compose.yml`? → Define y orquesta múltiples servicios (app + BD) |
| 121 | **B** | ¿Qué significa Node.js "event-driven"? → Opera mediante Event Loop gestionando I/O no bloqueante |
| 122 | **B** | ¿Cuándo usar `stream`? → Para procesar datos grandes de forma incremental |
| 123 | **B** | ¿Qué es `joi`/`zod`? → Librerías de validación y parseado de schemas |
| 124 | **B** | ¿Ventaja de Zod sobre express-validator? → Infiere tipos TypeScript automáticamente del schema |
| 125 | **B** | ¿Qué es WebSocket? → Protocolo bidireccional persistente para tiempo real |
| 126 | **B** | ¿Qué hace `req.headers.authorization`? → Accede al header Authorization del cliente |
| 127 | **B** | ¿Práctica correcta para contraseñas? → Hashear con bcrypt, nunca texto plano |
| 128 | **B** | ¿`app.set('trust proxy', 1)`? → Confiar en el primer proxy para obtener IP real del cliente |
| 129 | **B** | ¿Qué es un "seed"? → Scripts para popular la BD con datos iniciales o de prueba |
| 130 | **B** | ¿Qué son los "health checks"? → Endpoints que reportan el estado de la API y sus dependencias |
| 131 | **B** | ¿Qué es `supertest`? → Librería para hacer peticiones HTTP a Express en tests |
| 132 | **B** | ¿Qué hace `LIMIT`? → Limita el número de filas devueltas |
| 133 | **B** | ¿Qué hace `prisma.usuario.count()`? → Devuelve el número total de registros |
| 134 | **B** | ¿URL para posts de un usuario? → `/usuarios/1/posts` |
| 135 | **B** | ¿Principio de mínimo privilegio? → Dar solo los permisos estrictamente necesarios |
| 136 | **B** | ¿Para qué sirve `compression`? → Comprime respuestas HTTP con gzip/brotli |
| 137 | **B** | ¿Qué es `multer`? → Middleware para gestionar subida de archivos |
| 138 | **B** | ¿Diferencia `findOne` vs `findUnique` en Prisma? → `findUnique` requiere campo único; `findFirst` acepta cualquier condición |
| 139 | **A** | ¿Cuándo usar `upsert`? → Cuando se quiere actualizar si existe o crear si no |
| 140 | **B** | ¿Qué es n8n? → Plataforma de automatización low-code con webhooks y conectores |
| 141 | **B** | ¿Qué es un webhook? → URL que recibe peticiones HTTP cuando ocurre un evento externo |
| 142 | **B** | ¿Qué hace `express.static('public')`? → Sirve archivos estáticos desde la carpeta `public` |
| 143 | **B** | ¿Qué es la Service Layer? → Capa con lógica de negocio separada de controllers y repositorios |
| 144 | **B** | ¿Qué hace `res.status(201).json(obj)`? → Envía respuesta HTTP 201 con objeto como JSON |
| 145 | **B** | ¿Qué es una "race condition"? → Dos operaciones concurrentes interfieren produciendo resultados inesperados |
| 146 | **B** | ¿`prisma.usuario.update({ where, data })`? → Actualiza los campos del usuario; error si no existe |
| 147 | **B** | ¿Cuándo usar 204 No Content? → Operación exitosa sin cuerpo de respuesta (ej: DELETE) |
| 148 | **B** | ¿Qué es `express-async-errors`? → Parchea Express para capturar automáticamente errores async |
| 149 | **B** | ¿`JSON.parse(process.env.VAR)` cuándo falla? → Si la variable no está definida o no es JSON válido |
| 150 | **A** | ¿Principio DRY? → Don't Repeat Yourself: evitar duplicación de lógica |

---

## SECCIÓN 3: DIFÍCILES (151–200)

| Nº | Resp | Pregunta (resumen) |
|----|------|--------------------|
| 151 | **B** | ¿Problema del código? → `req.params.id` es string, Prisma espera número + falta try/catch |
| 152 | **B** | ¿Problema de seguridad? → SQL Injection por concatenación directa del input |
| 153 | **B** | ¿Solución SQL Injection? → `db.query('...WHERE nombre = $1', [nombre])` |
| 154 | **B** | ¿Sin expiración en JWT? → Tokens comprometidos permanecen válidos indefinidamente |
| 155 | **B** | ¿Problema de JWT en localStorage? → Vulnerable a XSS: scripts maliciosos pueden robarlo |
| 156 | **B** | ¿Ventaja de cookie HttpOnly? → JavaScript no puede leerla, protección contra XSS |
| 157 | **A** | ¿Qué es un timing attack? → Medir tiempo de respuesta para determinar si password es parcialmente correcto |
| 158 | **B** | ¿Por qué bcrypt.compare es resistente? → Usa comparación de tiempo constante |
| 159 | **B** | ¿Diferencia `delete` vs `deleteMany`? → `delete`: registro único por campo único; `deleteMany`: múltiples por condición |
| 160 | **B** | ¿Problema de no cerrar conexiones? → Agotamiento del pool de conexiones |
| 161 | **B** | ¿Qué es el N+1 problem? → 1 query para N registros + N queries adicionales para datos relacionados |
| 162 | **B** | ¿Solución al N+1? → Usar `include` o `select` en la consulta para obtener datos relacionados en una query |
| 163 | **B** | ¿Qué hace el código wrapper? → Envuelve handlers async y pasa errores al middleware de errores |
| 164 | **B** | ¿Qué es idempotencia? → Misma operación múltiples veces = mismo resultado; GET, PUT, DELETE son idempotentes |
| 165 | **B** | ¿Problema del schema Prisma? → Falta clave foránea explícita `usuarioId Int` + `@relation` |
| 166 | **B** | ¿Qué son índices compuestos? → Índices sobre múltiples columnas para consultas por combinación |
| 167 | **B** | ¿Qué hace `EXPLAIN ANALYZE`? → Muestra el plan de ejecución real de una query para optimizarla |
| 168 | **B** | ¿Qué es un deadlock? → Dos transacciones bloqueadas mutuamente esperando recursos |
| 169 | **B** | ¿Qué es la normalización? → Proceso para eliminar redundancia en bases de datos relacionales |
| 170 | **B** | ¿Cuándo desnormalizar? → Cuando el rendimiento de lectura es crítico y se aceptan JOINs costosos |
| 171 | **A** | ¿Qué devuelve `findMany` con `take:10, skip:20`? → 10 registros omitiendo los primeros 20 (página 3) |
| 172 | **B** | ¿Qué es el Circuit Breaker? → Detecta fallos en servicios externos y evita llamadas hasta recuperación |
| 173 | **B** | ¿Qué es `pg_dump`? → Herramienta para hacer backups de PostgreSQL |
| 174 | **B** | ¿Diferencia env dev vs prod? → Prod: credenciales reales, URLs reales; Dev: credenciales locales/fake |
| 175 | **B** | ¿Qué es "graceful shutdown"? → Cerrar ordenadamente: parar peticiones nuevas, completar en curso, cerrar BD |
| 176 | **B** | ¿Qué hace el código `process.on('SIGTERM',...)`? → Implementa graceful shutdown al recibir SIGTERM |
| 177 | **B** | ¿Qué son environment-specific configs? → Configuraciones por entorno gestionadas con variables de entorno |
| 178 | **B** | ¿Qué es HSTS? → Header que fuerza comunicación HTTPS incluso si el usuario escribe HTTP |
| 179 | **B** | ¿Qué hace el test descrito? → Test de integración que verifica respuesta 400 con email inválido |
| 180 | **B** | ¿Qué es una "migration rollback"? → Revertir una migración aplicada, deshaciendo cambios en el esquema |
| 181 | **B** | ¿Problema del código de login? → Comparación en texto plano, sin try/catch, JWT sin expiración |
| 182 | **B** | ¿Qué es RBAC? → Permisos asignados a roles; usuarios tienen roles |
| 183 | **B** | ¿Qué devuelve la query con LEFT JOIN? → Todos los usuarios incluyendo los sin posts (num_posts = 0) |
| 184 | **B** | ¿Qué es Dependency Injection? → Pasar dependencias como parámetros para facilitar reemplazarlas con mocks |
| 185 | **B** | ¿Qué es el decorador del código? → Decorador de método que añade logging automático |
| 186 | **A** | ¿Qué es Header Injection? → Modifica headers de respuesta para redirigir; se previene sanitizando valores |
| 187 | **B** | ¿Por qué no usar `console.log` en producción? → Sin niveles, sin formato estructurado, dificulta monitorización |
| 188 | **B** | ¿Qué es un connection pool? → Conjunto de conexiones reutilizables a la BD |
| 189 | **B** | ¿Qué hace `SELECT FOR UPDATE`? → Bloquea registros hasta que termina la transacción |
| 190 | **B** | ¿Diferencia optimistic vs pessimistic locking? → Optimistic: asume sin conflictos, verifica al actualizar; Pessimistic: bloquea al leer |
| 191 | **B** | ¿Qué es el thundering herd problem? → Múltiples clientes simultáneos sobrecargan el servidor cuando expira la caché |
| 192 | **B** | ¿Qué hace `prisma.usuario.upsert`? → Actualiza si existe; crea si no existe |
| 193 | **B** | ¿Diferencia `throw` vs `next(error)` en Express? → En handlers async hay que usar `next(error)` para que llegue al middleware de errores en Express 4 |
| 194 | **B** | ¿Qué es SOLID y cuál aplica a controllers? → Single Responsibility: un controller solo orquesta, la lógica va al servicio |
| 195 | **B** | ¿Problema del middleware de Cache-Control? → Cachea TODAS las respuestas incluyendo datos privados |
| 196 | **B** | ¿Cuándo usar Redis? → Caché, sesiones, rate limiting, colas de tareas |
| 197 | **B** | ¿Problema del seed? → El segundo `create` falla con email duplicado; usar `upsert` o `deleteMany` antes |
| 198 | **B** | ¿Qué es un prepared statement? → Query precompilada con parámetros placeholder seguros; Prisma los usa internamente |
| 199 | **B** | ¿Qué hace el middleware del código? → Autenticación por API Key para todas las rutas `/api` |
| 200 | **B** | ¿Diferencia monolito vs microservicios? → Monolito: simple, escala como un todo; Microservicios: independientes, mayor complejidad |
