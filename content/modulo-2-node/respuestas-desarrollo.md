# Respuestas — Examen de Desarrollo — Módulo 2: Node.js

---

## Sección 1 — Preguntas Fáciles

---

## Pregunta 1 — CommonJS vs ES Modules

**CommonJS (CJS)** — sistema original de Node.js:
- Usa `require()` y `module.exports`
- Se resuelve en tiempo de ejecución (dinámico)
- Síncrono
- Extensión `.js` o `.cjs`

**ES Modules (ESM)** — estándar moderno de JavaScript:
- Usa `import`/`export`
- Se resuelve en tiempo de análisis (estático) — permite tree-shaking
- Asíncrono
- Extensión `.mjs` o `.js` con `"type": "module"` en `package.json`

```js
// ─── CommonJS ───
// math.cjs
function suma(a, b) { return a + b; }
const PI = 3.14159;
module.exports = { suma, PI };          // múltiples exports
// o: module.exports = suma;           // export default equivalente

const { suma, PI } = require('./math'); // importar nombrados
const suma2 = require('./math');        // importar default

// ─── ES Modules ───
// math.mjs
export function suma(a, b) { return a + b; }
export const PI = 3.14159;
export default function multiply(a, b) { return a * b; }

import multiply, { suma, PI } from './math.mjs';
```

**¿Cuándo usar cada uno?**
- **CJS**: proyectos Node.js legacy, librerías que deben ser compatibles con `require()`
- **ESM**: proyectos nuevos, compatibilidad con frontend (mismo código), TypeScript moderno

---

## Pregunta 2 — Servidor Express básico

Express.js es un framework minimalista para Node.js que simplifica la creación de servidores HTTP y APIs.

```js
// server.js
const express = require('express');
const app = express();

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());

// GET / — mensaje de bienvenida
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API', version: '1.0.0' });
});

// GET /salud — health check
app.get('/salud', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// POST /eco — devuelve el body recibido
app.post('/eco', (req, res) => {
  res.json(req.body); // req.body contiene el JSON parseado gracias a express.json()
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```

**Conceptos clave:**
- `app.listen(puerto, callback)`: arranca el servidor en el puerto indicado
- `req` (request): objeto con información de la petición entrante: `req.body`, `req.params`, `req.query`, `req.headers`
- `res` (response): objeto para construir y enviar la respuesta: `res.json()`, `res.send()`, `res.status()`
- `res.json()` vs `res.send()`: `json()` serializa automáticamente a JSON y establece el header `Content-Type: application/json`. `send()` es más genérico y envía texto, buffers o HTML sin forzar ese header.

---

## Pregunta 3 — Middleware en Express

El middleware es una función con acceso a `req`, `res` y `next`. Se ejecuta en la cadena de procesamiento de cada petición antes de llegar al handler final. `next()` pasa el control al siguiente middleware; si no se llama, la petición queda bloqueada.

```js
const express = require('express');
const app = express();
app.use(express.json());

// 1. Middleware de logging global — se ejecuta en TODAS las rutas
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next(); // pasar al siguiente middleware/handler
});

// 2. Middleware condicional: verificar presencia de API key
const verificarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey) {
    return res.status(401).json({ error: 'API key requerida' });
    // No llamamos a next() → la cadena se corta aquí
  }
  next(); // key presente → continuar
};

// Aplicar solo a rutas que lo necesiten
app.get('/datos-privados', verificarApiKey, (req, res) => {
  res.json({ secreto: 'solo para autenticados' });
});

// Rutas públicas no requieren API key
app.get('/', (req, res) => res.json({ ok: true }));

// 3. Middleware de manejo de errores — SIEMPRE al final, con 4 parámetros
// Express lo distingue del middleware normal por la aridad (err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor'
  });
});

app.listen(3000);
```

**`app.use(fn)` vs ruta específica:**
- `app.use(fn)` aplica el middleware a TODAS las rutas y métodos HTTP
- `app.get('/ruta', fn, handler)` aplica el middleware solo a esa ruta concreta con ese método
- El middleware de errores necesita exactamente 4 parámetros `(err, req, res, next)` — Express lo detecta por el número de argumentos

