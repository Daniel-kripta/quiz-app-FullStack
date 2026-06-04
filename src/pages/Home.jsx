import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MODULES, TEST_LEVELS, DEV_LEVELS } from '../data/modules'

const COLOR_MAP = {
  sky:    {
    card:  'border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40 hover:border-sky-400 dark:hover:border-sky-600',
    badge: 'bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300',
  },
  green:  {
    card:  'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/40 hover:border-green-400 dark:hover:border-green-600',
    badge: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  },
  violet: {
    card:  'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 hover:border-violet-400 dark:hover:border-violet-600',
    badge: 'bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300',
  },
}

function getProgress(moduleId, mode, level) {
  try {
    const all = JSON.parse(localStorage.getItem('quiz_progress') || '{}')
    const session = all?.[moduleId]?.[mode]?.[level]
    if (!session) return null
    if (session.completed) return 'done'
    if (session.currentIndex > 0) return 'inprogress'
    return null
  } catch {
    return null
  }
}

function ProgressDot({ moduleId, mode, level }) {
  const status = getProgress(moduleId, mode, level)
  if (!status) return null
  return status === 'done'
    ? <span className="text-green-500 text-xs font-bold">✓</span>
    : <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" title="En progreso" />
}

// ─── AI Config Banner ────────────────────────────────────────────────────────

function loadSettings() {
  try { return JSON.parse(localStorage.getItem('quiz_settings') || '{}') }
  catch { return {} }
}

