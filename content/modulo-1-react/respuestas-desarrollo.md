# Respuestas — Examen de Desarrollo — Módulo 1: React

---

## Sección 1 — Preguntas Fáciles

---

## Pregunta 1 — JSX, componentes funcionales y props

**JSX** es una extensión de sintaxis de JavaScript que permite escribir marcado HTML-like dentro de JS. Babel lo transforma en llamadas a `React.createElement()`. No es HTML: es JS con azúcar sintáctico.

**Componente funcional vs clase:**
- **Funcional** (moderno): función que recibe props y retorna JSX. Soporta hooks. Es el estándar actual.
- **Clase** (legacy): extiende `React.Component`, tiene constructor y método `render()`. Evitar en código nuevo.

**Props**: datos inmutables que el componente padre pasa al hijo. El hijo no debe modificarlas.

```jsx
// Componente funcional Tarjeta con props tipadas en TypeScript
interface TarjetaProps {
  titulo: string;
  descripcion: string;
  imagen?: string; // prop opcional con '?'
}

function Tarjeta({ titulo, descripcion, imagen }: TarjetaProps) {
  return (
    <article className="tarjeta">
      {imagen && <img src={imagen} alt={titulo} />}
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </article>
  );
}

// Uso desde el componente padre
function App() {
  return (
    <div>
      <Tarjeta
        titulo="Bienvenido"
        descripcion="Esta es mi primera tarjeta"
        imagen="/foto.jpg"
      />
      <Tarjeta
        titulo="Sin imagen"
        descripcion="La prop imagen es opcional"
        // imagen no se pasa → el condicional {imagen && ...} no renderiza nada
      />
    </div>
  );
}
```

**Puntos clave:**
- JSX debe tener un único elemento raíz (o Fragment `<> </>`)
- Las expresiones JavaScript en JSX van entre llaves `{}`
- Atributos HTML cambian nombre: `class` → `className`, `for` → `htmlFor`
- Las props fluyen siempre hacia abajo (de padre a hijo, nunca al revés)

---

## Pregunta 2 — Box Model CSS

El box model describe cómo el navegador calcula el espacio que ocupa un elemento. Cada elemento es una caja con cuatro capas:

1. **Content**: el contenido real (texto, imagen, etc.)
2. **Padding**: espacio entre el contenido y el borde
3. **Border**: el borde del elemento
4. **Margin**: espacio exterior que separa el elemento de sus vecinos

**`box-sizing: content-box`** (valor por defecto):
- `width`/`height` definen solo el content
- El tamaño real = content + padding + border

**`box-sizing: border-box`** (recomendado):
- `width`/`height` incluyen content + padding + border
- El tamaño real coincide exactamente con el valor declarado

```css
/* Best practice global */
*, *::before, *::after {
  box-sizing: border-box;
}

.caja {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  /* border-box: ocupa exactamente 300px */
  /* content-box: ocupa 300+40+4 = 344px */
}
```

**Puntos clave:** El margin nunca forma parte del tamaño del elemento pero sí afecta al espacio que ocupa en el flujo. Los márgenes de elementos adyacentes pueden colapsar (margin collapsing).

---

## Pregunta 3 — Flexbox vs CSS Grid

| | Flexbox | Grid |
|---|---|---|
| Dimensión | Una dimensión (fila o columna) | Dos dimensiones (filas y columnas) |
| Uso ideal | Alinear items en una dirección | Layouts completos 2D |
| Control | En el elemento flex | En el contenedor grid |

**Usa Flexbox cuando:** necesitas alinear o distribuir items en una sola dirección (navbar, botones, tarjetas en fila).

**Usa Grid cuando:** diseñas layouts complejos donde necesitas control sobre filas y columnas a la vez (page layout, galería de imágenes).

```css
/* Flexbox: navbar con items alineados */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Grid: layout de página con header, sidebar, main, footer */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 40px;
  min-height: 100vh;
}
```

---

## Pregunta 4 — Hoisting en JavaScript

El hoisting es el comportamiento de JavaScript de mover las declaraciones al tope de su scope antes de ejecutar el código.

- **`var`**: se eleva la declaración (no la inicialización). Valor `undefined` antes de la asignación.
- **`let`/`const`**: se elevan pero quedan en la "Temporal Dead Zone" (TDZ) — acceder antes de la declaración lanza `ReferenceError`.
- **Funciones declaradas**: se elevan completas (declaración + cuerpo). Pueden usarse antes de declararse.
- **Funciones expresadas** (`const fn = () => {}`): no se elevan como función, solo como variable.