---

## Pregunta 4 — REST: principios, verbos HTTP y status codes

**REST** (Representational State Transfer) es un estilo de arquitectura para APIs web:
- **Stateless**: cada petición es independiente; el servidor no guarda estado de sesión del cliente
- **Recursos**: todo es un recurso identificado por una URL (`/usuarios`, `/productos/42`)
- **Representaciones**: los recursos se transfieren en formatos estándar (JSON, XML)
- **Interfaz uniforme**: los mismos verbos HTTP se aplican consistentemente a todos los recursos

**Verbos HTTP:**

| Verbo | Semántica | Ejemplo |
|-------|-----------|---------|
| GET | Leer recursos (sin efectos secundarios, idempotente) | `GET /usuarios`, `GET /usuarios/1` |
| POST | Crear un recurso nuevo | `POST /usuarios` con body JSON |
| PUT | Reemplazar un recurso completo | `PUT /usuarios/1` con todos los campos |
| PATCH | Actualizar campos concretos de un recurso | `PATCH /usuarios/1` con solo los campos que cambian |
| DELETE | Eliminar un recurso | `DELETE /usuarios/1` |

**Códigos de estado HTTP:**

| Familia | Código | Significado | Cuándo usarlo |
|---------|--------|-------------|---------------|
| 2xx Éxito | 200 OK | Petición correcta con respuesta | GET o PUT exitosos |
| | 201 Created | Recurso creado | Respuesta a POST exitoso |
| | 204 No Content | Éxito sin cuerpo de respuesta | DELETE exitoso |
| 4xx Error cliente | 400 Bad Request | Petición malformada | Body inválido, JSON roto |
| | 401 Unauthorized | No autenticado | Token ausente o inválido |
| | 403 Forbidden | Autenticado pero sin permisos | Intentar acceder a recurso de otro usuario |
| | 404 Not Found | Recurso no existe | ID que no existe en la BD |
| | 409 Conflict | Conflicto de estado | Email ya registrado, versión desactualizada |
| | 422 Unprocessable Entity | Datos semánticamente inválidos | Campo requerido falta, formato incorrecto |
| 5xx Error servidor | 500 Internal Server Error | Error no controlado del servidor | Excepción inesperada en producción |

---

## Sección 2 — Preguntas Medias

---

## Pregunta 5 — API REST To-Do completa

```
src/
├── app.js
├── routes/tareas.routes.js
├── controllers/tareas.controller.js
├── services/tareas.service.js
└── middleware/errorHandler.js
```

```js
// routes/tareas.routes.js
const { Router } = require('express');
const ctrl = require('../controllers/tareas.controller');
const router = Router();

router.get('/', ctrl.listar);
router.get('/:id', ctrl.obtener);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;

// controllers/tareas.controller.js
const service = require('../services/tareas.service');

const listar = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const resultado = await service.listar(Number(page), Number(limit));
    res.json(resultado);
  } catch (err) { next(err); }
};

const obtener = async (req, res, next) => {
  try {
    const tarea = await service.obtenerPorId(Number(req.params.id));
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) { next(err); }
};

const crear = async (req, res, next) => {
  try {
    const { titulo, descripcion } = req.body;
    if (!titulo) return res.status(400).json({ error: 'El título es obligatorio' });
    const nueva = await service.crear({ titulo, descripcion });
    res.status(201).json(nueva);
  } catch (err) { next(err); }
};

const actualizar = async (req, res, next) => {
  try {
    const tarea = await service.actualizar(Number(req.params.id), req.body);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) { next(err); }
};

const eliminar = async (req, res, next) => {
  try {
    const eliminada = await service.eliminar(Number(req.params.id));
    if (!eliminada) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.status(204).send();
  } catch (err) { next(err); }
};

module.exports = { listar, obtener, crear, actualizar, eliminar };

// app.js
const express = require('express');
const tareasRouter = require('./routes/tareas.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use('/tareas', tareasRouter);
app.use(errorHandler);

module.exports = app;

// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
};
```

---

## Pregunta 6 — Autenticación completa con JWT

