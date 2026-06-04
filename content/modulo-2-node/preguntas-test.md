# Examen Tipo Test — Módulo 2: Node.js (Backend Development)

---

## SECCIÓN 1: PREGUNTAS BÁSICAS (1–70)

**1.** ¿Qué es Node.js?
- A) Un framework de JavaScript para el frontend
- B) Un entorno de ejecución de JavaScript del lado del servidor basado en el motor V8 de Chrome
- C) Un lenguaje de programación diferente a JavaScript
- D) Un gestor de bases de datos

**2.** ¿Cuál es la principal diferencia entre Node.js y JavaScript en el navegador?
- A) Node.js no usa JavaScript
- B) Node.js no tiene acceso al DOM pero sí al sistema de archivos y red; el navegador tiene DOM pero no FileSystem
- C) Node.js es más lento que el navegador
- D) Node.js solo puede ejecutar código síncrono

**3.** ¿Qué es Express.js?
- A) Un lenguaje de programación para servidores
- B) Un framework minimalista para Node.js que facilita crear servidores HTTP y APIs
- C) Una base de datos para Node.js
- D) Un gestor de paquetes alternativo a npm

**4.** ¿Cómo se instala Express en un proyecto?
- A) `node install express`
- B) `npm install express`
- C) `express install`
- D) `npx add express`

**5.** ¿Qué hace el siguiente código?
```js
const express = require('express');
const app = express();
app.listen(3000);
```
- A) Inicia un servidor HTTP en el puerto 3000
- B) Conecta la app a una base de datos en el puerto 3000
- C) Crea un cliente HTTP para hacer peticiones al puerto 3000
- D) Exporta la app para usarla en tests

**6.** ¿Cuál es el código HTTP para una respuesta exitosa?
- A) 201
- B) 404
- C) 200
- D) 500

**7.** ¿Qué código HTTP indica que un recurso fue creado?
- A) 200
- B) 201
- C) 204
- D) 301

**8.** ¿Qué significa el código HTTP 404?
- A) Error interno del servidor
- B) Recurso no encontrado
- C) Acceso no autorizado
- D) Petición incorrecta

**9.** ¿Qué significa el código HTTP 500?
- A) Petición incorrecta del cliente
- B) Recurso no encontrado
- C) Error interno del servidor
- D) Servicio no disponible

**10.** ¿Qué es REST?
- A) Un lenguaje de programación para APIs
- B) Un estilo arquitectónico para diseñar servicios web basado en HTTP y recursos
- C) Una base de datos NoSQL
- D) Un protocolo de red alternativo a HTTP

**11.** En REST, ¿qué método HTTP se usa para obtener recursos?
- A) POST
- B) PUT
- C) GET
- D) FETCH

**12.** En REST, ¿qué método HTTP se usa para crear recursos?
- A) GET
- B) POST
- C) PUT
- D) CREATE

**13.** En REST, ¿qué método HTTP se usa para actualizar un recurso completo?
- A) PATCH
- B) POST
- C) UPDATE
- D) PUT

**14.** En REST, ¿qué método HTTP se usa para eliminar un recurso?
- A) REMOVE
- B) DROP
- C) DELETE
- D) DESTROY

**15.** ¿Qué es un middleware en Express?
- A) Un tipo de base de datos
- B) Una función que tiene acceso al objeto `req`, `res` y `next`, que se ejecuta entre la petición y la respuesta
- C) El código que ejecuta Express internamente
- D) Un plugin para gestionar rutas

**16.** ¿Qué hace `next()` dentro de un middleware de Express?
- A) Termina la respuesta HTTP
- B) Pasa el control al siguiente middleware o ruta en la cadena
- C) Reinicia la petición
- D) Lanza un error

**17.** ¿Qué hace `app.use(express.json())`?
- A) Convierte todas las respuestas a JSON automáticamente
- B) Añade middleware para parsear el body de las peticiones con Content-Type JSON
- C) Habilita el soporte para JSON en la base de datos
- D) Valida que las respuestas sean JSON válido

**18.** ¿Cómo se definen rutas en Express?
- A) `app.route('/ruta', metodo, handler)`
- B) `app.get('/ruta', (req, res) => { ... })`
- C) `app.define('/ruta', 'GET', handler)`
- D) `route.get('/ruta', handler)`

**19.** ¿Cómo se accede al body de una petición POST en Express?
- A) `req.query`
- B) `req.params`
- C) `req.body`
- D) `req.data`

**20.** ¿Cómo se accede a los parámetros de una ruta dinámica `/usuarios/:id`?
- A) `req.query.id`
- B) `req.body.id`
- C) `req.params.id`
- D) `req.route.id`

**21.** ¿Cómo se acceden a los query parameters de `/buscar?q=hola`?
- A) `req.params.q`
- B) `req.body.q`
- C) `req.query.q`
- D) `req.search.q`

**22.** ¿Qué es CommonJS en Node.js?
- A) Un standard de JavaScript del navegador
- B) El sistema de módulos nativo de Node.js que usa `require()` y `module.exports`
- C) Un framework de testing
- D) Un tipo de base de datos

**23.** ¿Cuál es la forma de importar un módulo en CommonJS?
- A) `import module from 'module'`
- B) `const module = require('module')`
- C) `include module from 'module'`
- D) `load('module')`

**24.** ¿Cómo se exporta una función en CommonJS?
- A) `export default miFuncion`
- B) `module.exports = miFuncion`
- C) `exports.default = miFuncion`
- D) `export miFuncion`

**25.** ¿Qué es `package.json` en un proyecto Node.js?
- A) El archivo principal de la aplicación
- B) El archivo que define el proyecto: nombre, versión, dependencias, scripts
- C) La configuración de la base de datos
- D) El archivo de variables de entorno

**26.** ¿Para qué sirve el archivo `.env`?
- A) Para definir el entorno de ejecución (dev, prod)
- B) Para almacenar variables de entorno sensibles que no deben estar en el código
- C) Para configurar las rutas de la API
- D) Para definir los modelos de la base de datos

**27.** ¿Cómo se accede a una variable de entorno en Node.js?
- A) `env.VARIABLE`
- B) `process.env.VARIABLE`
- C) `node.env.VARIABLE`
- D) `config.env.VARIABLE`

**28.** ¿Para qué sirve `dotenv`?
- A) Para validar variables de entorno
- B) Para cargar las variables del archivo `.env` en `process.env`
- C) Para encriptar las variables de entorno
- D) Para generar archivos `.env` automáticamente

**29.** ¿Qué es la Programación Orientada a Objetos (POO)?
- A) Un paradigma que organiza el código en funciones independientes
- B) Un paradigma que organiza el código en clases y objetos con estado y comportamiento
- C) Un paradigma específico de Node.js
- D) Un tipo de base de datos orientada a objetos

**30.** ¿Cómo se define una clase en JavaScript moderno?
- A) `object MiClase {}`
- B) `class MiClase {}`
- C) `type MiClase {}`
- D) `struct MiClase {}`

**31.** ¿Qué es el constructor de una clase?
- A) Una función que copia la clase
- B) El método especial que se ejecuta al instanciar la clase con `new`
- C) El método que destruye la instancia
- D) Un método estático de la clase

**32.** ¿Cómo se hereda de una clase en JavaScript?
- A) `class Hijo implements Padre {}`
- B) `class Hijo extends Padre {}`
- C) `class Hijo inherits Padre {}`
- D) `class Hijo : Padre {}`

**33.** ¿Qué hace `super()` en el constructor de una clase hija?
- A) Llama al método `super` del padre
- B) Llama al constructor de la clase padre
- C) Crea una instancia de la clase padre
- D) Exporta la clase al módulo padre

