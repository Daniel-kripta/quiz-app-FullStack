# Quiz FullStack

App interactiva para repasar los exámenes del curso Full Stack. Carga los archivos `.md` del repositorio directamente — sin duplicar contenido — y ofrece dos modos de estudio con persistencia local y corrección opcional por IA.

---

## Cómo funciona

### Módulos y niveles

Hay tres módulos (React, Node.js, IA), cada uno con dos modos:

- **Tipo test** — preguntas A/B/C/D con tres niveles de dificultad: básico (70 preguntas), medio (80) y difícil (50).
- **Desarrollo** — respuesta abierta con tres niveles: fácil, medio y difícil.

### Tipo test

- Las opciones de cada pregunta se barajan de forma determinista (misma pregunta, mismo orden en cada sesión) para evitar que la respuesta correcta caiga siempre en la misma posición.
- Si fallas, la pregunta queda marcada como fallada para el cómputo final aunque luego aciertes. Puedes seguir eligiendo hasta encontrar la correcta, o saltarla (cuenta como fallada con 0 puntos).
- El progreso se guarda automáticamente en `localStorage` — puedes cerrar el navegador y continuar donde lo dejaste.

### Desarrollo

Cada pregunta tiene tres opciones de evaluación:

| Opción | Descripción |
|--------|-------------|
| **✨ Evaluar con IA** | Envía tu respuesta y la del profesor al modelo configurado; devuelve una nota (0 / 0,5 / 1) y una explicación |
| **Responder sin IA** | Muestra la respuesta del profesor para que te autocorrijas y pongas tu propia nota |
| **Saltar pregunta** | Avanza sin responder; queda registrada con la nota de sesiones anteriores si la indicas |

Tras la corrección de la IA, puedes desplegar la respuesta del profesor para comparar.

### Informe final

Al terminar cualquier cuestionario puedes solicitar un informe generado por IA (botón opcional, no se ejecuta solo). El informe analiza tus resultados, agrupa las áreas de mejora por tema y sugiere próximos pasos. Se muestra en Markdown renderizado y se puede exportar como archivo `.md`.

---

## Integración con IA

La app usa el SDK oficial de `openai`, configurado para ser compatible con cualquier API que siga el formato OpenAI — no solo OpenAI.

### Proveedores soportados

| Proveedor | Endpoint | API Key |
|-----------|----------|---------|
| **Groq** *(por defecto)* | `https://api.groq.com/openai/v1` | Desde [console.groq.com](https://console.groq.com) — plan gratuito disponible |
| **OpenAI** | *(vacío — usa el default del SDK)* | Desde [platform.openai.com](https://platform.openai.com/api-keys) |
| **xAI / Grok** | `https://api.x.ai/v1` | Desde [console.x.ai](https://console.x.ai) |
| **Ollama** (local) | `http://localhost:11434/v1` | `ollama` (cualquier texto) |
| **LM Studio** (local) | `http://localhost:1234/v1` | cualquier texto |

### Configurar la API key

Desde la UI (recomendado): abre ⚙️ Ajustes e introduce la key, el endpoint y el modelo. Se guarda en `localStorage` — nunca sale del navegador ni pasa por ningún servidor.

Alternativamente, crea un `.env` en la raíz del proyecto:

```env
VITE_OPENAI_API_KEY=sk-...
```

La configuración de la UI tiene prioridad sobre el `.env`.

### Ollama — solución al error de CORS

El navegador puede bloquear peticiones a `localhost` por política CORS. Si ves ese error:

```bash
OLLAMA_ORIGINS="*" ollama serve
```

### Cómo funciona la corrección

El modelo recibe la pregunta, la respuesta del profesor (extraída de `respuestas-desarrollo.md`) y la respuesta del alumno. El criterio es comparativo: evalúa si el alumno ha cubierto los puntos de la respuesta del profesor, no si demuestra conocimiento exhaustivo. Devuelve un JSON `{"score": 0|0.5|1, "explanation": "..."}`.

---

## Arrancar

```bash
npm install
npm run dev
```

La IA es completamente opcional — todos los tests tipo test funcionan sin API key.

---

## Stack

- **Vite + React + Tailwind CSS v4**
- `react-router-dom` — routing
- `react-markdown` + `remark-gfm` — render de Markdown
- `@tailwindcss/typography` — estilos `prose` para markdown
- `@uiw/react-codemirror` — editor de código en preguntas que contengan bloques de código
- `openai` (SDK oficial) — compatible con cualquier API OpenAI-compatible

---

## Estructura

```
src/
├── data/
│   ├── parsers/
│   │   ├── parseTestMd.js     ← extrae y baraja preguntas/respuestas de preguntas-test.md
│   │   └── parseDevMd.js      ← extrae preguntas y respuestas del profesor
│   └── modules.js             ← importa los 12 .md con ?raw y exporta MODULES
├── services/
│   └── aiService.js           ← gradeAnswer() + generateReport() vía OpenAI SDK
├── hooks/
│   ├── useTestSession.js      ← estado del test tipo test + localStorage
│   └── useDevSession.js       ← estado del modo desarrollo + localStorage
├── components/
│   ├── layout/Header.jsx
│   ├── quiz/
│   │   ├── QuestionCard.jsx   ← pregunta + opciones con estados visuales
│   │   ├── AnswerOption.jsx   ← opción individual (idle/correct/wrong/disabled)
│   │   └── ProgressBar.jsx
│   ├── development/
│   │   ├── AnswerEditor.jsx   ← textarea o CodeMirror según el contenido
│   │   └── AiFeedback.jsx     ← score 0/0.5/1 + explicación + respuesta del profesor
│   ├── results/
│   │   ├── ResultsSummary.jsx ← resumen visual acertadas/falladas
│   │   └── AiReport.jsx       ← informe MD generado por IA + exportar .md
│   └── settings/
│       └── SettingsModal.jsx  ← API key, endpoint local, modelo
└── pages/
    ├── Home.jsx               ← selector módulo → modo → nivel
    ├── TestQuiz.jsx
    ├── DevQuiz.jsx
    └── Results.jsx
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home |
| `/test/:module/:level` | Test tipo test (`module`: react\|node\|ia · `level`: basic\|medium\|hard) |
| `/dev/:module/:level` | Desarrollo (`level`: easy\|medium\|hard) |
| `/results/:mode/:module/:level` | Resultados |

## Persistencia (localStorage)

```
quiz_progress  →  progreso por módulo/modo/nivel (índice, respuestas, notas, completado)
quiz_settings  →  { apiKey, localEndpoint, model }
```
