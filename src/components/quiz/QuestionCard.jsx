import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import AnswerOption from './AnswerOption'

export default function QuestionCard({ question, wrongAttempts, isSolved, isFailed, isSkipped, onAnswer }) {
  const tried = new Set(wrongAttempts[String(question.num)] || [])

  function getState(letter) {
    if (isSolved && letter === question.correct) return 'correct'
    if (tried.has(letter)) return 'wrong'
    if (isSolved) return 'disabled'
    return 'idle'
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 w-full">
      {isFailed && (
        <div className="inline-flex items-center gap-1 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-full px-2 py-0.5 mb-3">
          ✗ Fallada
        </div>
      )}

      <div className="mb-5">
        <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
          Pregunta {question.num}
        </span>
        <div className="mt-1 text-gray-800 dark:text-gray-200 font-medium leading-relaxed prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{question.text}</ReactMarkdown>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {Object.entries(question.options).map(([letter, text]) => (
          <AnswerOption
            key={letter}
            letter={letter}
            text={text}
            state={getState(letter)}
            disabled={tried.has(letter) || isSolved}
            onClick={() => onAnswer(question, letter)}
          />
        ))}
      </div>

      {!isSolved && isFailed && (
        <div className="mt-4 text-sm text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg px-4 py-2">
          ✗ Incorrecto — la pregunta queda como fallada. Encuentra la respuesta correcta para continuar.
        </div>
      )}

      {isSolved && !isFailed && (
        <div className="mt-4 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg px-4 py-2">
          ✓ ¡Correcto!
        </div>
      )}
      {isSolved && isFailed && !isSkipped && (
        <div className="mt-4 text-sm text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg px-4 py-2">
          ✓ Respuesta correcta encontrada, pero la pregunta queda como fallada.
        </div>
      )}
      {isSkipped && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
          Pregunta saltada — cuenta como fallada.
        </div>
      )}
    </div>
  )
}