```js
// Bug por hoisting con var
console.log(x); // undefined (no ReferenceError)
var x = 5;

// Bug clásico en bucles
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime 3, 3, 3 — porque var es function-scoped y comparte la misma i

// Solución con let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime 0, 1, 2 — cada iteración tiene su propia i

// Funciones: funcionan antes de declararse
saludar(); // "Hola"
function saludar() { console.log("Hola"); }

// Expresiones de función: NO
greet(); // TypeError: greet is not a function
var greet = function() { console.log("Hi"); };
```

---

## Pregunta 5 — Promises y async/await

Una Promise es un objeto que representa el resultado futuro de una operación asíncrona. Tiene tres estados: **pending**, **fulfilled**, **rejected**.

```js
// Encadenamiento con .then()
fetch('/api/users')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .then(users => console.log(users))
  .catch(err => console.error(err));

// Mismo flujo con async/await
async function loadUsers() {
  try {
    const res = await fetch('/api/users');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();
    return users;
  } catch (err) {
    console.error('Error cargando usuarios:', err);
    throw err; // re-lanzar si el llamador necesita saberlo
  }
}

// Promise.all: espera a TODAS (falla si una falla)
async function loadDashboard() {
  const [users, products, orders] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/products').then(r => r.json()),
    fetch('/api/orders').then(r => r.json()),
  ]);
  return { users, products, orders };
}

// Promise.allSettled: espera a todas independientemente del resultado
async function loadWithFallback() {
  const results = await Promise.allSettled([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/broken-endpoint').then(r => r.json()),
  ]);
  results.forEach(result => {
    if (result.status === 'fulfilled') console.log(result.value);
    else console.warn('Falló:', result.reason);
  });
}
```

---

## Sección 2 — Preguntas Medias

---

## Pregunta 6 — Event Loop

JavaScript es **single-threaded**: ejecuta un solo bloque de código a la vez. El Event Loop coordina cómo se gestionan las operaciones asíncronas.

**Componentes:**
- **Call Stack**: pila donde se ejecutan las funciones síncronas (LIFO)
- **Web APIs**: el navegador gestiona timers, fetch, DOM events fuera del hilo JS
- **Task Queue (Macrotask)**: cola para callbacks de setTimeout, setInterval, eventos DOM
- **Microtask Queue**: cola de alta prioridad para callbacks de Promises (.then), queueMicrotask
- **Event Loop**: comprueba continuamente si el call stack está vacío; si lo está, procesa todas las microtasks primero, luego una macrotask

**Orden de ejecución:**
1. Código síncrono (call stack)
2. Todas las microtasks (Promises)
3. Una macrotask (setTimeout, etc.)
4. Repetir desde 2

```js
console.log('1');          // síncrono

setTimeout(() => {
  console.log('2');        // macrotask
}, 0);

Promise.resolve().then(() => {
  console.log('3');        // microtask
});

console.log('4');          // síncrono

// Output: 1, 4, 3, 2
```

Esto explica por qué `setTimeout(fn, 0)` no es inmediato: siempre va después de las Promises pendientes.

---

## Pregunta 7 — Ciclo de vida con hooks

```jsx
import { useState, useEffect } from 'react';

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  // componentDidMount: array vacío []
  useEffect(() => {
    console.log('Componente montado');
    return () => console.log('Componente desmontado'); // componentWillUnmount
  }, []);

  // componentDidUpdate: se ejecuta cuando cambia `activo`
  useEffect(() => {
    if (!activo) return;

    const interval = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    // Función de limpieza: se llama antes del próximo efecto o al desmontar
    return () => clearInterval(interval); // evita memory leak
  }, [activo]); // dependencia: activo

  return (
    <div>
      <p>{segundos}s</p>
      <button onClick={() => setActivo(a => !a)}>
        {activo ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={() => { setActivo(false); setSegundos(0); }}>
        Reset
      </button>
    </div>
  );
}
```

**Equivalencias:**
| Clase | Hook |
|---|---|
| `componentDidMount` | `useEffect(() => {}, [])` |
| `componentDidUpdate` | `useEffect(() => {}, [dep])` |
| `componentWillUnmount` | `return () => {}` dentro de useEffect |
| `componentDidUpdate` sin condición | `useEffect(() => {})` (sin array) |

---

## Pregunta 8 — Context API

```jsx
// contexts/ThemeContext.jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');
  const toggleTema = () => setTema(t => t === 'claro' ? 'oscuro' : 'claro');

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTema() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTema debe usarse dentro de ThemeProvider');
  return ctx;
}

// App.jsx
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

// Header.jsx — consume el contexto
function Header() {
  const { tema, toggleTema } = useTema();
  return (
    <header className={tema}>
      <button onClick={toggleTema}>Cambiar a {tema === 'claro' ? 'oscuro' : 'claro'}</button>
    </header>
  );
}
```