function AiConfigBanner() {
  const [apiKey, setApiKey] = useState('')
  const [saved, setSaved] = useState(false)
  const [isConfigured, setIsConfigured] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const s = loadSettings()
    const key = s.apiKey || import.meta.env.VITE_OPENAI_API_KEY || ''
    setIsConfigured(!!key)
  }, [])

  function handleSave() {
    const current = loadSettings()
    localStorage.setItem('quiz_settings', JSON.stringify({ ...current, apiKey }))
    setIsConfigured(true)
    setSaved(true)
    setOpen(false)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30 overflow-hidden">
      {/* Header row */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">✨</span>
          <span className="font-semibold text-violet-900 dark:text-violet-200 text-sm">Funciones con IA</span>
          {isConfigured && (
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">
              Configurada
            </span>
          )}
          {!isConfigured && (
            <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded-full font-medium">
              Sin configurar
            </span>
          )}
        </div>
        <span className="text-violet-400 dark:text-violet-500 text-sm">{open ? '▲' : '▼'}</span>
      </button>

      {/* Body */}
      {open && (
        <div className="px-4 pb-4 flex flex-col gap-4 border-t border-violet-200 dark:border-violet-800 pt-4">
          {/* What the AI does */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-violet-100 dark:border-violet-900">
              <div className="text-lg mb-1">💬</div>
              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">Corrección automática</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Evalúa tus respuestas de desarrollo comparándolas con las del profesor (0, 0.5 o 1 punto)</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-violet-100 dark:border-violet-900">
              <div className="text-lg mb-1">📊</div>
              <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">Informe de estudio</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Al terminar cada cuestionario, genera un informe Markdown exportable con áreas de mejora</div>
            </div>
          </div>

          {/* Quick API key config */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              API Key de OpenAI
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                placeholder="sk-... o gsk_... (Groq)"
                onKeyDown={e => e.key === 'Enter' && apiKey && handleSave()}
                className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-600"
              />
              <button
                onClick={handleSave}
                disabled={!apiKey}
                className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 dark:disabled:bg-violet-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                {saved ? '✓' : 'Guardar'}
              </button>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Se guarda solo en tu navegador (localStorage). Nunca se envía a ningún servidor externo al modelo.
              Por defecto usa Groq (gsk_...). También puedes configurar OpenAI, Ollama o LM Studio en ⚙️ Ajustes.
            </p>
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-violet-600 dark:text-violet-400 hover:underline w-fit"
            >
              ¿No tienes API key? Consíguela en platform.openai.com →
            </a>
          </div>

          {/* Alternatives note */}
          <p className="text-xs text-gray-400 dark:text-gray-500 border-t border-violet-200 dark:border-violet-800 pt-3">
            También compatible con <strong className="text-gray-600 dark:text-gray-400">OpenAI</strong>,{' '}
            <strong className="text-gray-600 dark:text-gray-400">Ollama</strong> y{' '}
            <strong className="text-gray-600 dark:text-gray-400">LM Studio</strong> — configura el endpoint en ⚙️ Ajustes.
            La IA es opcional: todos los tests tipo test funcionan sin ella.
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Main Home component ──────────────────────────────────────────────────────

export default function Home() {
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedMode, setSelectedMode] = useState(null)

  const mod = selectedModule ? MODULES[selectedModule] : null
  const colors = mod ? COLOR_MAP[mod.color] : null

  // Step 1: select module
  if (!selectedModule) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">🎓 Quiz FullStack</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Repasa los módulos del curso con tests interactivos</p>
        </div>

        {/* AI config banner */}
        <AiConfigBanner />

        {/* Module selector */}
        <div className="grid gap-3">
          {Object.values(MODULES).map(m => {
            const c = COLOR_MAP[m.color]
            return (
              <button
                key={m.id}
                onClick={() => setSelectedModule(m.id)}
                className={`border-2 rounded-2xl p-5 text-left transition-all ${c.card}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{m.emoji}</span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-gray-100 text-lg">{m.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {m.test.basic.length + m.test.medium.length + m.test.hard.length} preguntas test
                        · {m.dev.easy.length + m.dev.medium.length + m.dev.hard.length} de desarrollo
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>→</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Step 2: select mode
  if (!selectedMode) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-8">
        <button onClick={() => setSelectedModule(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm w-fit">← Módulos</button>
        <div className="text-center">
          <div className="text-4xl mb-2">{mod.emoji}</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{mod.label}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">¿Qué modo quieres practicar?</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setSelectedMode('test')}
            className={`border-2 rounded-2xl p-6 text-center transition-all ${colors.card}`}
          >
            <div className="text-3xl mb-2">📝</div>
            <div className="font-bold text-gray-900 dark:text-gray-100">Tipo Test</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Preguntas A/B/C/D</div>
          </button>
          <button
            onClick={() => setSelectedMode('dev')}
            className={`border-2 rounded-2xl p-6 text-center transition-all ${colors.card}`}
          >
            <div className="text-3xl mb-2">💬</div>
            <div className="font-bold text-gray-900 dark:text-gray-100">Desarrollo</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Respuesta abierta + IA</div>
          </button>
        </div>
      </div>
    )
  }

  // Step 3: select level
  const isTest = selectedMode === 'test'
  const levels = isTest ? TEST_LEVELS : DEV_LEVELS
  const path = (levelId) => `/${selectedMode}/${selectedModule}/${levelId}`

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col gap-8">
      <button onClick={() => setSelectedMode(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-sm w-fit">← Modo</button>
      <div className="text-center">
        <div className="text-4xl mb-2">{isTest ? '📝' : '💬'}</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {mod.label} — {isTest ? 'Tipo Test' : 'Desarrollo'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Selecciona el nivel de dificultad</p>
      </div>

      <div className="grid gap-3">
        {levels.map(l => {
          const count = isTest ? mod.test[l.key]?.length : mod.dev[l.key]?.length
          const progress = getProgress(selectedModule, isTest ? 'test' : 'dev', l.id)
          return (
            <Link
              key={l.id}
              to={path(l.id)}
              className={`border-2 rounded-xl p-4 flex items-center justify-between transition-all ${colors.card}`}
            >
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100">{l.label}</span>
                {isTest && <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">{l.range}</span>}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{count} preguntas</div>
              </div>
              <div className="flex items-center gap-2">
                <ProgressDot moduleId={selectedModule} mode={isTest ? 'test' : 'dev'} level={l.id} />
                {progress === 'done' && <span className="text-xs text-green-600 dark:text-green-400 font-medium">Completado</span>}
                {progress === 'inprogress' && <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">En progreso</span>}
                <span className="text-gray-400 dark:text-gray-500 text-sm">→</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
