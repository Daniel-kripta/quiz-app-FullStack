# Respuestas — Examen Tipo Test — Módulo 1: React

---

## SECCIÓN 1: BÁSICAS (1–70)

| Nº | Respuesta | Pregunta (resumen) |
|----|-----------|-------------------|
| 1 | **B** | ¿Qué significa HTML? → HyperText Markup Language |
| 2 | **C** | ¿Etiqueta para título más importante? → `<h1>` |
| 3 | **B** | ¿Etiqueta para crear un enlace? → `<a>` |
| 4 | **C** | ¿Propiedad CSS para color de texto? → `color` |
| 5 | **C** | ¿Valor display para flexbox? → `display: flex` |
| 6 | **B** | ¿Propiedad para espacio entre contenido y borde? → `padding` |
| 7 | **B** | ¿Diferencia margin/padding? → padding=interior, margin=exterior |
| 8 | **C** | ¿Comando Git para inicializar repo? → `git init` |
| 9 | **B** | ¿Comando para añadir al staging? → `git add .` |
| 10 | **C** | ¿Comando para guardar cambios? → `git commit -m "mensaje"` |
| 11 | **B** | ¿Diferencia let/const? → `const` no puede reasignarse |
| 12 | **C** | ¿`typeof null`? → `"object"` |
| 13 | **B** | ¿Declaración de función flecha? → `const fn = () => {}` |
| 14 | **C** | ¿Método que devuelve elementos que cumplen condición? → `filter()` |
| 15 | **B** | ¿Qué hace `map()`? → Transforma cada elemento, nuevo array mismo tamaño |
| 16 | **C** | ¿Acceso al primer elemento? → `items[0]` |
| 17 | **B** | ¿Qué es el DOM? → Representación en árbol del HTML en memoria |
| 18 | **C** | ¿Seleccionar elemento por id? → `document.getElementById("titulo")` |
| 19 | **B** | ¿Qué hace `addEventListener`? → Registra función para un evento |
| 20 | **C** | ¿Evento al hacer clic? → `click` |
| 21 | **B** | ¿Qué es JSX? → Extensión de sintaxis JS para escribir HTML en JS |
| 22 | **B** | ¿Componente funcional básico? → `const MyComponent = () => <div>Hola</div>` |
| 23 | **B** | ¿Cómo pasa información padre→hijo? → Mediante props |
| 24 | **B** | ¿Variable JS en JSX? → Con llaves `{variable}` |
| 25 | **B** | ¿Crear proyecto React con Vite? → `npm create vite@latest mi-app` |
| 26 | **B** | ¿Extensión de archivo con JSX? → `.jsx` o `.tsx` |
| 27 | **B** | ¿Flexbox: alinear en eje principal? → `justify-content` |
| 28 | **A** | ¿Flex items en múltiples líneas? → `flex-wrap: wrap` |
| 29 | **B** | ¿Para qué sirve `grid-template-columns`? → Definir estructura de columnas |
| 30 | **B** | ¿Unidad relativa al tamaño de fuente del padre? → `em` |
| 31 | **B** | ¿`@media (max-width: 768px)`? → Estilos cuando viewport ≤ 768px |
| 32 | **A** | ¿Qué es npm? → Node Package Manager |
| 33 | **C** | ¿Archivo para ignorar en Git? → `.gitignore` |
| 34 | **A** | ¿Crear nueva rama? → `git branch nueva-rama` |
| 35 | **B** | ¿Qué hace `git merge`? → Combina cambios de una rama en otra |
| 36 | **B** | ¿Convertir string a número? → `parseInt(string)` o `Number(string)` |
| 37 | **B** | ¿Operador spread `...`? → Expande elementos de array u objeto |
| 38 | **B** | ¿Qué es desestructuración? → Extraer valores en variables individuales |
| 39 | **C** | ¿`[1,2,3].find(x => x > 1)`? → `2` |
| 40 | **B** | ¿Qué es una Promise? → Objeto para resultado eventual de op. asíncrona |
| 41 | **B** | ¿Qué hace async/await? → Código asíncrono con apariencia síncrona |
| 42 | **C** | ¿Método para petición HTTP moderno? → `fetch()` |
| 43 | **B** | ¿Qué devuelve `fetch(url)`? → Una Promise |
| 44 | **C** | ¿Cómo convertir respuesta a JSON? → `response.json()` (devuelve Promise) |
| 45 | **B** | ¿Qué es el estado (state)? → Datos internos que pueden cambiar |
| 46 | **C** | ¿Hook para estado local? → `useState` |
| 47 | **B** | ¿Qué devuelve `useState(0)`? → Array con valor actual y función actualizadora |
| 48 | **B** | ¿Renderizar lista en React? → Con `map()` devolviendo JSX |
| 49 | **B** | ¿Por qué es necesaria la prop `key`? → Para identificar elementos únicamente |
| 50 | **B** | ¿Qué es un componente controlado? → Formulario cuyo valor controla React |
| 51 | **B** | ¿Para qué sirve `<form>`? → Contenedor de entradas para enviar |
| 52 | **B** | ¿Asociar `<label>` con `<input>`? → Atributo `for` en label + `id` en input |
| 53 | **B** | ¿Diferencia `==` vs `===`? → `===` compara valor Y tipo |
| 54 | **B** | ¿Qué es un callback? → Función pasada como argumento para ejecutar después |
| 55 | **B** | ¿`Array.from({length:3}, (_,i)=>i)`? → `[0,1,2]` |
| 56 | **C** | ¿Etiqueta semántica para navegación? → `<nav>` |
| 57 | **C** | ¿Valor por defecto de `position`? → `static` |
| 58 | **B** | ¿Qué hace `position: absolute`? → Relativo a ancestro posicionado más cercano |
| 59 | **B** | ¿Virtual DOM? → Copia en memoria para calcular cambios mínimos |
| 60 | **B** | ¿Qué es `package.json`? → Describe dependencias y config del proyecto |
| 61 | **B** | ¿Instalar dependencia de desarrollo? → `npm install paquete --save-dev` |
| 62 | **B** | ¿Qué hace `npm run dev`? → Ejecuta el script `dev` de `package.json` |
| 63 | **B** | ¿Qué es `node_modules`? → Carpeta donde npm instala dependencias |
| 64 | **C** | ¿Etiqueta para fila en tabla? → `<tr>` |
| 65 | **C** | ¿Propiedad CSS para transición suave? → `transition` |
| 66 | **B** | ¿Importar componente en React? → `import MiComponente from './MiComponente'` |
| 67 | **B** | ¿Qué hace `ReactDOM.createRoot(...).render()`? → Monta la app en el elemento root |
| 68 | **B** | ¿Operador ternario `cond ? a : b`? → Devuelve `a` si verdadero, `b` si falso |
| 69 | **B** | ¿Qué es `localStorage`? → Almacenamiento en navegador que persiste entre sesiones |
| 70 | **B** | ¿Qué hace `JSON.stringify()`? → Convierte objeto JS a string JSON |