```js
// routes/auth.routes.js
const { Router } = require('express');
const { registro, login } = require('../controllers/auth.controller');
const router = Router();
router.post('/registro', registro);
router.post('/login', login);
module.exports = router;

// controllers/auth.controller.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const SALT_ROUNDS = 12;

const registro = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password)
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });

    const existe = await prisma.usuario.findUnique({ where: { email } });
    if (existe) return res.status(409).json({ error: 'Email ya registrado' });

    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const usuario = await prisma.usuario.create({
      data: { nombre, email, password: hash },
      select: { id: true, nombre: true, email: true } // no devolver el hash
    });

    res.status(201).json(usuario);
  } catch (err) { next(err); }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    // Comparación de tiempo constante (resistente a timing attacks)
    const passwordValido = usuario
      ? await bcrypt.compare(password, usuario.password)
      : false;

    // Mismo mensaje independientemente del error (no revelar si el email existe)
    if (!usuario || !passwordValido)
      return res.status(401).json({ error: 'Credenciales incorrectas' });

    const token = jwt.sign(
      { userId: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) { next(err); }
};

module.exports = { registro, login };

// middleware/auth.middleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) return res.status(401).json({ error: 'Token requerido' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = authenticateToken;

// Ruta protegida
const authenticateToken = require('../middleware/auth.middleware');
app.get('/perfil', authenticateToken, async (req, res, next) => {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: req.user.userId },
      select: { id: true, nombre: true, email: true }
    });
    res.json(usuario);
  } catch (err) { next(err); }
});
```

---

## Pregunta 7 — Patrón MVC completo

**Responsabilidades:**
- **Router**: define las rutas y conecta con el controller
- **Controller**: recibe req/res, valida input básico, llama al service, formatea la respuesta
- **Service**: lógica de negocio; no sabe nada de HTTP
- **Repository**: acceso a datos; no sabe nada de negocio ni HTTP

```js
// routes/usuarios.routes.js
router.post('/', usuariosController.crear);

// controllers/usuarios.controller.js
const crear = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;
    if (!nombre || !email || !password)
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    const usuario = await usuariosService.crear({ nombre, email, password });
    res.status(201).json(usuario);
  } catch (err) { next(err); }
};

// services/usuarios.service.js
const crear = async ({ nombre, email, password }) => {
  const existe = await usuariosRepo.findByEmail(email);
  if (existe) {
    const error = new Error('Email ya registrado');
    error.status = 409;
    throw error;
  }
  const hash = await bcrypt.hash(password, 12);
  return usuariosRepo.create({ nombre, email, password: hash });
};

// repositories/usuarios.repository.js
const findByEmail = (email) =>
  prisma.usuario.findUnique({ where: { email } });

const create = (data) =>
  prisma.usuario.create({
    data,
    select: { id: true, nombre: true, email: true }
  });
```

**Ventaja clave:** La lógica de negocio (service) puede testearse unitariamente sin HTTP. El repository puede reemplazarse con un mock en tests del service.

---

## Pregunta 8 — CORS configuración avanzada

CORS es una política de seguridad del navegador que bloquea peticiones a dominios diferentes al de la página actual. Existen dos tipos:

- **Petición simple**: GET/POST con headers estándar; el navegador añade el header `Origin` y verifica la respuesta
- **Petición preflight**: métodos no simples (PUT, DELETE, PATCH) o headers personalizados; el navegador envía primero una petición `OPTIONS` para verificar permisos

```js
const cors = require('cors');

const allowedOrigins = ['https://miapp.com', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir peticiones sin Origin (Postman, curl, SSR)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origen no permitido: ${origin}`));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true,       // habilitar envío de cookies
  maxAge: 86400,           // cachear respuesta preflight 24h
}));

// Responder explícitamente a preflight OPTIONS
app.options('*', cors());
```

---

## Pregunta 9 — Sistema de logging estructurado

```js
// logger.js con winston
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }), // incluye stack en errores
    winston.format.json()                    // output JSON para monitorización
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

module.exports = logger;

// middleware/requestLogger.js
const logger = require('../logger');

