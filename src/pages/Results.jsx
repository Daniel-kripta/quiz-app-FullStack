import { useParams, Link, useLocation } from 'react-router-dom'
import { MODULES, TEST_LEVELS, DEV_LEVELS } from '../data/modules'
import ResultsSummary from '../components/results/ResultsSummary'
import AiReport from '../components/results/AiReport'

export default function Results() {
  const { mode, module: moduleId, level } = useParams()
  const location = useLocation()
  const state = location.state || {}

  const mod = MODULES[moduleId]
  const isTest = mode === 'test'
  const levelInfo = isTest
    ? TEST_LEVELS.find(l => l.id === level)
    : DEV_LEVELS.find(l => l.id === level)

  if (!mod || !levelInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 gap-4">
        <p className="text-gray-500 dark:text-gray-400">Resultados no encontrados.</p>
        <Link to="/" className="text-blue-600 underline">Volver al inicio</Link>
      </div>
    )
  }

  const testData = isTest ? getTestResultData(moduleId, level) : null
  const devData = !isTest ? (state.devResults || getDevResultData(moduleId, level)) : null

  const reportData = isTest
    ? { total: testData?.total || 0, correct: testData?.correct || 0, failedQuestions: testData?.failedQuestions || [] }
    : { questions: devData?.questions || [] }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">← Inicio</Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">
            {mod.emoji} {mod.label} — {levelInfo.label}
          </h1>
        </div>
        <Link
          to={`/${mode}/${moduleId}/${level}`}
          className="text-xs border border-gray-200 dark:border-gray-700 rounded px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Repetir
        </Link>
      </div>

      {/* Summary */}
      {isTest && testData && (
        <ResultsSummary
          total={testData.total}
          correct={testData.correct}
          failed={testData.total - testData.correct}
        />
      )}
      {!isTest && devData && (
        <DevResultsSummary questions={devData.questions} />
      )}

      {/* Failed questions list (test mode) */}
      {isTest && testData?.failedQuestions?.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm">Preguntas falladas</h3>
          <div className="space-y-2">
            {testData.failedQuestions.map(q => (
              <div key={q.num} className="flex items-start gap-3 text-sm">
                <span className="shrink-0 text-red-500 dark:text-red-400 font-semibold w-6">#{q.num}</span>
                <span className="text-gray-600 dark:text-gray-400 line-clamp-2">{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Report */}
      <AiReport
        mode={mode}
        moduleLabel={mod.label}
        levelLabel={levelInfo.label}
        data={reportData}
      />

      {/* Navigation */}
      <div className="flex gap-3 justify-center pt-2">
        <Link
          to="/"
          className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium px-5 py-2 rounded-lg transition-colors text-sm"
        >
          Inicio
        </Link>
        <Link
          to={`/${mode}/${moduleId}/${level}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors text-sm"
        >
          Repetir test
        </Link>
      </div>
    </div>
  )
}

function getTestResultData(moduleId, level) {
  try {
    const all = JSON.parse(localStorage.getItem('quiz_progress') || '{}')
    const session = all?.[moduleId]?.test?.[level]
    if (!session) return null
    const mod = MODULES[moduleId]
    const questions = mod?.test?.[level] || []
    const failed = new Set(session.failed || [])
    return {
      total: questions.length,
      correct: questions.filter(q => !failed.has(q.num)).length,
      failedQuestions: questions.filter(q => failed.has(q.num)),
    }
  } catch { return null }
}

function getDevResultData(moduleId, level) {
  try {
    const all = JSON.parse(localStorage.getItem('quiz_progress') || '{}')
    const session = all?.[moduleId]?.dev?.[level]
    if (!session) return null
    return { questions: session.questions || [] }
  } catch { return null }
}

function DevResultsSummary({ questions }) {
  const scored = questions.filter(q => q.score !== undefined)
  const total = scored.reduce((acc, q) => acc + q.score, 0)
  const max = questions.length
  const pct = max > 0 ? Math.round((total / max) * 100) : 0

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Resultados</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{max}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Preguntas</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{total.toFixed(1)}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Puntos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-700 dark:text-gray-300">{pct}%</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Nota</div>
        </div>
      </div>
      <div className="space-y-2 mt-4">
        {questions.map(q => (
          <div key={q.num} className="flex items-start gap-3 text-sm border-b border-gray-100 dark:border-gray-800 pb-2">
            <ScoreBadge score={q.score} />
            <div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Pregunta {q.num}</div>
              {q.feedback && <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{q.feedback}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScoreBadge({ score }) {
  if (score === 1) return <span className="shrink-0 text-xs font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-950 rounded px-1.5 py-0.5">1</span>
  if (score === 0.5) return <span className="shrink-0 text-xs font-bold text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-950 rounded px-1.5 py-0.5">½</span>
  return <span className="shrink-0 text-xs font-bold text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-950 rounded px-1.5 py-0.5">0</span>
}
