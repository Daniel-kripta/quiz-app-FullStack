import { useState, useEffect } from 'react'

function loadSettings() {
  try { return JSON.parse(localStorage.getItem('quiz_settings') || '{}') }
  catch { return {} }
}

export default function SettingsModal({ onClose }) {
  const [apiKey, setApiKey] = useState('')
  const [localEndpoint, setLocalEndpoint] = useState('')
  const [model, setModel] = useState('llama-3.3-70b-versatile')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const s = loadSettings()
    setApiKey(s.apiKey || '')
    setLocalEndpoint(s.localEndpoint || '')
    setModel(s.model || 'llama-3.3-70b-versatile')
  }, [])

  function handleSave() {
    localStorage.setItem('quiz_settings', JSON.stringify({ apiKey, localEndpoint, model }))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-full max-w-md p-6 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">⚙️ Ajustes de IA</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none">×</button>
        </div>

        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">API Key (OpenAI)</span>
            <input
              type="password"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            />
            <span className="text-xs text-gray-400 dark:text-gray-500">
              Se guarda en localStorage, nunca sale del navegador. Tiene prioridad sobre el .env
            </span>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Endpoint local (Ollama / LM Studio)</span>
            <input
              type="text"
              value={localEndpoint}
              onChange={e => setLocalEndpoint(e.target.value)}
              placeholder="https://api.groq.com/openai/v1"
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            />
            <span className="text-xs text-gray-400 dark:text-gray-500">
              Si se rellena, se usa en lugar de OpenAI. Deja vacío para usar OpenAI.
            </span>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Modelo</span>
            <input
              type="text"
              value={model}
              onChange={e => setModel(e.target.value)}
              placeholder="gpt-4o-mini"
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            />
            <span className="text-xs text-gray-400 dark:text-gray-500">
              Ejemplos: llama-3.3-70b-versatile, llama3.2, gpt-4o-mini, qwen2.5
            </span>
          </label>
        </div>

        <div className="flex gap-3 justify-end pt-1">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            {saved ? '✓ Guardado' : 'Guardar'}
          </button>
        </div>
      </div>
    </div>
  )
}