module.exports = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request', {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      // NO registrar: req.body (puede tener passwords), Authorization header
    });
  });
  next();
};

// middleware/errorHandler.js
const logger = require('../logger');
module.exports = (err, req, res, next) => {
  logger.error('Unhandled error', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    // sanitizar: no loguear passwords/tokens
  });
  res.status(err.status || 500).json({ error: err.message || 'Error interno' });
};
```

---

## Pregunta 10 — N+1 Problem

```js
// ❌ N+1 Problem: 1 query para posts + N queries para el autor de cada uno
const posts = await prisma.post.findMany(); // 1 query
for (const post of posts) {
  post.autor = await prisma.usuario.findUnique({ where: { id: post.autorId } }); // N queries
}

// ✅ Solución con include: 1 sola query con JOIN
const posts = await prisma.post.findMany({
  include: { autor: { select: { nombre: true } } } // Prisma hace el JOIN internamente
});

// ✅ Para casos muy específicos: SQL nativa
const resultado = await prisma.$queryRaw`
  SELECT p.id, p.titulo, u.nombre as autor_nombre, COUNT(c.id)::int as num_comentarios
  FROM "Post" p
  JOIN "Usuario" u ON u.id = p."autorId"
  LEFT JOIN "Comentario" c ON c."postId" = p.id
  WHERE p.publicado = true
  GROUP BY p.id, u.nombre
  ORDER BY p."createdAt" DESC
  LIMIT 20
`;
```

**¿Cuándo usar `$queryRaw`?**
- Cuando necesitas optimizaciones avanzadas de SQL que Prisma no genera
- Para usar funciones específicas de PostgreSQL (`jsonb_agg`, `window functions`, `COALESCE`, etc.)
- Cuando el ORM genera queries subóptimas medidas con `EXPLAIN ANALYZE`
- Para queries de reporting complejas con múltiples JOINs y agregaciones

---

## Pregunta 11 — RBAC (Role-Based Access Control)

```js
// middleware/rbac.middleware.js
const requireRole = (...roles) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'No autenticado' });
  if (!roles.includes(req.user.rol))
    return res.status(403).json({ error: 'No tienes permisos para esta acción' });
  next();
};

// middleware/ownership.middleware.js — autorización a nivel de recurso
const requireOwnership = (getResourceUserId) => async (req, res, next) => {
  try {
    const resourceUserId = await getResourceUserId(req);
    if (req.user.rol === 'ADMIN') return next(); // admins pueden todo
    if (resourceUserId !== req.user.userId)
      return res.status(403).json({ error: 'Solo puedes modificar tus propios recursos' });
    next();
  } catch (err) { next(err); }
};

// Uso en rutas
const auth = require('./middleware/auth.middleware');
const { requireRole } = require('./middleware/rbac.middleware');
const { requireOwnership } = require('./middleware/ownership.middleware');

// Solo admins
router.delete('/usuarios/:id', auth, requireRole('ADMIN'), usuarios.eliminar);

// Admin o el propio autor del post
router.put('/posts/:id', auth,
  requireOwnership(async (req) => {
    const post = await prisma.post.findUnique({ where: { id: Number(req.params.id) } });
    return post?.autorId;
  }),
  posts.actualizar
);

// Cualquier usuario autenticado
router.get('/posts', auth, posts.listar);
```

---

## Sección 3 — Preguntas Difíciles

---

## Pregunta 12 — Prisma Schema y operaciones CRUD

```prisma
// schema.prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id        Int       @id @default(autoincrement())
  nombre    String
  email     String    @unique
  password  String
  posts     Post[]
  createdAt DateTime  @default(now())
}

model Post {
  id          Int         @id @default(autoincrement())
  titulo      String
  contenido   String
  publicado   Boolean     @default(false)
  autorId     Int
  autor       Usuario     @relation(fields: [autorId], references: [id])
  comentarios Comentario[]
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  @@index([autorId])
}

model Comentario {
  id        Int      @id @default(autoincrement())
  texto     String
  postId    Int
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
}
```

```js
// CRUD de Posts con Prisma
const prisma = new PrismaClient();

