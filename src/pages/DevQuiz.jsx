import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MODULES, DEV_LEVELS } from '../data/modules'
import { useDevSession } from '../hooks/useDevSession'
import { gradeAnswer } from '../services/aiService'
import AnswerEditor from '../components/development/AnswerEditor'
import AiFeedback from '../components/development/AiFeedback'
import ProgressBar from '../components/quiz/ProgressBar'

export default function DevQuiz() {
  const { module: moduleId, level } = useParams()
  const navigate = useNavigate()
  const [grading, setGrading] = useState(false)
  const [gradeError, setGradeError] = useState(null)
  const [manualMode, setManualMode] = useState(false)
  const [selfGradeMode, setSelfGradeMode] = useState(false)

  const mod = MODULES[moduleId]
  const levelInfo = DEV_LEVELS.find(l => l.id === level)
  const questions = mod?.dev?.[level] || []

  const session = useDevSession(moduleId, level, questions)

  if (!mod || !levelInfo || !questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64 gap-4">
        <p className="text-gray-500 dark:text-gray-400">Cuestionario no encontrado.</p>
        <Link to="/" className="text-blue-600 dark:text-blue-400 underline">Volver al inicio</Link>
      </div>
    )
  }

  if (!session.loaded) return <div className="text-center py-12 text-gray-400 dark:text-gray-500">Cargando…</div>

  if (session.completed) {
    navigate(`/results/dev/${moduleId}/${level}`, { replace: true })
    return null
  }

  const { currentQuestion, isLastQuestion, isCurrentGraded, currentAnswer, currentScore, currentFeedback } = session

  async function handleGrade() {
    if (!currentQuestion || !currentAnswer.trim()) return
    setGrading(true)
    setGradeError(null)
    setManualMode(false)
    try {
      const result = await gradeAnswer({
        questionText: currentQuestion.text,
        professorAnswer: currentQuestion.professorAnswer,
        studentAnswer: currentAnswer,
      })
      session.saveResult(currentQuestion.num, result.score, result.explanation)
    } catch (e) {
      setGradeError(e.message || 'Error al contactar la IA.')
    } finally {
      setGrading(false)
    }
  }

  function handleManualScore(score) {
    const labels = { 1: 'Nota manual: correcto', 0.5: 'Nota manual: parcialmente correcto', 0: 'Nota manual: incorrecto' }
    session.saveResult(currentQuestion.num, score, labels[score])
    setManualMode(false)
  }

  function handleSelfGradeScore(score) {
    const labels = { 1: 'Autoevaluación: correcto', 0.5: 'Autoevaluación: parcialmente correcto', 0: 'Autoevaluación: incorrecto' }
    session.saveResult(currentQuestion.num, score, labels[score])
    setSelfGradeMode(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">← Inicio</Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-1">
            {mod.emoji} {mod.label} — Desarrollo {levelInfo.label}
          </h1>
        </div>
        <button
          onClick={session.reset}
          className="text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 border border-gray-200 dark:border-gray-700 rounded px-2 py-1"
        >
          Reiniciar
        </button>
      </div>

      {/* Progress */}
      <ProgressBar
        current={session.currentIndex + 1}
        total={session.totalQuestions}
        failed={0}
      />

      {/* Question */}
      {currentQuestion && (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              Pregunta {currentQuestion.num}
            </span>
            <div className="mt-2 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentQuestion.text}</ReactMarkdown>
            </div>
          </div>

          <AnswerEditor
            value={currentAnswer}
            onChange={val => session.setAnswer(currentQuestion.num, val)}
            hasCode={currentQuestion.hasCode}
            disabled={isCurrentGraded}
          />

          {!isCurrentGraded && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={handleGrade}
                  disabled={grading || !currentAnswer.trim()}
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
                >
                  {grading ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Evaluando…
                    </>
                  ) : '✨ Evaluar con IA'}
                </button>
                <button
                  onClick={() => { setSelfGradeMode(m => !m); setManualMode(false) }}
                  disabled={!currentAnswer.trim()}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-40 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Responder sin IA
                </button>
                <button
                  onClick={() => { setManualMode(m => !m); setSelfGradeMode(false) }}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Saltar pregunta
                </button>
              </div>

              {selfGradeMode && (
                <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Respuesta del profesor</p>
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentQuestion.professorAnswer}</ReactMarkdown>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap border-t border-gray-200 dark:border-gray-700 pt-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">¿Cómo te ha ido?</span>
                    {[1, 0.5, 0].map(v => (
                      <button
                        key={v}
                        onClick={() => handleSelfGradeScore(v)}
                        className={`text-sm font-semibold px-4 py-1.5 rounded-lg border transition-colors ${
                          v === 1   ? 'border-green-400 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950' :
                          v === 0.5 ? 'border-yellow-400 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950' :
                                      'border-red-400 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950'
                        }`}
                      >
                        {v === 1 ? 'Correcto' : v === 0.5 ? 'Parcialmente correcto' : 'Incorrecto'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {manualMode && (
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Si ya respondiste anteriormente, indica la nota (si no, pon 0):</span>
                  {[1, 0.5, 0].map(v => (
                    <button
                      key={v}
                      onClick={() => handleManualScore(v)}
                      className={`text-sm font-semibold px-4 py-1.5 rounded-lg border transition-colors ${
                        v === 1   ? 'border-green-400 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950' :
                        v === 0.5 ? 'border-yellow-400 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950' :
                                    'border-red-400 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950'
                      }`}
                    >
                      {v === 1 ? 'Correcto' : v === 0.5 ? 'Parcialmente correcto' : 'Incorrecto'}
                    </button>
                  ))}
                </div>
              )}

              {gradeError && <p className="text-sm text-red-500">{gradeError}</p>}
              <p className="text-xs text-gray-400 dark:text-gray-500">Requiere API key configurada en ⚙️ Ajustes</p>
            </div>
          )}

          <AiFeedback
            score={currentScore}
            explanation={currentFeedback}
            loading={grading}
            professorAnswer={currentQuestion.professorAnswer}
          />
        </div>
      )}

      {/* Navigation */}
      {isCurrentGraded && (
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
