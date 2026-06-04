import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'quiz_progress'

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  catch { return {} }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function getSession(moduleId, level) {
  return load()?.[moduleId]?.test?.[level] || null
}

function setSession(moduleId, level, session) {
  const all = load()
  if (!all[moduleId]) all[moduleId] = {}
  if (!all[moduleId].test) all[moduleId].test = {}
  all[moduleId].test[level] = session
  save(all)
}

export function useTestSession(moduleId, level, questions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // firstAnswers: { [num]: letter } — only first attempt recorded
  const [firstAnswers, setFirstAnswers] = useState({})
  // failed: Set of nums with ≥1 wrong answer
  const [failed, setFailed] = useState(new Set())
  // wrongAttempts: { [num]: string[] } — wrong letters tried
  const [wrongAttempts, setWrongAttempts] = useState({})
  // solved: Set of nums where correct was eventually selected (can advance)
  const [solved, setSolved] = useState(new Set())
  const [skipped, setSkipped] = useState(new Set())
  const [completed, setCompleted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Restore from localStorage
  useEffect(() => {
    if (!questions.length) return
    const saved = getSession(moduleId, level)
    if (saved) {
      setCurrentIndex(saved.currentIndex ?? 0)
      setFirstAnswers(saved.firstAnswers ?? {})
      setFailed(new Set(saved.failed ?? []))
      setWrongAttempts(saved.wrongAttempts ?? {})
      setSolved(new Set(saved.solved ?? []))
      setSkipped(new Set(saved.skipped ?? []))
      setCompleted(saved.completed ?? false)
    }
    setLoaded(true)
  }, [moduleId, level, questions.length])

  // Persist on change
  useEffect(() => {
    if (!loaded) return
    setSession(moduleId, level, {
      currentIndex,
      firstAnswers,
      failed: [...failed],
      wrongAttempts,
      solved: [...solved],
      skipped: [...skipped],
      completed,
    })
  }, [moduleId, level, currentIndex, firstAnswers, failed, wrongAttempts, solved, completed, loaded])

  const answerQuestion = useCallback((question, letter) => {
    const numStr = String(question.num)
    const isCorrect = letter === question.correct

    // Record first attempt only once
    setFirstAnswers(prev => numStr in prev ? prev : { ...prev, [numStr]: letter })

    if (isCorrect) {
      setSolved(prev => new Set([...prev, question.num]))
    } else {
      setFailed(prev => new Set([...prev, question.num]))
      setWrongAttempts(prev => ({
        ...prev,
        [numStr]: [...new Set([...(prev[numStr] || []), letter])],
      }))
    }
  }, [])

  const skipQuestion = useCallback((question) => {
    setFailed(prev => new Set([...prev, question.num]))
    setSolved(prev => new Set([...prev, question.num]))
    setSkipped(prev => new Set([...prev, question.num]))
  }, [])

  const nextQuestion = useCallback(() => {
    setCurrentIndex(i => Math.min(i + 1, questions.length - 1))
  }, [questions.length])

  const finish = useCallback(() => setCompleted(true), [])

  const reset = useCallback(() => {
    setCurrentIndex(0)
    setFirstAnswers({})
    setFailed(new Set())
    setWrongAttempts({})
    setSolved(new Set())
    setCompleted(false)
    setSession(moduleId, level, null)
  }, [moduleId, level])

  const currentQuestion = questions[currentIndex] || null
  const isLastQuestion = currentIndex === questions.length - 1
  const isCurrentSolved = currentQuestion ? solved.has(currentQuestion.num) : false
  const isCurrentFailed = currentQuestion ? failed.has(currentQuestion.num) : false
  const isCurrentSkipped = currentQuestion ? skipped.has(currentQuestion.num) : false
  // correctCount: questions answered on first try (not in failed set)
  const correctCount = questions.filter(q => !failed.has(q.num) && solved.has(q.num)).length

  return {
    currentIndex,
    currentQuestion,
    firstAnswers,
    failed,
    wrongAttempts,
    solved,
    completed,
    loaded,
    isLastQuestion,
    isCurrentSolved,
    isCurrentFailed,
    isCurrentSkipped,
    answerQuestion,
    skipQuestion,
    nextQuestion,
    finish,
    reset,
    totalQuestions: questions.length,
    correctCount,
  }
}