**34.** ¿Qué es PostgreSQL?
- A) Una base de datos NoSQL orientada a documentos
- B) Un sistema de gestión de bases de datos relacional y de código abierto
- C) Un ORM para Node.js
- D) Un lenguaje de programación para bases de datos

**35.** ¿Qué es SQL?
- A) Structured Query Language: lenguaje para gestionar bases de datos relacionales
- B) Server Query Language: lenguaje de Node.js para queries
- C) Simple Query Logic: lógica para filtros
- D) Standard Query Language solo para PostgreSQL

**36.** ¿Qué hace `SELECT * FROM usuarios`?
- A) Inserta todos los registros en la tabla usuarios
- B) Devuelve todas las columnas y filas de la tabla usuarios
- C) Actualiza todos los registros de la tabla
- D) Elimina todos los registros de la tabla

**37.** ¿Qué hace `WHERE` en una consulta SQL?
- A) Ordena los resultados
- B) Filtra las filas según una condición
- C) Agrupa los resultados
- D) Une dos tablas

**38.** ¿Qué es un ORM?
- A) Un tipo de base de datos
- B) Object-Relational Mapper: abstrae el acceso a la base de datos usando objetos en lugar de SQL directo
- C) Un protocolo de autenticación
- D) Un sistema de caché

**39.** ¿Qué es Prisma?
- A) Un framework web para Node.js
- B) Un ORM moderno para Node.js y TypeScript con type-safety
- C) Una base de datos en memoria
- D) Una herramienta de testing de bases de datos

**40.** ¿Qué archivo define el esquema de datos en Prisma?
- A) `prisma.json`
- B) `schema.prisma`
- C) `models.prisma`
- D) `database.schema`

**41.** ¿Qué es la autenticación?
- A) Verificar qué acciones puede realizar un usuario
- B) Verificar la identidad de un usuario (quién eres)
- C) Cifrar los datos de la base de datos
- D) Gestionar las sesiones de usuarios

**42.** ¿Qué es la autorización?
- A) El proceso de verificar la identidad de un usuario
- B) El proceso de verificar qué recursos o acciones puede acceder un usuario autenticado
- C) El proceso de crear cuentas de usuario
- D) El proceso de cerrar sesión

**43.** ¿Qué es JWT (JSON Web Token)?
- A) Un protocolo de base de datos
- B) Un estándar para tokens de acceso que contienen información codificada en JSON y firmados criptográficamente
- C) Un tipo de sesión de servidor
- D) Un formato de base de datos

**44.** ¿Cuáles son las tres partes de un JWT?
- A) Header, Content, Signature
- B) Header, Payload, Signature
- C) Token, Claims, Key
- D) ID, Data, Hash

**45.** ¿Qué hace `bcrypt`?
- A) Genera tokens JWT
- B) Cifra contraseñas con un algoritmo de hash seguro y lento (resistente a ataques)
- C) Gestiona sesiones de Express
- D) Valida tokens de autenticación

**46.** ¿Dónde se guarda típicamente un JWT en el cliente?
- A) En una variable global de JavaScript
- B) En localStorage, sessionStorage o en una cookie HttpOnly
- C) En la URL de cada petición
- D) En el servidor

**47.** ¿Cómo se envía un JWT en una petición HTTP?
- A) Como parámetro en la URL
- B) En el header `Authorization: Bearer <token>`
- C) En el body de la petición
- D) Como cookie automáticamente

**48.** ¿Qué es un router en Express?
- A) Un middleware que redirige todas las peticiones
- B) Un mini-servidor Express que agrupa rutas relacionadas y puede montarse en la app principal
- C) El componente que decide qué base de datos usar
- D) Una función que transforma las URLs

**49.** ¿Cómo se monta un router en Express?
- A) `app.router('/api/usuarios', usuariosRouter)`
- B) `app.use('/api/usuarios', usuariosRouter)`
- C) `app.mount('/api/usuarios', usuariosRouter)`
- D) `app.include('/api/usuarios', usuariosRouter)`

**50.** ¿Qué es el patrón MVC?
- A) Multiple View Controller
- B) Model-View-Controller: patrón arquitectónico que separa datos (Model), interfaz (View) y lógica (Controller)
- C) Module-Validator-Controller
- D) Middleware-View-Component

**51.** ¿Qué responsabilidad tiene el Controller en MVC?
- A) Definir los modelos de datos
- B) Renderizar las vistas HTML
- C) Recibir la petición HTTP, orquestar la lógica y enviar la respuesta
- D) Gestionar la conexión a la base de datos

**52.** ¿Qué responsabilidad tiene el Model en MVC?
- A) Gestionar las rutas de la API
- B) Representar y gestionar los datos del dominio, incluyendo acceso a base de datos
- C) Formatear las respuestas JSON
- D) Validar los tokens JWT

**53.** ¿Qué hace el módulo `fs` de Node.js?
- A) Gestiona el sistema de rutas de Express
- B) Provee métodos para leer, escribir, modificar y eliminar archivos del sistema
- C) Formatea strings en el servidor
- D) Gestiona el sistema de caché

**54.** ¿Cuál es la versión asíncrona de leer un archivo con `fs`?
- A) `fs.readFile(path, callback)` o `fs.promises.readFile(path)`
- B) `fs.read(path)`
- C) `fs.asyncRead(path)`
- D) `fs.loadFile(path)`

**55.** ¿Qué es CORS?
- A) Cross-Origin Resource Sharing: mecanismo que permite o restringe peticiones entre diferentes orígenes
- B) Client-Origin Request System
- C) Cross-Object Resource Sync
- D) Un tipo de autenticación HTTP

**56.** ¿Por qué es importante configurar CORS en una API?
- A) Para mejorar el rendimiento de la API
- B) Para controlar qué dominios frontend pueden hacer peticiones a la API, como medida de seguridad
- C) Para habilitar el soporte JSON
- D) Para comprimir las respuestas

**57.** ¿Cómo se habilita CORS en Express?
- A) `app.cors(true)`
- B) `app.use(require('cors')())`
- C) `app.enable('cors')`
- D) `res.header('Access-Control', '*')`

**58.** ¿Qué es `nodemon`?
- A) Una base de datos de Node.js
- B) Una herramienta de desarrollo que reinicia automáticamente el servidor cuando detecta cambios en los archivos
- C) El gestor de procesos de producción de Node.js
- D) Un framework de testing

**59.** ¿Qué hace `npm run start` en un proyecto Node.js?
- A) Instala las dependencias
- B) Ejecuta el script `start` definido en `package.json`
- C) Compila el código TypeScript
- D) Publica el paquete en npm

**60.** ¿Qué es TypeScript en el contexto de Node.js?
- A) Solo funciona en frontend, no en Node.js
- B) Un superset de JavaScript con tipado estático que mejora la detección de errores en desarrollo
- C) Una versión de Node.js con tipos nativos
- D) Un transpilador de código

**61.** ¿Qué hace `ts-node`?
- A) Instala TypeScript en Node.js
- B) Permite ejecutar archivos TypeScript directamente sin compilar a JavaScript primero
- C) Convierte Node.js en TypeScript
- D) Compila TypeScript a JavaScript en producción

**62.** ¿Qué es `tsconfig.json`?
- A) La configuración de la base de datos en TypeScript
- B) El archivo de configuración del compilador TypeScript
- C) El archivo de rutas en TypeScript
- D) La configuración del servidor en TypeScript

**63.** ¿Qué hace `INSERT INTO usuarios (nombre, email) VALUES (?, ?)`?
- A) Selecciona usuarios con ese nombre y email
- B) Inserta un nuevo registro en la tabla usuarios
- C) Actualiza el nombre y email de un usuario
- D) Busca usuarios duplicados

