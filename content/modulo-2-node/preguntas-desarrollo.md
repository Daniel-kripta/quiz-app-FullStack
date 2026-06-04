# Examen de Desarrollo — Módulo 2: Node.js (Backend Development)

> Responde con detalle: incluye explicaciones conceptuales, código de ejemplo y razonamiento sobre las decisiones de diseño. Se valorará la corrección técnica, la seguridad del código y la capacidad de justificar las decisiones arquitectónicas.

---

## Sección 1 — Preguntas Fáciles

**Pregunta 1.**
Explica el modelo de módulos en Node.js: ¿cuál es la diferencia entre CommonJS (CJS) y ES Modules (ESM)? ¿Cuándo usarías cada uno? Muestra cómo exportar e importar tanto una exportación default como múltiples exportaciones nombradas en ambos sistemas.

---

**Pregunta 2.**
¿Qué es Express.js y para qué sirve? Crea un servidor Node.js básico con Express que:
- Responda a `GET /` con un mensaje de bienvenida en JSON
- Responda a `GET /salud` con `{ status: 'ok', timestamp: <fecha actual> }`
- Responda a `POST /eco` devolviendo el body recibido tal cual

Explica el rol de `app.listen`, `req` y `res`. ¿Cuándo usarías `res.json()` frente a `res.send()`?

---

**Pregunta 3.**
¿Qué es el middleware en Express.js? Explica el ciclo request-response y el rol de `next()`. Implementa:
1. Un middleware de logging que registre el método HTTP, la ruta y la marca de tiempo de cada petición
2. Un middleware global de manejo de errores
3. Un middleware que compruebe la presencia del header `x-api-key` y devuelva 401 si no está presente

¿Cuál es la diferencia entre aplicar middleware con `app.use()` y aplicarlo a una ruta específica?

---

**Pregunta 4.**
¿Qué es una API REST? Explica sus principios fundamentales (stateless, recursos, representaciones). Describe los verbos HTTP y cuándo usar cada uno: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

¿Qué significan los siguientes códigos de estado HTTP? Agrúpalos por familia y explica en qué situación devuelves cada uno: `200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`, `422`, `500`.

---

## Sección 2 — Preguntas Medias

**Pregunta 5.**
Diseña e implementa una API REST completa para gestionar una lista de tareas (To-Do). La API debe incluir:
- `GET /tareas` — listar todas con paginación
- `GET /tareas/:id` — obtener una
- `POST /tareas` — crear una
- `PUT /tareas/:id` — actualizar una
- `DELETE /tareas/:id` — eliminar una

Muestra la estructura de archivos, el router, el controller y el manejo de errores.

---

**Pregunta 6.**
Explica en detalle cómo funciona la autenticación con JWT en una API Node.js. Implementa:
1. Un endpoint `POST /auth/registro` con hash de contraseña con bcrypt
2. Un endpoint `POST /auth/login` que devuelve un JWT
3. Un middleware `authenticateToken` que protege rutas privadas
4. Un ejemplo de ruta protegida `GET /perfil`

---

**Pregunta 7.**
Explica el patrón MVC aplicado a una API Node.js con Express. ¿Cuáles son las responsabilidades de cada capa? Implementa el flujo completo para `POST /usuarios` siguiendo este patrón, separando en archivos: router, controller, service y repository.

---

**Pregunta 8.**
¿Qué es CORS y por qué es necesario en una API? Explica la diferencia entre una petición simple y una petición preflight. Implementa la configuración de CORS en Express para una API que:
- Permite peticiones de `https://miapp.com` y `http://localhost:3000`
- Acepta los headers `Authorization` y `Content-Type`
- Permite los métodos GET, POST, PUT, DELETE
- Habilita el envío de cookies (credentials)

---

**Pregunta 9.**
Implementa un sistema de logging estructurado para una API Node.js en producción. El sistema debe:
- Usar niveles de log (debug, info, warn, error)
- Registrar todas las peticiones HTTP con método, ruta, tiempo de respuesta y código de estado
- Registrar errores con stack trace
- Producir output en formato JSON para sistemas de monitorización
- No registrar datos sensibles (passwords, tokens)

---

**Pregunta 10.**
Explica qué es el N+1 problem en ORMs. Muestra un ejemplo concreto del problema con Prisma y su solución. ¿Cuándo es preferible usar una query SQL nativa con `prisma.$queryRaw` en lugar del ORM?

