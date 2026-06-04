import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function ScoreIcon({ score }) {
  if (score === 1) return <span className="text-2xl">✅</span>
  if (score === 0.5) return <span className="text-2xl">⚠️</span>
  return <span className="text-2xl">❌</span>
}

function ScoreLabel({ score }) {
  if (score === 1) return <span className="text-green-700 dark:text-green-400 font-semibold">Correcto (1 pt)</span>
  if (score === 0.5) return <span className="text-yellow-700 dark:text-yellow-400 font-semibold">Parcialmente correcto (0.5 pt)</span>
  return <span className="text-red-700 dark:text-red-400 font-semibold">Incorrecto (0 pt)</span>
}

export default function AiFeedback({ score, explanation, loading, professorAnswer }) {
  const [open, setOpen] = useState(false)

  if (loading) {
    return (
      <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 border border-gray-200 dark:border-gray-700">
        <span className="animate-spin inline-block w-5 h-5 border-2 border-violet-500 border-t-transparent rounded-full" />
        <span className="text-sm text-gray-500 dark:text-gray-400">Evaluando con IA…</span>
      </div>
    )
  }

  if (score === undefined || score === null) return null

  const bg = score === 1
    ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800'
    : score === 0.5
    ? 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800'
    : 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800'

  return (
    <div className="flex flex-col gap-2">
      <div className={`rounded-lg border px-4 py-3 ${bg}`}>
        <div className="flex items-center gap-2 mb-1">
          <ScoreIcon score={score} />
          <ScoreLabel score={score} />
        </div>
        {explanation && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{explanation}</p>
        )}
      </div>

      {professorAnswer && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-2 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Respuesta del profesor
            </span>
            <span className="text-gray-400 dark:text-gray-500 text-xs">{open ? '▲' : '▼'}</span>
          </button>
          {open && (
            <div className="px-4 py-3 bg-white dark:bg-gray-900 prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{professorAnswer}</ReactMarkdown>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