**64.** ¿Qué hace `UPDATE usuarios SET nombre = ? WHERE id = ?`?
- A) Crea un nuevo usuario con ese id
- B) Elimina el usuario con ese id
- C) Actualiza el campo nombre del usuario con ese id
- D) Renombra la tabla usuarios

**65.** ¿Qué hace `DELETE FROM usuarios WHERE id = ?`?
- A) Desactiva al usuario con ese id
- B) Elimina el registro con ese id de la tabla usuarios
- C) Vacía toda la tabla usuarios
- D) Crea un backup del registro

**66.** ¿Qué es una foreign key (clave foránea)?
- A) Una clave de acceso externo a la base de datos
- B) Una columna que referencia la clave primaria de otra tabla, estableciendo una relación
- C) Una clave de cifrado de datos
- D) El identificador de una base de datos remota

**67.** ¿Qué tipo de relación existe cuando un usuario tiene múltiples posts?
- A) Uno a uno (1:1)
- B) Uno a muchos (1:N)
- C) Muchos a muchos (N:M)
- D) Ninguna relación

**68.** ¿Qué es `express-validator`?
- A) Un middleware para validar tokens JWT
- B) Una librería para validar y sanitizar los datos de entrada en Express
- C) Un validador de esquemas de base de datos
- D) Una herramienta para validar la configuración de Express

**69.** ¿Qué es el manejo de errores global en Express?
- A) Un sistema de logs automático
- B) Un middleware especial con 4 parámetros `(err, req, res, next)` que captura errores de toda la aplicación
- C) Un try/catch global en el archivo principal
- D) Una librería para enviar emails cuando hay errores

**70.** ¿Qué es `morgan`?
- A) Un ORM para Node.js
- B) Un middleware de logging HTTP para Express que registra las peticiones entrantes
- C) Un gestor de autenticación
- D) Una librería de testing

---

## SECCIÓN 2: PREGUNTAS MEDIAS (71–150)

**71.** ¿Qué hace el siguiente middleware de Express?
```js
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
```
- A) Registra todos los errores en un archivo
- B) Captura cualquier error que se propague con `next(err)` y devuelve una respuesta JSON
- C) Redirige todos los errores a la página de inicio
- D) Solo captura errores 404

**72.** ¿Cuál es la diferencia entre `app.use()` y `app.get()` en Express?
- A) `app.use()` solo acepta funciones síncronas; `app.get()` acepta asíncronas
- B) `app.use()` aplica a todos los métodos HTTP y puede hacer coincidencia parcial de rutas; `app.get()` solo responde a GET con ruta exacta
- C) No hay diferencia
- D) `app.use()` es para middleware externo; `app.get()` para middleware interno

**73.** ¿Qué hace `express.Router()`?
- A) Crea una instancia de servidor Express independiente
- B) Crea un objeto router que puede tener sus propias rutas y middleware, montable en la app principal
- C) Registra una ruta global en Express
- D) Configura el motor de vistas

**74.** ¿Cómo se implementa paginación en una API REST?
- A) Con el header `X-Page`
- B) Con query params como `?page=2&limit=10` y devolviendo el total junto con los resultados
- C) Cambiando la URL base de la API
- D) Con el header `Content-Range`

**75.** En Prisma, ¿cómo se obtiene un usuario por ID?
- A) `prisma.usuario.get({ id: 1 })`
- B) `prisma.usuario.findUnique({ where: { id: 1 } })`
- C) `prisma.find('usuario', 1)`
- D) `prisma.usuario.select({ id: 1 })`

**76.** En Prisma, ¿cómo se crea un nuevo registro?
- A) `prisma.usuario.insert({ data: {...} })`
- B) `prisma.usuario.create({ data: { nombre: 'Ana', email: 'ana@test.com' } })`
- C) `prisma.usuario.new({ nombre: 'Ana' })`
- D) `prisma.create('usuario', { nombre: 'Ana' })`

**77.** ¿Qué hace `prisma.usuario.findMany({ where: { activo: true }, include: { posts: true } })`?
- A) Busca un único usuario activo con sus posts
- B) Devuelve todos los usuarios activos incluyendo sus posts relacionados
- C) Crea múltiples usuarios activos con posts
- D) Actualiza todos los usuarios activos para incluir posts

**78.** ¿Cuál es el flujo completo de autenticación con JWT?
- A) Cliente envía credenciales → servidor verifica → genera cookie de sesión → cliente la almacena
- B) Cliente envía credenciales → servidor verifica contra BD → genera JWT → cliente lo almacena y envía en cada petición → servidor verifica el token
- C) Servidor genera token al arrancar → cliente lo solicita → lo incluye en la URL
- D) Cliente genera el JWT → servidor lo valida con su propia clave

**79.** ¿Cómo se genera un JWT en Node.js con `jsonwebtoken`?
- A) `jwt.create(payload, secret)`
- B) `jwt.sign(payload, secret, { expiresIn: '1h' })`
- C) `jwt.encode(payload, secret)`
- D) `jwt.generate({ payload, secret })`

**80.** ¿Cómo se verifica un JWT en Node.js?
- A) `jwt.decode(token, secret)` (sin verificación)
- B) `jwt.verify(token, secret)` (lanza error si es inválido)
- C) `jwt.check(token, secret)`
- D) `jwt.validate(token, secret)`

**81.** ¿Cómo se implementa un middleware de autenticación JWT en Express?
- A) Añadiendo la verificación directamente en cada route handler
- B) Creando un middleware que extrae el token del header Authorization, lo verifica con `jwt.verify` y llama a `next()` o devuelve 401
- C) Usando `app.auth(jwt)`
- D) Configurando JWT en el archivo `.env`

**82.** ¿Cuál es la diferencia entre `bcrypt.hash()` y `bcrypt.compare()`?
- A) `hash()` cifra una contraseña nueva; `compare()` compara una contraseña en texto plano con su hash almacenado
- B) `hash()` verifica el hash; `compare()` genera el hash
- C) Son equivalentes
- D) `compare()` devuelve el hash desencriptado

**83.** ¿Qué es el "salt" en bcrypt?
- A) Una clave secreta adicional
- B) Datos aleatorios añadidos antes del hash para que el mismo password genere hashes diferentes cada vez
- C) El número de rondas de cifrado
- D) La versión del algoritmo bcrypt

**84.** ¿Qué hace `prisma migrate dev`?
- A) Sincroniza la base de datos con el schema Prisma y crea los archivos de migración
- B) Reinicia la base de datos de desarrollo
- C) Genera el cliente Prisma sin tocar la base de datos
- D) Exporta la base de datos a un archivo SQL

**85.** ¿Qué hace `prisma generate`?
- A) Crea las tablas en la base de datos
- B) Genera el cliente TypeScript tipado de Prisma a partir del schema
- C) Genera datos de prueba para la base de datos
- D) Genera la documentación de la API

**86.** ¿Qué es el patrón Repository en el contexto de una API?
- A) El repositorio Git donde se almacena el código
- B) Una capa de abstracción que encapsula la lógica de acceso a datos, separándola de los controllers
- C) Una colección de middlewares reutilizables
- D) El patrón de rutas anidadas de Express

**87.** ¿Qué hace `app.use(express.urlencoded({ extended: true }))`?
- A) Habilita las URLs largas en Express
- B) Parsea bodies con formato `application/x-www-form-urlencoded` (formularios HTML tradicionales)
- C) Codifica todas las URLs de las respuestas
- D) Habilita el soporte para caracteres especiales en rutas

