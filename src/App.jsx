import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import TestQuiz from './pages/TestQuiz'
import DevQuiz from './pages/DevQuiz'
import Results from './pages/Results'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test/:module/:level" element={<TestQuiz />} />
            <Route path="/dev/:module/:level" element={<DevQuiz />} />
            <Route path="/results/:mode/:module/:level" element={<Results />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
