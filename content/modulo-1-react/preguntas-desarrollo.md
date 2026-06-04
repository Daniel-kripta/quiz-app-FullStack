# Examen de Desarrollo — Módulo 1: React (Frontend Development)

> Responde con detalle: incluye explicaciones conceptuales y ejemplos de código donde sea relevante. Se valorará la claridad, la corrección técnica y la capacidad de razonar sobre las decisiones de diseño.

---

## Sección 1 — Preguntas Fáciles

**Pregunta 1.**
¿Qué es JSX y para qué sirve en React? Explica la diferencia entre un componente funcional y un componente de clase. ¿Qué son las `props` y cómo se pasan de padre a hijo? Escribe un componente funcional `Tarjeta` que reciba `titulo` (string), `descripcion` (string) e `imagen` (string, opcional) como props y los renderice en un elemento `<article>`.

---

**Pregunta 2.**
Explica el modelo de caja (box model) de CSS. ¿Qué propiedades lo componen y cómo afectan al tamaño final de un elemento? ¿Cuál es la diferencia entre `box-sizing: content-box` y `box-sizing: border-box`?

---

**Pregunta 3.**
Describe las diferencias entre Flexbox y CSS Grid. ¿En qué situaciones usarías cada uno? Pon un ejemplo de código CSS donde uno sea claramente más apropiado que el otro.

---

**Pregunta 4.**
Explica qué es el hoisting en JavaScript y cómo afecta a `var`, `let`, `const` y a las declaraciones de funciones. Muestra un ejemplo de código que ilustre un comportamiento inesperado causado por el hoisting.

---

**Pregunta 5.**
¿Qué son las Promises en JavaScript? Explica los estados posibles de una Promise y demuestra con código cómo encadenar múltiples operaciones asíncronas usando `Promise.all`, `async/await` y manejo de errores con `try/catch`.

---

## Sección 2 — Preguntas Medias

**Pregunta 6.**
Explica qué es el Event Loop en JavaScript. ¿Cómo gestiona JavaScript las operaciones asíncronas siendo un lenguaje single-threaded? Describe el rol del call stack, la task queue y las microtasks (Promises).

---

**Pregunta 7.**
Explica el ciclo de vida de un componente funcional de React usando hooks. ¿Cómo reemplaza `useEffect` a los métodos de ciclo de vida de los componentes de clase (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)? Escribe un ejemplo con un intervalo de tiempo que se limpia correctamente.

---

**Pregunta 8.**
¿Qué es el Context API de React y cuándo deberías usarlo? Implementa un sistema sencillo de tema (claro/oscuro) usando `createContext`, `Provider` y `useContext`. Explica las limitaciones de Context API frente a una librería de gestión de estado como Zustand o Redux.

---

**Pregunta 9.**
Explica React Router v6: ¿cómo se configura el enrutamiento básico? Muestra cómo implementar rutas anidadas, rutas con parámetros dinámicos, una ruta 404 y navegación programática. ¿Cuál es la diferencia entre `<Link>` y `useNavigate`?

---

**Pregunta 10.**
¿Qué es TypeScript y qué ventajas aporta en proyectos React? Escribe un componente React tipado con TypeScript que:
- Reciba props tipadas (incluyendo una prop opcional y una función callback)
- Use `useState` con el tipo correcto
- Use `useRef` apuntando a un elemento del DOM

---

**Pregunta 11.**
¿Qué es el testing en frontend y por qué es importante? Explica la diferencia entre tests unitarios, de integración y end-to-end. Escribe un test con Vitest y React Testing Library para un componente de formulario que valide el email y muestre un mensaje de error.

---

## Sección 3 — Preguntas Difíciles

**Pregunta 12.**
Diseña la arquitectura de componentes para una aplicación de lista de tareas (To-Do App) con React que incluya:
- Añadir tareas
- Marcar como completadas
- Filtrar por estado (todas, pendientes, completadas)
- Persistencia en `localStorage`

Describe qué componentes crearías, dónde viviría el estado y qué hooks utilizarías.

---

**Pregunta 13.**
Explica las técnicas de optimización de rendimiento en React. ¿Cuándo y cómo se usan `React.memo`, `useMemo` y `useCallback`? Da un ejemplo concreto donde la ausencia de estas optimizaciones cause un problema de rendimiento y muestra cómo solucionarlo.

---

**Pregunta 14.**
Implementa un custom hook `useFetch` que gestione el ciclo completo de una petición HTTP: loading, data, error. El hook debe:
- Cancelar la petición si el componente se desmonta (usando AbortController)
- Aceptar dependencias para re-lanzar la petición
- Ser reutilizable en cualquier componente

---

**Pregunta 15.**
¿Qué son los patrones de diseño en React? Explica con ejemplos de código los patrones Higher-Order Component (HOC), Render Props y Custom Hooks. ¿Cuándo preferirías uno sobre el otro en 2024?

---

**Pregunta 16.**
Analiza el siguiente código e identifica todos los problemas (bugs, antipatrones, problemas de rendimiento). Proporciona una versión corregida y explicada:

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  });

  const filtered = users.filter(u => u.name.includes(search));
  const expensiveCalc = filtered.map(u => ({ ...u, score: calcularScore(u) }));

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {expensiveCalc.map((u, i) => (
        <div key={i}>{u.name}: {u.score}</div>
      ))}
    </div>
  );
}
```