**88.** ¿Cuál es la diferencia entre `PUT` y `PATCH` en REST?
- A) Son equivalentes
- B) `PUT` reemplaza el recurso completo; `PATCH` actualiza solo los campos enviados
- C) `PUT` crea recursos; `PATCH` los actualiza
- D) `PATCH` es más seguro que `PUT`

**89.** ¿Qué son las migraciones en bases de datos?
- A) Copias de seguridad de la base de datos
- B) Archivos versionados que describen cambios incrementales en el esquema de la base de datos
- C) Scripts para migrar datos de una BD a otra
- D) Exportaciones del esquema actual

**90.** ¿Qué es un índice en SQL y para qué sirve?
- A) Un número que identifica cada fila
- B) Una estructura de datos que acelera las búsquedas en columnas frecuentemente consultadas
- C) Una restricción de unicidad
- D) Una clave foránea especial

**91.** ¿Qué hace `JOIN` en SQL?
- A) Combina columnas de la misma tabla
- B) Combina filas de dos o más tablas basándose en una columna relacionada
- C) Divide una tabla en partes
- D) Crea una nueva tabla combinando dos esquemas

**92.** ¿Cuál es la diferencia entre `INNER JOIN` y `LEFT JOIN`?
- A) No hay diferencia
- B) `INNER JOIN` devuelve solo las filas con coincidencia en ambas tablas; `LEFT JOIN` devuelve todas las filas de la tabla izquierda aunque no tengan coincidencia
- C) `LEFT JOIN` es más rápido
- D) `INNER JOIN` incluye nulos; `LEFT JOIN` no

**93.** ¿Qué hace `GROUP BY` en SQL?
- A) Ordena los resultados por una columna
- B) Agrupa filas con el mismo valor en una columna para aplicar funciones de agregación
- C) Filtra grupos de resultados
- D) Combina filas duplicadas

**94.** ¿Qué tipo de testing se usa con TDD (Test-Driven Development)?
- A) Solo tests de integración
- B) Escribir los tests ANTES del código de producción, hacerlos pasar, y luego refactorizar
- C) Solo tests end-to-end
- D) Tests manuales primero, luego automatizados

**95.** En TDD, ¿cuál es el ciclo correcto?
- A) Write code → Write test → Refactor
- B) Red (test falla) → Green (código mínimo para pasar) → Refactor
- C) Refactor → Red → Green
- D) Green → Red → Write code

**96.** ¿Qué es un mock en testing?
- A) Un test que siempre falla
- B) Un objeto o función falsa que simula el comportamiento de una dependencia real
- C) Un test de rendimiento
- D) Una copia exacta del código de producción para testing

**97.** ¿Qué es un spy en testing?
- A) Un test que se ejecuta en segundo plano
- B) Una función que envuelve la original para registrar si fue llamada, cuántas veces y con qué argumentos
- C) Un mock que siempre devuelve null
- D) Una función que reemplaza completamente la original

**98.** ¿Qué hace `jest.fn()` en Jest/Vitest?
- A) Ejecuta una función de test
- B) Crea una función mock que registra sus llamadas y permite definir su comportamiento
- C) Verifica que una función existe
- D) Mockeea automáticamente todas las funciones del módulo

**99.** ¿Cuál es la diferencia entre un test unitario y uno de integración?
- A) Los tests unitarios son más lentos
- B) Los tests unitarios testean una unidad aislada (función, clase); los de integración testean la interacción entre múltiples componentes/capas
- C) Los tests de integración no usan mocks
- D) Los tests unitarios requieren base de datos

**100.** ¿Qué hace `describe()` en Jest/Jasmine/Vitest?
- A) Describe la documentación del test
- B) Agrupa tests relacionados bajo un nombre descriptivo
- C) Define la configuración global del test
- D) Ejecuta un test de forma asíncrona

**101.** ¿Qué es una transacción en bases de datos?
- A) Un log de las operaciones realizadas
- B) Una secuencia de operaciones que se ejecuta como una unidad atómica (todo o nada)
- C) Una consulta SELECT compleja
- D) Una operación de copia de seguridad

**102.** ¿Qué son las propiedades ACID en bases de datos?
- A) Atomicity, Concurrency, Isolation, Durability
- B) Atomicity, Consistency, Isolation, Durability
- C) Accuracy, Consistency, Integrity, Durability
- D) Atomicity, Consistency, Integrity, Distribution

**103.** ¿Qué hace `prisma.$transaction()` en Prisma?
- A) Registra el tiempo de las operaciones
- B) Ejecuta múltiples operaciones de base de datos como una transacción atómica
- C) Hace un commit manual de los cambios
- D) Conecta múltiples bases de datos

**104.** ¿Qué es XSS (Cross-Site Scripting)?
- A) Un ataque que inyecta SQL malicioso
- B) Un ataque que inyecta scripts maliciosos en páginas web para ejecutarse en el navegador de otros usuarios
- C) Un ataque de denegación de servicio
- D) Un ataque de man-in-the-middle

**105.** ¿Qué es SQL Injection?
- A) Un ataque que inserta código JavaScript en la base de datos
- B) Un ataque que inserta SQL malicioso en inputs para manipular las consultas de la base de datos
- C) Un método de optimización de consultas SQL
- D) Un error de configuración de la base de datos

**106.** ¿Cómo se previene SQL Injection en Node.js?
- A) Usando HTTPS
- B) Usando consultas parametrizadas (prepared statements) o un ORM como Prisma
- C) Validando solo la longitud del input
- D) Usando un firewall de red

**107.** ¿Qué es `helmet` en Express?
- A) Un framework de autenticación
- B) Un middleware que configura headers HTTP de seguridad para proteger contra ataques comunes
- C) Una librería para encriptar datos
- D) Un gestor de certificados SSL

**108.** ¿Qué hace `express-rate-limit`?
- A) Limita el tamaño de las peticiones
- B) Limita el número de peticiones que puede hacer un cliente en un período de tiempo (previene brute force)
- C) Limita el número de conexiones simultáneas al servidor
- D) Controla la velocidad de respuesta del servidor

**109.** ¿Cuál es la diferencia entre autenticación con sesión y con JWT?
- A) No hay diferencia
- B) Las sesiones son stateful (el servidor guarda el estado); JWT es stateless (toda la info va en el token)
- C) JWT solo funciona con HTTPS; las sesiones con HTTP
- D) Las sesiones son más seguras siempre

**110.** ¿Qué es un refresh token y para qué sirve?
- A) Un token para actualizar las dependencias del servidor
- B) Un token de larga vida que se usa para obtener un nuevo access token cuando este expira, sin requerir login
- C) Un token que se renueva en cada petición automáticamente
- D) Una versión actualizada del JWT

**111.** En Prisma, ¿cómo se define una relación uno a muchos en el schema?
```prisma
model Usuario {
  id    Int    @id @default(autoincrement())
  posts Post[]
}
model Post {
  id        Int     @id @default(autoincrement())
  usuarioId Int
  usuario   Usuario @relation(fields: [usuarioId], references: [id])
}
```
- A) Este código es incorrecto
- B) Define que un Usuario puede tener múltiples Posts, y cada Post pertenece a un Usuario
- C) Define una relación muchos a muchos
- D) Define que un Usuario solo puede tener un Post

**112.** ¿Qué hace `ORDER BY createdAt DESC` en SQL?
- A) Filtra registros por fecha de creación
- B) Ordena los resultados de más reciente a más antiguo
- C) Agrupa los resultados por fecha
- D) Crea un índice por fecha de creación

**113.** ¿Qué es `async/await` en el contexto de controladores Express?
- A) Una forma de hacer el servidor asíncrono
- B) Permite manejar operaciones asíncronas (como consultas a BD) con sintaxis síncrona en los handlers
- C) Un tipo de middleware de Express
- D) Una configuración de rendimiento del servidor

