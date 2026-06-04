export default function ResultsSummary({ total, correct, failed }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const grade = pct >= 80 ? 'Excelente' : pct >= 60 ? 'Bien' : pct >= 40 ? 'Regular' : 'Necesita repaso'
  const gradeColor = pct >= 80 ? 'text-green-600 dark:text-green-400' : pct >= 60 ? 'text-blue-600 dark:text-blue-400' : pct >= 40 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Resultados</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{total}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{correct}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Acertadas</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500 dark:text-red-400">{failed}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Falladas</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-3">
          <div
            className="h-3 rounded-full transition-all bg-green-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 w-12 text-right">{pct}%</span>
      </div>

      <div className={`mt-3 text-sm font-semibold text-center ${gradeColor}`}>
        {grade}
      </div>
    </div>
  )
}