// Obtener posts con autor y número de comentarios
async function obtenerPosts(page = 1, limit = 10) {
  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: { publicado: true },
      include: {
        autor: { select: { id: true, nombre: true } },
        _count: { select: { comentarios: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.post.count({ where: { publicado: true } })
  ]);
  return { posts, total, page, totalPages: Math.ceil(total / limit) };
}

// Crear post
async function crearPost(autorId, { titulo, contenido }) {
  return prisma.post.create({
    data: { titulo, contenido, autorId },
    include: { autor: { select: { nombre: true } } }
  });
}

// Actualizar post
async function actualizarPost(id, autorId, datos) {
  return prisma.post.update({
    where: { id, autorId }, // garantiza que solo el autor puede editar
    data: datos
  });
}

// Eliminar post (cascade elimina comentarios por onDelete: Cascade)
async function eliminarPost(id, autorId) {
  return prisma.post.delete({ where: { id, autorId } });
}
```

---

## Pregunta 13 — TDD con módulo de descuentos

```js
// descuentos.test.js — primero los tests (RED)
const { calcularDescuento } = require('./descuentos');

describe('calcularDescuento', () => {
  it('aplica 5% a clientes regulares', () => {
    expect(calcularDescuento(100, 'regular')).toBe(5);
  });

  it('aplica 15% a clientes premium', () => {
    expect(calcularDescuento(100, 'premium')).toBe(15);
  });

  it('aplica 25% a clientes vip', () => {
    expect(calcularDescuento(200, 'vip')).toBe(50);
  });

  it('lanza error con tipo de cliente desconocido', () => {
    expect(() => calcularDescuento(100, 'platino')).toThrow('Tipo de cliente no válido');
  });

  it('devuelve 0 si el precio es 0', () => {
    expect(calcularDescuento(0, 'vip')).toBe(0);
  });

  it('lanza error si el precio es negativo', () => {
    expect(() => calcularDescuento(-10, 'regular')).toThrow('El precio no puede ser negativo');
  });
});

// descuentos.js — código mínimo para pasar (GREEN)
const DESCUENTOS = {
  regular: 0.05,
  premium: 0.15,
  vip: 0.25,
};

function calcularDescuento(precio, tipoCliente) {
  if (precio < 0) throw new Error('El precio no puede ser negativo');
  const porcentaje = DESCUENTOS[tipoCliente];
  if (porcentaje === undefined) throw new Error('Tipo de cliente no válido');
  return precio * porcentaje;
}

module.exports = { calcularDescuento };
// Tests pasan → REFACTOR: ya está limpio, no hay duplicación
```

---

## Pregunta 14 — Auditoría de seguridad

**Vulnerabilidades identificadas:**

1. **Contraseñas en texto plano**: se comparan directamente sin hash
2. **Sin autenticación/autorización en `/admin/datos`**: cualquiera puede acceder
3. **Exposición de datos sensibles**: devuelve `usuarios` completo con contraseñas
4. **IDOR (Insecure Direct Object Reference)**: el `userId` viene del query param, fácilmente manipulable
5. **Sin respuesta con código de estado correcto**: `{ success: false }` devuelve 200 en lugar de 401
6. **Sin validación de entrada**: no verifica que `email`/`password` existan en el body

```js
// VERSIÓN CORREGIDA
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

// FIX 5: código de estado correcto
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: 'Email y password son obligatorios' });

  const user = await prisma.usuario.findUnique({ where: { email } });
  const valid = user ? await bcrypt.compare(password, user.password) : false; // FIX 1

  if (!valid)
    return res.status(401).json({ error: 'Credenciales incorrectas' }); // FIX 5

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token }); // FIX 3: no exponer isAdmin ni datos sensibles directamente
});

// FIX 3: no devolver passwords; FIX 2: requerir autenticación
app.get('/usuarios', authenticateToken, requireRole('admin'), async (req, res) => {
  const usuarios = await prisma.usuario.findMany({
    select: { id: true, nombre: true, email: true } // sin password
  });
  res.json(usuarios);
});