**114.** ¿Por qué es necesario envolver handlers async en try/catch en Express 4?
- A) Porque Express no maneja errores asíncronos automáticamente en v4
- B) Solo por convención, no es necesario
- C) Porque async/await no funciona con Express
- D) Para mejorar el rendimiento

**115.** ¿Qué hace `next(error)` en un middleware de Express?
- A) Pasa al siguiente middleware normal
- B) Salta al middleware de manejo de errores (el de 4 parámetros)
- C) Lanza un error HTTP 500 automáticamente
- D) Registra el error en el log del sistema

**116.** ¿Qué es `swagger` en el contexto de APIs?
- A) Un framework de testing
- B) Una especificación y herramienta para documentar APIs REST de forma interactiva
- C) Un validador de schemas JSON
- D) Un gestor de versiones de API

**117.** ¿Qué es `pm2` y para qué se usa?
- A) Un gestor de paquetes alternativo a npm
- B) Un gestor de procesos para Node.js en producción que asegura que la app se reinicie automáticamente
- C) Un monitor de base de datos
- D) Una herramienta de profiling de Node.js

**118.** ¿Qué es Docker en el contexto de una API Node.js?
- A) Un gestor de dependencias
- B) Una plataforma de contenedores que permite empaquetar la app con todas sus dependencias para ejecutarla en cualquier entorno
- C) Un sistema de base de datos
- D) Un servidor web como Nginx

**119.** ¿Qué contiene un `Dockerfile` básico para una app Node.js?
- A) Las variables de entorno de producción
- B) Las instrucciones para construir la imagen Docker: imagen base, copiar archivos, instalar dependencias, comando de inicio
- C) La configuración de la red del contenedor
- D) Los secretos de la aplicación

**120.** ¿Qué hace `docker-compose.yml`?
- A) Compila el Dockerfile
- B) Define y configura múltiples servicios (app + base de datos) que se orquestan juntos
- C) Gestiona los secrets de Docker
- D) Configura los volúmenes de Docker

**121.** ¿Qué significa que Node.js es "event-driven"?
- A) Que solo puede ejecutar código en respuesta a eventos del usuario
- B) Que Node.js opera mediante un bucle de eventos que gestiona operaciones I/O de forma no bloqueante
- C) Que Node.js usa el sistema de eventos del sistema operativo
- D) Que todas las funciones de Node.js emiten eventos

**122.** ¿Cuándo se usa `stream` en Node.js?
- A) Para gestionar múltiples bases de datos simultáneamente
- B) Para procesar datos grandes de forma incremental sin cargar todo en memoria
- C) Para gestionar múltiples conexiones WebSocket
- D) Para hacer streaming de respuestas de video

**123.** ¿Qué es `joi` o `zod` en el contexto de una API?
- A) Frameworks web para Node.js
- B) Librerías de validación y parseado de schemas con inferencia de tipos
- C) ORMs alternativos a Prisma
- D) Librerías de generación de tokens

**124.** ¿Cuál es la ventaja de Zod sobre `express-validator`?
- A) Zod es más rápido en tiempo de ejecución
- B) Zod infiere tipos TypeScript automáticamente del schema, eliminando duplicación de tipos
- C) Zod es más sencillo de instalar
- D) Zod tiene más validadores predefinidos

**125.** ¿Qué es un WebSocket y cuándo lo usarías?
- A) Una mejora del protocolo HTTP estándar
- B) Un protocolo de comunicación bidireccional persistente; útil para chat en tiempo real, notificaciones, juegos
- C) Un tipo de API REST para datos en tiempo real
- D) Un protocolo seguro alternativo a HTTPS

**126.** ¿Qué hace `req.headers.authorization` en Express?
- A) Establece el header de autorización de la respuesta
- B) Accede al valor del header Authorization enviado por el cliente
- C) Verifica automáticamente el JWT del header
- D) Establece los permisos del usuario en la sesión

**127.** ¿Cuál es la práctica correcta para manejar contraseñas en una API?
- A) Almacenarlas en texto plano en la base de datos
- B) Hashearlas con bcrypt antes de guardar; nunca guardar texto plano; comparar hashes en login
- C) Cifrarlas con una clave simétrica y descifrarlas al comparar
- D) Codificarlas en Base64

**128.** ¿Qué hace `app.set('trust proxy', 1)` en Express?
- A) Configura un proxy reverso para balanceo de carga
- B) Le dice a Express que confíe en el primer proxy X-Forwarded-For para obtener la IP real del cliente
- C) Habilita HTTP/2 en Express
- D) Configura la caché del proxy de Express

**129.** ¿Qué es un "seed" en el contexto de bases de datos?
- A) Una copia de seguridad inicial de la base de datos
- B) Scripts que populan la base de datos con datos iniciales o de prueba
- C) La semilla usada en algoritmos de cifrado
- D) El esquema inicial de la base de datos

**130.** ¿Qué son los "health checks" en una API?
- A) Validaciones de los datos de entrada
- B) Endpoints que reportan el estado de la API y sus dependencias (BD, servicios externos)
- C) Tests automáticos de rendimiento
- D) Validaciones de seguridad periódicas

**131.** ¿Qué es `supertest` en el contexto de Node.js?
- A) Una versión mejorada de Express
- B) Una librería para hacer peticiones HTTP a la app Express en tests sin levantar un servidor real
- C) Una herramienta para tests de carga
- D) Un cliente HTTP para peticiones de desarrollo

**132.** ¿Qué hace la cláusula `LIMIT` en SQL?
- A) Limita el tamaño máximo de una columna
- B) Limita el número de filas devueltas por la consulta
- C) Limita el número de usuarios concurrentes
- D) Limita el tiempo de ejecución de la consulta

**133.** ¿Qué es `prisma.usuario.count()`?
- A) Cuenta las propiedades del modelo usuario
- B) Devuelve el número total de registros en la tabla usuario
- C) Cuenta las relaciones del usuario
- D) Retorna el ID del último usuario

**134.** En una API REST, ¿qué formato suele tener la URL para acceder a los posts de un usuario?
- A) `/posts?userId=1`
- B) `/usuarios/1/posts`
- C) `/getPosts/1`
- D) `/usuarios-posts/1`

**135.** ¿Qué es el principio de mínimo privilegio en seguridad?
- A) Usar la versión más antigua de las dependencias para evitar bugs nuevos
- B) Dar a cada componente solo los permisos estrictamente necesarios para su función
- C) Minimizar el número de endpoints de la API
- D) Limitar el tamaño máximo de los tokens JWT

**136.** ¿Para qué sirve el middleware `compression` en Express?
- A) Para comprimir el código JavaScript del servidor
- B) Para comprimir las respuestas HTTP con gzip/brotli, reduciendo el tamaño de la respuesta
- C) Para comprimir las consultas a la base de datos
- D) Para comprimir los archivos subidos por el usuario

**137.** ¿Qué es `multer` en Express?
- A) Un middleware de autenticación
- B) Un middleware para gestionar la subida de archivos (`multipart/form-data`)
- C) Un validador de esquemas JSON
- D) Un gestor de sesiones

**138.** ¿Qué diferencia hay entre `findOne` y `findUnique` en Prisma?
- A) Son equivalentes
- B) `findUnique` requiere buscar por un campo único (@id o @unique); `findFirst` busca el primer que coincide con cualquier condición
- C) `findOne` es más rápido
- D) `findUnique` devuelve un array; `findOne` devuelve un objeto

**139.** ¿Cuándo usarías `upsert` en Prisma?
- A) Para actualizar o insertar: si el registro existe lo actualiza, si no existe lo crea
- B) Para hacer updates en cascada
- C) Para sincronizar dos bases de datos
- D) Para hacer un update y eliminar al mismo tiempo

