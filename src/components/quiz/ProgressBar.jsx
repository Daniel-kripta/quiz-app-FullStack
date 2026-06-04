export default function ProgressBar({ current, total, failed }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
        <span>{current} / {total}</span>
        {failed > 0 && <span className="text-red-500 dark:text-red-400">{failed} falladas</span>}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