// FIX 2 y 4: autenticación + no confiar en userId del cliente
app.get('/admin/datos', authenticateToken, requireRole('admin'), async (req, res) => {
  // FIX 4: userId viene del token verificado, no del query param manipulable
  const user = await prisma.usuario.findUnique({
    where: { id: req.user.userId },
    select: { id: true, nombre: true, email: true }
  });
  res.json({ user }); // FIX 3: no exponer "secret" genérico
});
```

---

## Pregunta 15 — Schema E-commerce

```prisma
model Usuario {
  id        Int      @id @default(autoincrement())
  nombre    String
  email     String   @unique
  password  String
  rol       Rol      @default(CLIENTE)
  pedidos   Pedido[]
  createdAt DateTime @default(now())
}

enum Rol { CLIENTE ADMIN }

model Categoria {
  id        Int        @id @default(autoincrement())
  nombre    String     @unique
  productos ProductoCategoria[]
}

model Producto {
  id          Int        @id @default(autoincrement())
  nombre      String
  descripcion String?
  precio      Decimal    @db.Decimal(10, 2)
  stock       Int        @default(0)
  categorias  ProductoCategoria[]
  lineas      LineaPedido[]

  @@index([nombre])
}

// Tabla intermedia para relación N:M Producto-Categoria
model ProductoCategoria {
  productoId  Int
  categoriaId Int
  producto    Producto  @relation(fields: [productoId], references: [id])
  categoria   Categoria @relation(fields: [categoriaId], references: [id])

  @@id([productoId, categoriaId])
}

model Pedido {
  id          Int           @id @default(autoincrement())
  usuarioId   Int
  usuario     Usuario       @relation(fields: [usuarioId], references: [id])
  estado      EstadoPedido  @default(PENDIENTE)
  total       Decimal       @db.Decimal(10, 2)
  lineas      LineaPedido[]
  createdAt   DateTime      @default(now())

  @@index([usuarioId])
}

enum EstadoPedido { PENDIENTE PAGADO ENVIADO ENTREGADO CANCELADO }

model LineaPedido {
  id         Int     @id @default(autoincrement())
  pedidoId   Int
  productoId Int
  pedido     Pedido  @relation(fields: [pedidoId], references: [id], onDelete: Cascade)
  producto   Producto @relation(fields: [productoId], references: [id])
  cantidad   Int
  precioUnit Decimal @db.Decimal(10, 2) // precio en el momento de compra, no referencial
}
```

**Decisiones:** `precioUnit` se almacena en `LineaPedido` porque el precio del producto puede cambiar. `onDelete: Cascade` en `LineaPedido` para eliminar líneas si se elimina el pedido.

---

## Pregunta 16 — Flujo de migraciones con Prisma

```bash
# 1. Schema inicial
npx prisma migrate dev --name init
# Crea: prisma/migrations/20240101_init/migration.sql

# 2. Modificar schema: añadir campo opcional
# schema.prisma:
# model Usuario {
#   bio String? ← nuevo campo opcional
# }
npx prisma migrate dev --name add-bio-to-usuario
# Genera: ALTER TABLE "Usuario" ADD COLUMN "bio" TEXT;
# Campo opcional → no rompe registros existentes

# 3. Si necesitas hacer rollback (solo en desarrollo):
# No hay rollback automático en Prisma; opciones:
# a) Revertir el schema y crear una nueva migración inversa
# b) En dev: prisma migrate reset (¡borra todos los datos!)
npx prisma migrate reset  # solo en desarrollo