**140.** ¿Qué es n8n en el contexto de automatización?
- A) Un framework de Node.js
- B) Una plataforma de automatización de flujos de trabajo low-code/no-code con webhooks y conectores
- C) Un gestor de bases de datos
- D) Un sistema de CI/CD

**141.** ¿Qué es un webhook?
- A) Una petición HTTP periódica que el cliente hace al servidor
- B) Una URL de la API que recibe peticiones HTTP cuando ocurre un evento en un sistema externo
- C) Un hook de React para peticiones web
- D) Un sistema de notificaciones push del servidor al cliente

**142.** ¿Qué hace `app.use(express.static('public'))`?
- A) Hace que la carpeta `public` sea privada
- B) Sirve archivos estáticos (HTML, CSS, imágenes) desde la carpeta `public`
- C) Comprime los archivos de la carpeta `public`
- D) Cachea los archivos de la carpeta `public`

**143.** ¿Qué es el patrón Service Layer en una API?
- A) Una capa de red entre el servidor y la base de datos
- B) Una capa que contiene la lógica de negocio, separada de los controllers (que orquestan) y los repositorios (acceso a datos)
- C) El middleware de autenticación de la API
- D) El conjunto de rutas de la API

**144.** ¿Qué hace `res.status(201).json(nuevoUsuario)` en Express?
- A) Valida que el nuevo usuario tenga los campos correctos y devuelve 201
- B) Envía una respuesta HTTP con código 201 y el objeto `nuevoUsuario` serializado como JSON
- C) Guarda el usuario en la base de datos y responde
- D) Devuelve el usuario en XML con código 201

**145.** ¿Qué es una "race condition" en el contexto de una API?
- A) Una competición entre endpoints para responder más rápido
- B) Una situación donde dos operaciones concurrentes interfieren entre sí produciendo resultados inesperados
- C) Un patrón de diseño para operaciones paralelas
- D) Un error de configuración de CORS

**146.** ¿Qué hace `prisma.usuario.update({ where: { id }, data: { nombre } })`?
- A) Crea un usuario con ese id si no existe
- B) Actualiza el campo `nombre` del usuario con ese id; lanza error si no existe
- C) Actualiza todos los usuarios
- D) Busca y devuelve el usuario con ese id

**147.** ¿Cuándo se usa `HTTP 204 No Content` como respuesta?
- A) Cuando no se encuentra el recurso
- B) Cuando la operación fue exitosa pero no hay cuerpo de respuesta que devolver (ej: DELETE exitoso)
- C) Cuando el servidor no tiene contenido disponible temporalmente
- D) Cuando el cliente envía un body vacío

**148.** ¿Qué es `express-async-errors`?
- A) Un framework de testing asíncrono para Express
- B) Una librería que parchea Express para que los errores lanzados en handlers async sean capturados automáticamente sin try/catch manual
- C) Un sistema de logging de errores asíncronos
- D) Una versión de Express con soporte nativo para async/await

**149.** ¿Qué hace `JSON.parse(process.env.ALLOWED_ORIGINS)` y cuándo podría fallar?
- A) Siempre funciona correctamente
- B) Parsea el string JSON de la variable de entorno; falla si la variable no está definida o no es JSON válido
- C) Solo falla si la variable tiene más de 255 caracteres
- D) Falla solo en producción

**150.** ¿Qué es el principio DRY en el desarrollo de software?
- A) Don't Repeat Yourself: evitar duplicación de lógica extrayendo código reutilizable
- B) Do Repeat Yourself: repetir código para mayor claridad
- C) Dynamic Resource Yielding: técnica de optimización de Node.js
- D) Database Relational Yield: principio de diseño de bases de datos

---

## SECCIÓN 3: PREGUNTAS DIFÍCILES (151–200)

**151.** ¿Qué problema tiene el siguiente código y cómo se soluciona?
```js
app.get('/usuarios/:id', async (req, res) => {
  const usuario = await prisma.usuario.findUnique({ where: { id: req.params.id } });
  res.json(usuario);
});
```
- A) El código es correcto
- B) `req.params.id` es un string, pero Prisma espera un número; hay que convertirlo con `parseInt()` o `Number()`; además falta try/catch
- C) `findUnique` no acepta parámetros dinámicos
- D) `async/await` no funciona con Express

**152.** ¿Qué problema de seguridad tiene este código?
```js
app.get('/usuarios', async (req, res) => {
  const { nombre } = req.query;
  const usuarios = await db.query(`SELECT * FROM usuarios WHERE nombre = '${nombre}'`);
  res.json(usuarios);
});
```
- A) El código es correcto y seguro
- B) SQL Injection: el input del usuario se concatena directamente en la consulta
- C) Solo hay un problema de rendimiento, no de seguridad
- D) XSS: el nombre se renderiza en el HTML

**153.** ¿Cuál es la solución correcta al problema anterior?
- A) Usar `encodeURIComponent(nombre)` antes de la consulta
- B) `db.query('SELECT * FROM usuarios WHERE nombre = $1', [nombre])`
- C) Validar que `nombre` tenga menos de 255 caracteres
- D) Usar `nombre.replace(/'/g, '')`

**154.** ¿Qué ocurre si no se configura correctamente la expiración de un JWT?
- A) El token nunca puede usarse
- B) Los tokens comprometidos (robados) permanecen válidos indefinidamente, ya que no hay forma de invalidarlos en arquitecturas stateless
- C) El servidor rechaza todos los tokens
- D) El cliente regenera el token automáticamente

**155.** ¿Cuál es el problema de almacenar JWTs en localStorage?
- A) localStorage no puede almacenar strings largos
- B) Vulnerable a ataques XSS: cualquier script malicioso en la página puede robar el token
- C) localStorage no está disponible en todos los navegadores
- D) No hay problema, es la práctica recomendada

**156.** ¿Qué ventaja tiene almacenar el JWT en una cookie HttpOnly?
- A) El JWT puede ser leído por JavaScript para renovarse
- B) JavaScript no puede leer cookies HttpOnly, protegiéndolas de ataques XSS
- C) Las cookies HttpOnly son más rápidas que localStorage
- D) Las cookies HttpOnly tienen mayor capacidad de almacenamiento

**157.** ¿Qué es un timing attack en el contexto de comparación de contraseñas?
- A) Un ataque que mide el tiempo de respuesta del servidor para determinar si una contraseña es parcialmente correcta
- B) Un ataque de fuerza bruta que envía miles de peticiones
- C) Un ataque que explota el timeout del servidor
- D) Un ataque que mide el tiempo de procesamiento de bcrypt

**158.** ¿Por qué `bcrypt.compare()` es resistente a timing attacks?
- A) Porque usa comparación de strings optimizada
- B) Porque usa una comparación de tiempo constante, independientemente de cuántos caracteres coincidan
- C) Porque es más lento que la comparación directa
- D) Porque genera un nuevo salt en cada comparación

**159.** En Prisma, ¿qué diferencia hay entre `delete` y `deleteMany`?
- A) Son equivalentes
- B) `delete` elimina un registro único buscado por campo único; `deleteMany` elimina múltiples registros según condición
- C) `deleteMany` es más rápido que `delete`
- D) `delete` elimina en cascada; `deleteMany` no

**160.** ¿Qué problema puede causar no cerrar las conexiones de base de datos?
- A) Ningún problema en producción
- B) Agotamiento del pool de conexiones: el servidor se queda sin conexiones disponibles, degradando el rendimiento o haciendo la app inaccesible
- C) Solo afecta al rendimiento de las consultas
- D) Las conexiones se cierran automáticamente siempre

