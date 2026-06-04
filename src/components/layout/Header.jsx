import { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsModal from '../settings/SettingsModal'

export default function Header() {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-gray-900 dark:text-gray-100 text-lg tracking-tight">
          🎓 Quiz FullStack
        </Link>
        <button
          onClick={() => setShowSettings(true)}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          title="Ajustes de IA"
        >
          ⚙️
        </button>
      </header>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  )
}