**Limitaciones de Context API:**
- Cualquier cambio en el valor del contexto re-renderiza TODOS los consumidores, incluso si no usan el valor que cambió
- No está optimizada para estado que cambia muy frecuentemente (ej: posición del mouse)
- Zustand/Redux ofrecen suscripciones selectivas: solo re-renderiza el componente que usa el trozo de estado que cambió

---

## Pregunta 9 — React Router v6

```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><App /></BrowserRouter>
);

// App.jsx — configuración de rutas
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>          {/* ruta layout */}
        <Route index element={<Home />} />            {/* ruta índice */}
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="usuarios/:id" element={<UsuarioDetalle />} /> {/* parámetro dinámico */}
        <Route path="admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />   {/* ruta anidada */}
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />    {/* 404 */}
      </Route>
    </Routes>
  );
}

// UsuarioDetalle.jsx — acceso a parámetros
import { useParams, useNavigate } from 'react-router-dom';

function UsuarioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Usuario {id}</h1>
      <button onClick={() => navigate('/usuarios')}>Volver</button>
      <button onClick={() => navigate(-1)}>Atrás</button>
    </div>
  );
}

// Layout.jsx — Outlet renderiza los hijos
import { Outlet, Link } from 'react-router-dom';
function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/usuarios">Usuarios</Link>
      </nav>
      <Outlet />
    </>
  );
}
```

**`<Link>` vs `useNavigate`:** Link es declarativo en JSX; useNavigate es imperativo para navegación programática (ej: después de un submit de formulario o según lógica condicional).

---

## Pregunta 10 — TypeScript con React

```tsx
// types.ts
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

// UserCard.tsx
import { useState, useRef } from 'react';

interface UserCardProps {
  usuario: Usuario;
  titulo?: string;                          // prop opcional
  onEliminar: (id: number) => void;         // función callback tipada
  onActualizar: (usuario: Usuario) => void;
}

function UserCard({ usuario, titulo = 'Usuario', onEliminar, onActualizar }: UserCardProps) {
  const [editando, setEditando] = useState<boolean>(false);
  const [nombre, setNombre] = useState<string>(usuario.nombre);
  const inputRef = useRef<HTMLInputElement>(null); // ref tipado al DOM

  const handleGuardar = () => {
    onActualizar({ ...usuario, nombre });
    setEditando(false);
  };

  const handleEditar = () => {
    setEditando(true);
    // Foco programático al input después de renderizar
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div>
      <h3>{titulo}</h3>
      {editando ? (
        <>
          <input
            ref={inputRef}
            value={nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
          />
          <button onClick={handleGuardar}>Guardar</button>
        </>
      ) : (
        <>
          <p>{usuario.nombre}</p>
          <button onClick={handleEditar}>Editar</button>
          <button onClick={() => onEliminar(usuario.id)}>Eliminar</button>
        </>
      )}
    </div>
  );
}
```

---

## Pregunta 11 — Testing con Vitest y RTL

```jsx
// EmailForm.jsx
function EmailForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Email inválido');
      return;
    }
    setError('');
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

// EmailForm.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import EmailForm from './EmailForm';

describe('EmailForm', () => {
  it('muestra error con email inválido', async () => {
    render(<EmailForm onSubmit={vi.fn()} />);

    await userEvent.type(screen.getByLabelText('Email'), 'no-es-email');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(screen.getByRole('alert')).toHaveTextContent('Email inválido');
  });

  it('llama a onSubmit con email válido', async () => {
    const mockSubmit = vi.fn();
    render(<EmailForm onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

    expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
```

---

## Sección 3 — Preguntas Difíciles

---

## Pregunta 12 — Arquitectura To-Do App

**Componentes:**
```
App
├── Header (título)
├── AddTask (formulario de nueva tarea)
├── FilterBar (botones: todas | pendientes | completadas)
├── TaskList (lista filtrada)
│   └── TaskItem (tarea individual con checkbox y botón borrar)
└── Footer (contador de pendientes)
```

**Estado:**
```jsx
// En App.jsx — el estado vive en el ancestro común
const [tareas, setTareas] = useState(() => {
  const saved = localStorage.getItem('tareas');
  return saved ? JSON.parse(saved) : [];
});
const [filtro, setFiltro] = useState('todas'); // 'todas' | 'pendientes' | 'completadas'

// Sincronizar con localStorage
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}, [tareas]);

// Tareas filtradas (derivado, no estado)
const tareasFiltradas = tareas.filter(t => {
  if (filtro === 'pendientes') return !t.completada;
  if (filtro === 'completadas') return t.completada;
  return true;
});

// Handlers que se pasan como props
const añadirTarea = (texto) => setTareas(prev => [
  ...prev,
  { id: crypto.randomUUID(), texto, completada: false }
]);

const toggleTarea = (id) => setTareas(prev =>
  prev.map(t => t.id === id ? { ...t, completada: !t.completada } : t)
);

const eliminarTarea = (id) => setTareas(prev => prev.filter(t => t.id !== id));
```