**161.** ¿Qué es el N+1 problem en ORMs?
- A) Un error de tipado en Prisma
- B) Cuando se hace una consulta para obtener N registros y luego N consultas adicionales para obtener datos relacionados de cada uno, en lugar de un JOIN
- C) Cuando se insertan más de N registros a la vez
- D) Un problema de paginación en APIs con más de N páginas

**162.** ¿Cómo se soluciona el N+1 problem en Prisma?
- A) Aumentando el pool de conexiones
- B) Usando `include` o `select` en la consulta para obtener los datos relacionados en una sola query
- C) Usando transacciones
- D) Cachando los resultados de la primera consulta

**163.** ¿Qué hace el siguiente código?
```js
const wrapper = fn => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    next(err);
  }
};
```
- A) Crea un middleware de autenticación
- B) Crea un wrapper que envuelve handlers async y pasa errores al middleware de errores automáticamente
- C) Crea un middleware de rate limiting
- D) Crea una función de logging

**164.** ¿Qué es la idempotencia y cuáles métodos HTTP son idempotentes?
- A) La capacidad de ejecutar operaciones en paralelo; POST, PUT, DELETE
- B) La propiedad de que ejecutar la misma operación múltiples veces produce el mismo resultado; GET, PUT, DELETE son idempotentes; POST no
- C) La capacidad de revertir operaciones; solo GET
- D) La propiedad de que las operaciones son atómicas; todos los métodos HTTP

**165.** ¿Qué problema tiene este schema de Prisma y cómo se soluciona?
```prisma
model Post {
  id      Int    @id @default(autoincrement())
  titulo  String
  usuario Usuario
}
```
- A) No hay ningún problema
- B) Falta la clave foránea explícita: se necesita `usuarioId Int` y `@relation(fields: [usuarioId], references: [id])`
- C) `@id` no puede usarse con `@default`
- D) El tipo `String` no es válido en Prisma

**166.** ¿Qué son los índices compuestos y cuándo se usan?
- A) Índices que apuntan a múltiples bases de datos
- B) Índices sobre múltiples columnas, útiles cuando se consulta frecuentemente por combinación de esas columnas
- C) Índices automáticos que crea PostgreSQL
- D) Índices que reemplazan a las claves foráneas

**167.** ¿Qué hace `EXPLAIN ANALYZE` en PostgreSQL?
- A) Explica la estructura de la base de datos
- B) Muestra el plan de ejecución de una consulta y su coste real, útil para optimizar queries lentas
- C) Analiza el esquema en busca de errores
- D) Genera documentación automática de la base de datos

**168.** ¿Qué es un "deadlock" en bases de datos?
- A) Cuando una consulta tarda demasiado tiempo
- B) Cuando dos transacciones se bloquean mutuamente esperando que la otra libere un recurso que necesita
- C) Cuando la base de datos se queda sin espacio en disco
- D) Cuando se excede el número máximo de conexiones

**169.** ¿Qué es la normalización en bases de datos relacionales?
- A) Convertir datos a un formato estándar
- B) Un proceso de diseño para eliminar redundancia y dependencias indeseables organizando datos en tablas relacionadas
- C) Comprimir los datos para ahorrar espacio
- D) Normalizar los nombres de las columnas a un estándar

**170.** ¿Cuándo es apropiado desnormalizar una base de datos?
- A) Nunca, la normalización siempre es mejor
- B) Cuando el rendimiento de lectura es crítico y se sacrifica algo de consistencia/espacio para evitar JOINs costosos
- C) Cuando la base de datos tiene menos de 1000 registros
- D) Cuando se usa un ORM como Prisma

**171.** ¿Qué hace `prisma.usuario.findMany({ take: 10, skip: 20, orderBy: { createdAt: 'desc' } })`?
- A) Devuelve los primeros 10 usuarios, omite los 20 primeros, ordenados por fecha descendente (página 3)
- B) Devuelve 20 usuarios con límite de 10
- C) Devuelve los 10 usuarios más recientes
- D) Lanza un error porque `take` y `skip` no son compatibles

**172.** ¿Qué es el patrón Circuit Breaker en microservicios?
- A) Un interruptor de seguridad que corta la electricidad al servidor
- B) Un patrón que detecta fallos en servicios externos y evita hacer llamadas adicionales hasta que el servicio se recupere
- C) Un patrón de autenticación para microservicios
- D) Un patrón de routing para balanceo de carga

**173.** ¿Qué es `pg_dump` en PostgreSQL?
- A) Un comando para limpiar registros duplicados
- B) Una herramienta para hacer backups de bases de datos PostgreSQL
- C) Una extensión para mejorar el rendimiento
- D) El proceso que gestiona las conexiones

**174.** ¿Cuál es la diferencia entre variables de entorno de desarrollo y producción?
- A) No hay diferencia, se usan las mismas
- B) Las de producción incluyen credenciales reales, URLs de bases de datos de producción; las de desarrollo usan credenciales locales/fake. Nunca deben compartirse
- C) Las de producción son siempre más cortas
- D) Las de desarrollo incluyen el token JWT en texto plano

**175.** ¿Qué es un "graceful shutdown" en un servidor Node.js?
- A) Un restart automático al detectar errores
- B) Cerrar el servidor de forma ordenada: dejar de aceptar nuevas conexiones, completar las en curso, cerrar conexiones de BD
- C) Un modo de depuración para cerrar el servidor sin perder logs
- D) La función de auto-restart de pm2

**176.** ¿Qué hace el siguiente código y cuál es su propósito?
```js
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  server.close(() => process.exit(0));
});
```
- A) Reinicia el servidor al recibir la señal SIGTERM
- B) Implementa un graceful shutdown: desconecta la BD y cierra el servidor ordenadamente al recibir SIGTERM
- C) Registra el evento SIGTERM en los logs
- D) Previene que el servidor se cierre con SIGTERM

**177.** ¿Qué son las "environment-specific configurations" y cómo se gestionan en Node.js?
- A) Configuraciones que cambia el usuario final
- B) Configuraciones diferentes para cada entorno (dev, test, prod) gestionadas mediante variables de entorno y archivos `.env` por entorno
- C) Configuraciones automáticas de Node.js
- D) Plugins específicos por sistema operativo

**178.** ¿Qué es HSTS (HTTP Strict Transport Security)?
- A) Un protocolo de autenticación
- B) Un header de seguridad que indica a los navegadores que solo se comuniquen con el servidor via HTTPS, incluso si el usuario escribe HTTP
- C) Un sistema de caché HTTP
- D) Una versión mejorada de HTTPS

**179.** ¿Qué hace el siguiente test y qué verifica?
```js
describe('POST /usuarios', () => {
  it('devuelve 400 con email inválido', async () => {
    const res = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Ana', email: 'no-es-email' });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
```
- A) Un test unitario del modelo de usuario
- B) Un test de integración que verifica que el endpoint devuelve 400 cuando se envía un email inválido
- C) Un test de carga que envía múltiples peticiones
- D) Un test de autenticación

**180.** ¿Qué es una "migration rollback" y cuándo se usa?
- A) Una migración que se ejecuta en orden inverso
- B) Revertir una migración aplicada, deshaciendo los cambios en el esquema de la base de datos
- C) Una migración de datos de un servidor a otro
- D) Restaurar un backup de la base de datos

**181.** ¿Qué problema tiene este código de autenticación?
```js
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.usuario.findUnique({ where: { email } });
  if (user.password === password) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});
```
- A) El código es correcto
- B) Múltiples problemas: comparación de password en texto plano (debería usar bcrypt), sin try/catch (crash si user es null), JWT sin expiración
- C) Solo falta el try/catch
- D) El JWT debería firmarse con clave asimétrica siempre