---

## SECCIÓN 2: MEDIAS (71–150)

| Nº | Respuesta | Pregunta (resumen) |
|----|-----------|-------------------|
| 71 | **B** | ¿`useEffect` con `[]`? → Solo una vez, tras el primer render |
| 72 | **B** | ¿Cómo limpiar un efecto? → Retornando una función desde el callback |
| 73 | **B** | ¿Propósito de `useContext`? → Consumir contexto sin prop drilling |
| 74 | **B** | ¿Qué es "prop drilling"? → Pasar props por niveles intermedios innecesarios |
| 75 | **B** | ¿Qué hace `React.createContext()`? → Crea objeto Context para proveer/consumir |
| 76 | **B** | ¿Cómo proveer contexto a hijos? → `<Context.Provider value={datos}>` |
| 77 | **B** | ¿Para qué sirve React Router? → Gestionar navegación y rutas en SPA |
| 78 | **B** | ¿Componente que envuelve la app para routing? → `<BrowserRouter>` |
| 79 | **B** | ¿Qué hace `<Link>`? → Navega sin recargar la página |
| 80 | **A** | ¿Acceder a parámetros `/usuarios/:id`? → `useParams()` |
| 81 | **A** | ¿Diferencia `useNavigate` vs `<Link>`? → `useNavigate` programática, `<Link>` declarativa |
| 82 | **B** | ¿Manejo de errores con async/await? → `try/catch` para capturar rechazos |
| 83 | **B** | ¿Diferencia `Promise.all` vs `Promise.allSettled`? → `.all` falla si una rechaza |
| 84 | **B** | ¿Cuándo se re-renderiza un componente? → Al cambiar state o props |
| 85 | **B** | ¿Qué hace `e.preventDefault()`? → Evita comportamiento default del navegador |
| 86 | **B** | ¿Qué es CSS Modules? → Clases únicas por archivo, sin conflictos globales |
| 87 | **B** | ¿Cómo importar CSS Module? → `import styles from './styles.module.css'` |
| 88 | **B** | ¿Qué es un custom hook? → Función que empieza por `use` y usa otros hooks |
| 89 | **C** | ¿Qué NO es regla de hooks? → Solo usarse una vez por componente |
| 90 | **B** | ¿Qué hace `useRef`? → Ref mutable que no causa re-render al cambiar |
| 91 | **B** | ¿Diferencia `null` vs `undefined`? → `undefined`=ausencia involuntaria, `null`=intencionada |
| 92 | **B** | ¿Qué hace `Object.keys(obj)`? → Devuelve array con las claves |
| 93 | **B** | ¿Copia superficial de objeto? → `{...obj}` o `Object.assign({}, obj)` |
| 94 | **B** | ¿`[1,[2,[3]]].flat()`? → `[1, 2, [3]]` (aplana un nivel) |
| 95 | **B** | ¿Cuándo usar `useCallback`? → Para memorizar función y evitar recrearla |
| 96 | **B** | ¿Para qué sirve `useMemo`? → Memorizar resultado de cálculo costoso |
| 97 | **B** | ¿Definir ruta en React Router v6? → `<Route path="/ruta" element={<Comp />} />` |
| 98 | **B** | ¿Estado global sin librerías? → Context API + useState o useReducer |
| 99 | **B** | ¿Ciclo de vida de componente React? → Montado, actualización, desmontado |
| 100 | **B** | ¿Hook para acceder a ruta actual? → `useLocation()` |
| 101 | **B** | ¿Actualizar objeto en estado? → `setObj(prev => ({...prev, property: newValue}))` |
| 102 | **B** | ¿Cuándo usar `useReducer`? → Lógica compleja con múltiples sub-valores |
| 103 | **B** | ¿Qué hace `onChange` en input? → Se dispara cuando el valor cambia |
| 104 | **B** | ¿Renderizado condicional? → Operador `&&` o ternario dentro de JSX |
| 105 | **B** | ¿Qué hace `React.Fragment`? → Agrupa JSX sin añadir nodo extra al DOM |
| 106 | **A** | ¿Importar múltiples exports nombrados? → `import { A, B, C } from './modulo'` |
| 107 | **B** | ¿Qué es event bubbling? → Propagación de evento de hijo hacia ancestros |
| 108 | **B** | ¿Evitar propagación de evento? → `e.stopPropagation()` |
| 109 | **B** | ¿Qué es renderización condicional? → Mostrar/ocultar componentes según condiciones |
| 110 | **B** | ¿Qué hace `reduce()`? → Acumula elementos en un único valor |
| 111 | **B** | ¿Manejar error en `fetch`? → Verificar `response.ok` y lanzar error manual |
| 112 | **B** | ¿Qué hace `Promise.race()`? → Resuelve/rechaza con la primera Promise que termine |
| 113 | **B** | ¿Qué es Vite? → Herramienta de build y servidor dev ultra-rápida |
| 114 | **B** | ¿Para qué sirve `vite.config.js`? → Configurar plugins, servidor, build, alias |
| 115 | **B** | ¿Variables de entorno en Vite? → `import.meta.env.VITE_VARIABLE` |
| 116 | **B** | ¿`useEffect` cuando dependencia cambia? → Limpieza anterior + nuevo efecto |
| 117 | **B** | ¿Qué es el closure? → Función con acceso al scope de su función externa |
| 118 | **B** | ¿Renderizar HTML como string? → `dangerouslySetInnerHTML={{ __html: contenido }}` |
| 119 | **B** | ¿Qué es SPA? → App que carga un HTML y actualiza contenido dinámicamente |
| 120 | **B** | ¿Qué hace `useId`? → Genera ID único y estable para elementos de formulario |
| 121 | **B** | ¿Qué es TypeScript? → Superset de JS con tipado estático opcional |
| 122 | **B** | ¿Tipar props en React + TS? → Con interface/type y destructuring tipado |
| 123 | **B** | ¿Operador `?` en TS `nombre?: string`? → Hace la propiedad opcional |
| 124 | **B** | ¿Qué es la prop `children`? → JSX entre etiquetas de apertura/cierre del componente |
| 125 | **B** | ¿Cuándo usar `React.memo()`? → Para evitar re-render si props no cambian |
| 126 | **B** | ¿Qué hace `Object.entries(obj)`? → Devuelve array de pares `[clave, valor]` |
| 127 | **B** | ¿Qué es optional chaining `?.`? → Retorna `undefined` si valor es null/undefined |
| 128 | **B** | ¿Qué hace nullish coalescing `??`? → Retorna derecha si izquierda es null/undefined |
| 129 | **B** | ¿Pasar funciones a componentes hijos? → Como props: `<Hijo onEvent={miFuncion} />` |
| 130 | **B** | ¿Qué es la reconciliación? → Algoritmo para comparar Virtual DOM y actualizar el real |
| 131 | **B** | ¿Qué hace `localStorage.setItem()`? → Guarda par clave-valor en localStorage |
| 132 | **B** | ¿Eliminar elemento de array en state? → `setArr(arr.filter((_, i) => i !== index))` |
| 133 | **B** | ¿Flexbox `align-items: center`? → Centra en eje transversal |
| 134 | **B** | ¿Fetch con método POST? → `fetch(url, { method: 'POST', headers, body })` |
| 135 | **B** | ¿Qué hace `git stash`? → Guarda cambios locales temporalmente |
| 136 | **B** | ¿Qué es una Higher-Order Function? → Recibe/devuelve funciones |
| 137 | **B** | ¿Qué hace `Array.isArray(valor)`? → Devuelve true si el valor es un array |
| 138 | **B** | ¿Qué es `this` en JS? → El objeto al que pertenece la función al ejecutarse |
| 139 | **B** | ¿Para qué sirve `useLayoutEffect`? → Efecto síncrono antes de que el navegador pinte |
| 140 | **B** | ¿Qué es "lifting state up"? → Elevar estado al ancestro común para compartirlo |
| 141 | **B** | ¿Diferencia CSR vs SSR? → CSR: navegador genera HTML; SSR: servidor genera HTML |
| 142 | **B** | ¿Qué es Axios y diferencia con fetch? → Librería con API más conveniente |
| 143 | **B** | ¿Manejar estado loading en fetch? → Estado booleano `isLoading` |
| 144 | **B** | ¿Qué hace `Array.some()`? → Devuelve true si al menos un elemento cumple condición |
| 145 | **B** | ¿Qué es `json-server`? → Crea API REST fake a partir de JSON |
| 146 | **B** | ¿Qué hace `toString()`? → Convierte un valor a su representación string |
| 147 | **B** | ¿Qué es Compound Components? → Componentes relacionados que comparten estado implícito |
| 148 | **B** | ¿Qué hace `git pull`? → Descarga cambios remotos e integra en rama actual |
| 149 | **B** | ¿Qué hace `useSearchParams`? → Leer y modificar query params de la URL |
| 150 | **B** | ¿Qué es debouncing? → Retrasar ejecución hasta que el usuario para de escribir |