---

**Pregunta 11.**
Implementa un sistema de autorización basado en roles (RBAC) para una API. Define roles (admin, moderador, usuario), implementa el middleware de verificación de roles y aplícalo a un conjunto de rutas. ¿Cómo manejarías los permisos a nivel de recurso (ej: un usuario solo puede editar sus propios posts)?

---

## Sección 3 — Preguntas Difíciles

**Pregunta 12.**
¿Qué es Prisma ORM? Escribe un schema Prisma para un sistema de blog con usuarios, posts y comentarios (incluyendo relaciones). Luego implementa las operaciones CRUD básicas para posts usando el cliente de Prisma, incluyendo una query que obtenga los posts con su autor y número de comentarios.

---

**Pregunta 13.**
¿Qué es TDD (Test-Driven Development) y cuál es su ciclo? Implementa usando TDD un módulo `descuentos.js` que calcule descuentos según el tipo de cliente (regular: 5%, premium: 15%, vip: 25%). Escribe primero los tests con Jasmine/Jest y luego el código que los hace pasar.

---

**Pregunta 14.**
Identifica y corrige todos los problemas de seguridad en el siguiente código de API. Explica cada vulnerabilidad encontrada y la solución aplicada:

```js
const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [];

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = usuarios.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, userId: user.id, admin: user.isAdmin });
  } else {
    res.json({ success: false });
  }
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/admin/datos', (req, res) => {
  const { userId } = req.query;
  const user = usuarios.find(u => u.id === userId);
  res.json({ secret: 'datos sensibles', user });
});
```

---

**Pregunta 15.**
Diseña el schema de base de datos en Prisma para una plataforma de e-commerce con: usuarios, productos, categorías (relación N:M con productos), pedidos y líneas de pedido. Explica las decisiones de diseño: tipos de relaciones, campos requeridos, índices y restricciones de integridad.

---

**Pregunta 16.**
¿Qué son las migraciones de base de datos en Prisma? Explica el flujo de trabajo completo para:
1. Diseñar un schema inicial
2. Aplicar la primera migración
3. Modificar el schema (añadir un campo opcional a una tabla existente con datos)
4. Hacer rollback si algo falla
5. Aplicar la migración en producción de forma segura

---

**Pregunta 17.**
Diseña e implementa un webhook handler para recibir eventos de un sistema de pagos externo (como Stripe). El handler debe:
- Verificar la firma del webhook para autenticar que viene del proveedor
- Procesar diferentes tipos de eventos (pago exitoso, pago fallido, reembolso)
- Responder con 200 inmediatamente y procesar de forma asíncrona
- Manejar idempotencia (el mismo evento puede llegar múltiples veces)

---

**Pregunta 18.**
Analiza el siguiente controlador e identifica todos los problemas (seguridad, rendimiento, mantenibilidad). Proporciona una versión refactorizada siguiendo buenas prácticas:

```js
app.post('/pedidos', async (req, res) => {
  const { userId, productos } = req.body;
  
  let total = 0;
  let lineaPedidos = [];
  
  for (let i = 0; i < productos.length; i++) {
    const prod = await db.query(`SELECT * FROM productos WHERE id = ${productos[i].id}`);
    if (prod.rows.length === 0) {
      res.json({ error: 'Producto no encontrado' });
      return;
    }
    if (prod.rows[0].stock < productos[i].cantidad) {
      res.json({ error: 'Sin stock' });
      return;
    }
    total += prod.rows[0].precio * productos[i].cantidad;
    lineaPedidos.push({ productoId: productos[i].id, cantidad: productos[i].cantidad, precio: prod.rows[0].precio });
  }
  
  const pedido = await db.query(`INSERT INTO pedidos (userId, total) VALUES (${userId}, ${total}) RETURNING *`);
  
  for (let linea of lineaPedidos) {
    await db.query(`INSERT INTO lineas_pedido (pedidoId, productoId, cantidad, precio) VALUES (${pedido.rows[0].id}, ${linea.productoId}, ${linea.cantidad}, ${linea.precio})`);
    await db.query(`UPDATE productos SET stock = stock - ${linea.cantidad} WHERE id = ${linea.productoId}`);
  }
  
  res.json({ success: true, pedido: pedido.rows[0] });
});
```
