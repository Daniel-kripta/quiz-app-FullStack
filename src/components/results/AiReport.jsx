import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { generateReport } from '../../services/aiService'

export default function AiReport({ mode, moduleLabel, levelLabel, data }) {
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleGenerate() {
    setLoading(true)
    setError(null)
    try {
      const md = await generateReport({ mode, moduleLabel, levelLabel, data })
      setReport(md)
    } catch (e) {
      setError(e.message || 'Error al generar el informe.')
    } finally {
      setLoading(false)
    }
  }

  function handleExport() {
    if (!report) return
    const blob = new Blob([report], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `informe-${moduleLabel.toLowerCase()}-${levelLabel.toLowerCase()}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!report) {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          {loading ? (
            <>
              <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              Generando informe…
            </>
          ) : (
            '✨ Recibir informe IA'
          )}
        </button>
        {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
        <p className="text-xs text-gray-400 dark:text-gray-500">Requiere API key configurada en ⚙️ Ajustes o en el inicio</p>
      </div>
    )
  }

  return (
    <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">✨ Informe de estudio</span>
        <button
          onClick={handleExport}
          className="text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg transition-colors"
        >
          ↓ Exportar .md
        </button>
      </div>
      <div className="p-6 prose prose-sm dark:prose-invert max-w-none bg-white dark:bg-gray-900">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
      </div>
    </div>
  )
}