**182.** ¿Qué es RBAC (Role-Based Access Control)?
- A) Un protocolo de autenticación basado en roles
- B) Un modelo de autorización donde los permisos se asignan a roles y los usuarios tienen roles
- C) Un sistema de cifrado basado en claves públicas
- D) Un framework de testing de acceso a datos

**183.** ¿Qué diferencia hay entre `LEFT JOIN` y `INNER JOIN` para un caso real?
```sql
SELECT u.nombre, COUNT(p.id) as num_posts
FROM usuarios u
LEFT JOIN posts p ON p.usuario_id = u.id
GROUP BY u.id, u.nombre
```
- A) No devuelve usuarios sin posts
- B) Devuelve todos los usuarios incluyendo los que no tienen posts (con 0 en num_posts), gracias al LEFT JOIN
- C) Solo devuelve el último post de cada usuario
- D) Lanza un error si hay usuarios sin posts

**184.** ¿Qué es el patrón "Dependency Injection" y cómo ayuda al testing?
- A) Un patrón para inyectar código en producción
- B) Pasar las dependencias (BD, servicios) como parámetros en lugar de instanciarlas internamente, facilitando reemplazarlas con mocks en tests
- C) Un patrón específico de TypeScript
- D) Un framework de inyección de código automático

**185.** ¿Qué hace este decorador de TypeScript y en qué contexto se usa?
```ts
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = async function(...args: any[]) {
    console.log(`${key} called with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}
```
- A) Es un middleware de Express
- B) Es un decorador de método que añade logging automático cuando se llama al método decorado
- C) Es un wrapper de test
- D) Es un generador de tipos TypeScript

**186.** ¿Qué es la inyección de headers maliciosos (Header Injection) y cómo se previene?
- A) Un ataque que modifica los headers de respuesta para redirigir usuarios; se previene sanitizando los valores antes de usarlos en headers
- B) Un ataque de SQL Injection sobre headers HTTP
- C) Un ataque de XSS específico de headers
- D) Se previene usando HTTPS

**187.** ¿Por qué es un error usar `console.log` para logging en producción?
- A) `console.log` es bloqueante
- B) `console.log` no tiene niveles (info/warn/error), no soporta formatos estructurados (JSON), y dificulta filtrar logs en sistemas de monitorización
- C) `console.log` no funciona en Node.js
- D) Solo es un problema de rendimiento menor

**188.** ¿Qué es un "connection pool" en bases de datos?
- A) Un tipo de JOIN en PostgreSQL
- B) Un conjunto de conexiones a la base de datos reutilizables, evitando el coste de crear una nueva conexión por cada petición
- C) Un pool de replicas de lectura
- D) Un sistema de caché de consultas

**189.** ¿Qué hace `SELECT FOR UPDATE` en PostgreSQL?
- A) Selecciona registros solo para lectura
- B) Bloquea los registros seleccionados hasta que la transacción termine, previniendo modificaciones concurrentes
- C) Actualiza todos los registros seleccionados
- D) Crea un lock de tabla completa

**190.** ¿Qué es el "optimistic locking" vs "pessimistic locking"?
- A) Optimistic: bloquea el recurso al leerlo; Pessimistic: asume que no habrá conflictos
- B) Optimistic: asume que no habrá conflictos y verifica al actualizar (con campo version); Pessimistic: bloquea el recurso al leerlo
- C) Son dos tipos de índices de base de datos
- D) Son dos estrategias de caché

**191.** ¿Qué es el "thundering herd problem" en APIs?
- A) Un problema de seguridad de fuerza bruta
- B) Cuando múltiples clientes hacen peticiones simultáneas al mismo recurso después de que la caché expire, sobrecargan el servidor
- C) Un problema de rendimiento en bucles de Node.js
- D) Un ataque DDoS específico de APIs

**192.** ¿Qué hace `prisma.usuario.upsert({ where: {email}, update: {...}, create: {...} })`?
- A) Actualiza el usuario si existe, lanza error si no existe
- B) Si existe un usuario con ese email lo actualiza; si no existe lo crea
- C) Crea el usuario y luego lo actualiza
- D) Solo actualiza usuarios existentes

**193.** ¿Cuál es la diferencia entre `throw new Error('msg')` y `next(new Error('msg'))` en Express?
- A) Son equivalentes en Express
- B) En handlers síncronos ambos funcionan; en handlers async hay que usar `next(error)` o el error no llegará al middleware de errores en Express 4
- C) `throw` es para errores de validación; `next` es para errores del servidor
- D) `throw` solo funciona en middleware; `next` en route handlers

**194.** ¿Qué es el principio SOLID y cuál es el más relevante para diseñar controladores en Node.js?
- A) Solo aplica a lenguajes orientados a objetos como Java
- B) Single Responsibility Principle (S): cada módulo/clase debería tener una sola razón para cambiar. Un controlador solo orquesta; la lógica de negocio va al servicio
- C) Dependency Inversion Principle (D) es el más relevante
- D) SOLID no aplica a Node.js

**195.** ¿Qué hace el siguiente código de middleware y cuándo podría ser problemático?
```js
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  next();
});
```
- A) Es un middleware de compresión
- B) Cachea TODAS las respuestas durante 1 hora, incluyendo datos privados de usuario que no deberían cachearse
- C) Solo afecta a respuestas de archivos estáticos
- D) Es la configuración correcta para una API

**196.** ¿Cuándo usarías Redis junto con una API Node.js?
- A) Como sustituto de PostgreSQL
- B) Para caché de respuestas, gestión de sesiones, rate limiting o colas de tareas, aprovechando su velocidad en memoria
- C) Solo para almacenar archivos multimedia
- D) Como alternativa a JWT para autenticación

**197.** ¿Qué problema tiene el siguiente seed de Prisma y cómo se arregla?
```js
async function main() {
  await prisma.usuario.create({ data: { email: 'admin@test.com', nombre: 'Admin' } });
  await prisma.usuario.create({ data: { email: 'admin@test.com', nombre: 'Admin2' } });
}
```
- A) No hay ningún problema
- B) Si el email tiene constraint `@unique`, el segundo `create` fallará; usar `upsert` o limpiar la tabla con `deleteMany` antes del seed
- C) Solo falta un `await` en el primero
- D) El seed no puede crear múltiples usuarios

**198.** ¿Qué es un "prepared statement" y cómo lo usa Prisma internamente?
- A) Una consulta SQL que se prepara en el código antes de ejecutarse
- B) Una consulta SQL precompilada con parámetros placeholder que el motor de BD reemplaza de forma segura, previniendo SQL injection; Prisma usa esto automáticamente bajo el capó
- C) Un tipo especial de migración
- D) Una caché de consultas repetidas

**199.** ¿Qué hace `app.use('/api', (req, res, next) => { if (req.headers['x-api-key'] !== process.env.API_KEY) return res.status(401).json({error:'Unauthorized'}); next(); })`?
- A) Requiere un token JWT para todas las rutas `/api`
- B) Implementa autenticación por API Key para todas las rutas con prefijo `/api`
- C) Bloquea todas las rutas `/api` en desarrollo
- D) Requiere HTTPS para rutas `/api`

**200.** ¿Cuáles son las principales diferencias entre una arquitectura monolítica y una de microservicios para una API?
- A) Los microservicios son siempre mejores
- B) Monolito: todo en una app, más simple de desarrollar y desplegar pero escala como un todo. Microservicios: servicios independientes que escalan individualmente, mayor complejidad operativa pero mejor mantenibilidad a gran escala
- C) No hay diferencia real de rendimiento
- D) Los microservicios siempre usan más memoria