---

## SECCIÓN 3: DIFÍCILES (151–200)

| Nº | Respuesta | Pregunta (resumen) |
|----|-----------|-------------------|
| 151 | **B** | ¿Qué resuelve `useSafeAsync`? → Evitar actualizar state de componente desmontado |
| 152 | **B** | ¿Output de `const [a,...b]=[1,2,3,4]`? → `b = [2,3,4]` |
| 153 | **C** | ¿Renderiza `items=[0]` con `&&`? → El texto literal `"0"` (bug conocido) |
| 154 | **B** | ¿Bug de `{items.length && <Comp />}`? → `0` se renderiza como texto |
| 155 | **B** | ¿Hooks en condicionales? → Rompen el orden de llamada, del que depende React |
| 156 | **B** | ¿Optimización incorrecta con `useCallback`? → Memorizar todas las funciones sin necesidad |
| 157 | **B** | ¿Qué es "stale closure"? → Capturar valores desactualizados por dependencias faltantes |
| 158 | **B** | ¿Cuántas veces se renderiza `Hijo` con `React.memo`? → Cada render del padre (handler es nueva función) |
| 159 | **B** | ¿Solución al problema anterior? → Envolver `handler` en `useCallback(()=>{}, [])` |
| 160 | **B** | ¿`typeof (() => {})`? → `"function"` |
| 161 | **B** | ¿Bug al mutar array de state? → Puede no disparar re-render (misma referencia) |
| 162 | **A** | ¿Qué es batching en React 18? → Agrupar actualizaciones para reducir re-renders |
| 163 | **B** | ¿`[1,2,3].reduce((acc,curr)=>acc+curr,0)`? → `6` |
| 164 | **B** | ¿Por qué no usar índice como key? → Reordenar/eliminar cambia índices, React reutiliza estado incorrecto |
| 165 | **B** | ¿Qué hace `AbortController`? → Permite cancelar peticiones fetch en curso |
| 166 | **B** | ¿Diferencia Error Boundary vs try/catch? → EB captura errores de renderizado; try/catch en código imperativo |
| 167 | **B** | ¿Qué es "render props"? → Componente que recibe función como prop que retorna JSX |
| 168 | **A** | ¿Cuándo preferir `useReducer`? → Estado complejo con múltiples sub-valores y transiciones definidas |
| 169 | **A** | ¿Qué es `Suspense`? → Fallback mientras se carga componente con `React.lazy` |
| 170 | **B** | ¿Qué hace `React.lazy()`? → Carga el componente de forma diferida (code splitting) |
| 171 | **C** | ¿Complejidad temporal de acceso a objeto por clave? → O(1) en promedio |
| 172 | **B** | ¿Problema de fetch sin cleanup en useEffect? → Memory leak si el componente se desmonta antes |
| 173 | **B** | ¿Qué hace `createPortal`? → Renderiza en nodo DOM fuera de la jerarquía del componente |
| 174 | **B** | ¿Qué es "hydration"? → React añade interactividad al HTML estático del servidor |
| 175 | **B** | ¿Diferencia timing useEffect vs useLayoutEffect? → useLayoutEffect es síncrono antes de pintar |
| 176 | **B** | ¿Tipo para ref de input HTML? → `React.RefObject<HTMLInputElement>` |
| 177 | **B** | ¿Qué hace `data?.user?.profile?.avatar ?? 'default.png'`? → Navega seguro por anidados, fallback si null/undefined |
| 178 | **B** | ¿Problema de rendimiento en el componente? → `procesarComplejo` se ejecuta en cada render innecesariamente |
| 179 | **B** | ¿Solución al problema anterior? → `useMemo(() => datos.map(...), [datos])` |
| 180 | **B** | ¿Dos setState en el mismo handler en React 18? → Se agrupan en un solo re-render (batching) |
| 181 | **B** | ¿Qué es concurrent mode? → Interrumpir/reanudar renderizado para mantener UI responsiva |
| 182 | **B** | ¿Para qué sirve `useTransition`? → Marcar actualizaciones como no urgentes |
| 183 | **B** | ¿Tipo inferido con type predicate en filter? → `string[]` gracias al type predicate |
| 184 | **B** | ¿Qué patrón es `withAuth(Component)`? → Higher-Order Component (HOC) |
| 185 | **B** | ¿Problema del contexto con user+theme juntos? → Cambio en cualquier valor re-renderiza todos los consumidores |
| 186 | **B** | ¿Solución al problema de contexto? → Dividir en contextos separados |
| 187 | **B** | ¿Qué es Zustand? → Librería de estado ligera que evita re-renders innecesarios |
| 188 | **A** | ¿Qué hace `useImperativeHandle`? → Permite al padre llamar métodos del hijo via ref |
| 189 | **B** | ¿Output de spread: `{...obj, a:2, b:3}`? → `{ a: 2, b: 3 }` |
| 190 | **B** | ¿Principio de React Testing Library? → Testear comportamiento desde perspectiva del usuario |
| 191 | **B** | ¿Qué hace `screen.getByRole('button', {name:/enviar/i})`? → Busca botón por texto accesible |
| 192 | **B** | ¿Cuándo usar `waitFor`? → Para esperar cambios asíncronos en el DOM |
| 193 | **B** | ¿Qué hace `vi.mock('./api')`? → Reemplaza el módulo con una versión mock automática |
| 194 | **B** | ¿Propósito de `beforeEach`/`afterEach`? → Setup/teardown antes y después de cada test |
| 195 | **B** | ¿Diferencia `userEvent` vs `fireEvent`? → `userEvent` simula interacciones más realistas |
| 196 | **B** | ¿Tipo de `keys` con genérico `keyof T`? → `("a" | "b")[]` |
| 197 | **B** | ¿Qué es code splitting? → Dividir bundle en chunks con `React.lazy()` + `Suspense` |
| 198 | **A** | ¿Antipatrón que causa renders infinitos? → Llamar setState directamente en el cuerpo |
| 199 | **B** | ¿Herramienta para cobertura de código con Vite? → `vitest --coverage` con `@vitest/coverage-v8` |
| 200 | **B** | ¿Qué patrón implementa `useDebounce`? → Debouncing; retrasa actualización hasta que deja de cambiar |
