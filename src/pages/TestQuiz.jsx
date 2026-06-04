import { useParams, useNavigate, Link } from 'react-router-dom'
import { MODULES, TEST_LEVELS } from '../data/modules'
import { useTestSession } from '../hooks/useTestSession'
import QuestionCard from '../components/quiz/QuestionCard'
import ProgressBar from '../components/quiz/ProgressBar'

export default function TestQuiz() {
  const { module: moduleId, level } = useParams()
  const navigate = useNavigate()

  const mod = MODULES[moduleId]
  const levelInfo = TEST_LEVELS.find(l => l.id === level)
  const questions = mod?.test?.[level] || []

  const session = useTestSession(moduleId, level, questions)

  if (!mod || !levelInfo || !questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 gap-4">
        <p className="text-gray-500 dark:text-gray-400">Test no encontrado.</p>
        <Link to="/" className="text-blue-600 underline">Volver al inicio</Link>
      </div>
    )
  }

  if (!session.loaded) return <div className="text-center py-12 text-gray-400 dark:text-gray-500">Cargando…</div>

  if (session.completed) {
    navigate(`/results/test/${moduleId}/${level}`, { replace: true })
    return null
  }

  const { currentQuestion, isCurrentSolved, isCurrentFailed, isCurrentSkipped, isLastQuestion } = session

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
        <button
          onClick={session.reset}
          className="text-xs text-gray-400 hover:text-red-500 border border-gray-200 dark:border-gray-700 rounded px-2 py-1"
        >
          Reiniciar
        </button>
      </div>

      {/* Progress */}
      <ProgressBar
        current={session.currentIndex + 1}
        total={session.totalQuestions}
        failed={session.failed.size}
      />

      {/* Question */}
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          wrongAttempts={session.wrongAttempts}
          isSolved={isCurrentSolved}
          isFailed={isCurrentFailed}
          isSkipped={isCurrentSkipped}
          onAnswer={session.answerQuestion}
        />
      )}

      {/* Skip */}
      {!isCurrentSolved && currentQuestion && (
        <div className="flex justify-end">
          <button
            onClick={() => session.skipQuestion(currentQuestion)}
            className="text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 border border-gray-200 dark:border-gray-700 rounded px-3 py-1.5 transition-colors"
          >
            Saltar (cuenta como fallada)
          </button>
        </div>
      )}

      {/* Navigation */}
      {isCurrentSolved && (
        <div className="flex justify-end">
          {isLastQuestion ? (
            <button
              onClick={session.finish}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Ver resultados →
            </button>
          ) : (
            <button
              onClick={session.nextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Siguiente →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