# 4. En producción: aplicar sin interactividad
npx prisma migrate deploy  # solo aplica migraciones pendientes, no hace reset
```

**Estrategia segura para producción:**
1. Backup de BD antes de migrar
2. Campos nuevos siempre como opcionales (nullable) para backwards compatibility
3. Nunca `migrate reset` en producción
4. Testar la migración en staging con datos reales antes de producción
5. Si la migración es destructiva (eliminar columna), hacer en dos pasos: primero deprecar, luego eliminar

---

## Pregunta 17 — Webhook handler con Stripe

```js
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// IMPORTANTE: el body debe ser raw (sin parsear JSON) para verificar la firma
app.post('/webhooks/stripe',
  express.raw({ type: 'application/json' }), // raw buffer para verificación
  async (req, res) => {
    // 1. Responder 200 inmediatamente (Stripe reintenta si no recibe respuesta rápido)
    res.status(200).send('OK');

    // 2. Verificar la firma del webhook
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Firma de webhook inválida:', err.message);
      return; // ya respondimos 200, solo ignoramos
    }

    // 3. Idempotencia: verificar si ya procesamos este evento
    const yaProcessado = await prisma.webhookEvent.findUnique({
      where: { stripeEventId: event.id }
    });
    if (yaProcessado) return;

    // 4. Registrar el evento antes de procesar (idempotencia)
    await prisma.webhookEvent.create({
      data: { stripeEventId: event.id, tipo: event.type }
    });

    // 5. Procesar asíncronamente según el tipo de evento
    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          await handlePagoExitoso(event.data.object);
          break;
        case 'payment_intent.payment_failed':
          await handlePagoFallido(event.data.object);
          break;
        case 'charge.refunded':
          await handleReembolso(event.data.object);
          break;
        default:
          console.log(`Evento no manejado: ${event.type}`);
      }
    } catch (err) {
      console.error(`Error procesando evento ${event.id}:`, err);
      // No relanzar: ya respondimos 200. Registrar para revisión manual.
    }
  }
);
```

---

## Pregunta 18 — Refactorización del controlador de pedidos

**Problemas identificados:**

1. **SQL Injection masiva**: todos los valores se concatenan directamente sin parametrizar
2. **N+1 queries**: una query por cada producto en el bucle
3. **Sin transacción**: si falla una inserción a mitad del proceso, quedan datos inconsistentes (pedido sin líneas, stock desactualizado)
4. **Sin autenticación**: `userId` viene del body, es manipulable (IDOR)
5. **Sin validación de entrada**: no verifica que `productos` sea un array, que `userId` exista, que `cantidad` sea positiva
6. **Sin manejo de errores** para operaciones asíncronas

```js
// VERSIÓN CORREGIDA con Prisma
app.post('/pedidos', authenticateToken, async (req, res, next) => {
  try {
    const { productos } = req.body;
    const userId = req.user.userId; // FIX 4: del token, no del body

    // FIX 5: validación de entrada
    if (!Array.isArray(productos) || productos.length === 0)
      return res.status(400).json({ error: 'Se requiere al menos un producto' });

    for (const item of productos) {
      if (!item.id || !item.cantidad || item.cantidad < 1)
        return res.status(400).json({ error: 'Datos de producto inválidos' });
    }

    // FIX 2: obtener todos los productos en UNA sola query
    const productosIds = productos.map(p => p.id);
    const productosDB = await prisma.producto.findMany({
      where: { id: { in: productosIds } }
    });

    // Validar existencia y stock
    for (const item of productos) {
      const prod = productosDB.find(p => p.id === item.id);
      if (!prod) return res.status(404).json({ error: `Producto ${item.id} no encontrado` });
      if (prod.stock < item.cantidad)
        return res.status(409).json({ error: `Sin stock suficiente para ${prod.nombre}` });
    }

    // FIX 3: transacción atómica para consistencia
    const pedido = await prisma.$transaction(async (tx) => {
      const total = productos.reduce((acc, item) => {
        const prod = productosDB.find(p => p.id === item.id);
        return acc + prod.precio * item.cantidad;
      }, 0);

      const nuevoPedido = await tx.pedido.create({
        data: {
          usuarioId: userId,
          total,
          lineas: {
            create: productos.map(item => {
              const prod = productosDB.find(p => p.id === item.id);
              return { productoId: item.id, cantidad: item.cantidad, precioUnit: prod.precio };
            })
          }
        },
        include: { lineas: true }
      });

      // Actualizar stock de todos los productos
      for (const item of productos) {
        await tx.producto.update({
          where: { id: item.id },
          data: { stock: { decrement: item.cantidad } }
        });
      }

      return nuevoPedido;
    });

    res.status(201).json(pedido);
  } catch (err) { next(err); }
});
```
