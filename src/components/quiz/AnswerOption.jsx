export default function AnswerOption({ letter, text, state, onClick, disabled }) {
  const base = 'w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium flex gap-3 items-start'

  const styles = {
    idle:     'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-950 cursor-pointer text-gray-800 dark:text-gray-200',
    correct:  'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-300 cursor-default',
    wrong:    'border-red-400 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 cursor-default line-through opacity-60',
    disabled: 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 cursor-default',
  }

  const labelStyles = {
    idle:     'shrink-0 w-6 h-6 rounded flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold text-xs',
    correct:  'shrink-0 w-6 h-6 rounded flex items-center justify-center bg-green-500 text-white font-bold text-xs',
    wrong:    'shrink-0 w-6 h-6 rounded flex items-center justify-center bg-red-400 text-white font-bold text-xs',
    disabled: 'shrink-0 w-6 h-6 rounded flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-600 font-bold text-xs',
  }

  return (
    <button
      className={`${base} ${styles[state]}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className={labelStyles[state]}>{letter}</span>
      <span className="leading-relaxed">{text}</span>
    </button>
  )
}