**Hooks usados:** `useState`, `useEffect` (localStorage)
**Principio clave:** El estado de las tareas vive en `App` (lifting state up) porque múltiples componentes lo necesitan.

---

## Pregunta 13 — Optimización de rendimiento

```jsx
// PROBLEMA: sin optimización
function Catalogo({ productos, onComprar }) {
  // 1. filtrarProductos se recrea en CADA render
  const filtrados = productos.filter(p => p.disponible);

  // 2. calcularEstadisticas es costoso y se ejecuta en CADA render
  const stats = calcularEstadisticas(filtrados);

  // 3. handler es nueva función en cada render → Tarjeta siempre re-renderiza
  const handleComprar = (id) => onComprar(id);

  return filtrados.map(p => <Tarjeta key={p.id} producto={p} onComprar={handleComprar} />);
}

// SOLUCIÓN: con optimizaciones
const Tarjeta = React.memo(function Tarjeta({ producto, onComprar }) {
  return <div onClick={() => onComprar(producto.id)}>{producto.nombre}</div>;
});

function Catalogo({ productos, onComprar }) {
  // useMemo: solo recalcula cuando `productos` cambia
  const filtrados = useMemo(
    () => productos.filter(p => p.disponible),
    [productos]
  );

  // useMemo: solo recalcula cuando `filtrados` cambia
  const stats = useMemo(
    () => calcularEstadisticas(filtrados),
    [filtrados]
  );

  // useCallback: misma referencia de función entre renders
  const handleComprar = useCallback(
    (id) => onComprar(id),
    [onComprar]
  );

  return filtrados.map(p => <Tarjeta key={p.id} producto={p} onComprar={handleComprar} />);
}
```

**Regla de oro:** Medir antes de optimizar. `React.memo`, `useMemo`, `useCallback` tienen coste de memorización. Solo optimizar cuando hay un problema medible de rendimiento.

---

## Pregunta 14 — Custom hook `useFetch`

```jsx
import { useState, useEffect, useCallback } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (signal) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, { ...options, signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      if (err.name === 'AbortError') return; // cancelación esperada, no es un error
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort(); // cancelar al desmontar
  }, [fetchData]);

  return { data, loading, error };
}

// Uso
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users?.map(u => <li key={u.id}>{u.nombre}</li>)}</ul>;
}
```

---

## Pregunta 15 — Patrones de diseño en React

```jsx
// 1. Higher-Order Component (HOC)
// Caso de uso: añadir comportamiento transversal (auth, logging, analytics)
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <Spinner />;
    return <Component {...props} />;
  };
}
const UserListWithLoading = withLoading(UserList);

// 2. Render Props
// Caso de uso: compartir lógica stateful de forma flexible
function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)} {/* el consumidor decide qué renderizar */}
    </div>
  );
}
// Uso:
<MouseTracker render={({ x, y }) => <p>Posición: {x}, {y}</p>} />

// 3. Custom Hook
// Caso de uso: reutilizar lógica con estado entre componentes
function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return pos;
}
// Uso:
function MiComponente() {
  const { x, y } = useMousePosition();
  return <p>{x}, {y}</p>;
}
```

**En 2024:** Los Custom Hooks son el patrón preferido porque son más simples, composables y testables. Los HOCs siguen siendo útiles para librerías. Los Render Props han sido casi completamente reemplazados por hooks.

---

## Pregunta 16 — Análisis y corrección de código

**Problemas identificados:**

1. **`useEffect` sin array de dependencias** → se ejecuta en CADA render → loop infinito de fetches
2. **No hay manejo de errores** en el fetch
3. **No hay estado loading** → UI vacía sin feedback durante la carga
4. **Uso del índice como `key`** → bugs al filtrar/reordenar
5. **`calcularScore` se ejecuta en cada render** aunque `filtered` no haya cambiado → rendimiento
6. **No hay cancelación** del fetch al desmontar → posible memory leak

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);  // FIX 3
  const [error, setError] = useState(null);       // FIX 2

  useEffect(() => {
    const controller = new AbortController();     // FIX 6

    setLoading(true);
    fetch('https://api.example.com/users', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []); // FIX 1: array vacío para ejecutar solo al montar

  // FIX 5: memorizar cálculo costoso
  const expensiveCalc = useMemo(
    () => users
      .filter(u => u.name.includes(search))
      .map(u => ({ ...u, score: calcularScore(u) })),
    [users, search]
  );

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {expensiveCalc.map(u => (
        <div key={u.id}>{u.name}: {u.score}</div>  // FIX 4: usar u.id como key
      ))}
    </div>
  );
}
```
