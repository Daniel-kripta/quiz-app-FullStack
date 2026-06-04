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
  return load()?.[moduleId]?.dev?.[level] || null
}

function setSession(moduleId, level, session) {
  const all = load()
  if (!all[moduleId]) all[moduleId] = {}
  if (!all[moduleId].dev) all[moduleId].dev = {}
  all[moduleId].dev[level] = session
  save(all)
}

export function useDevSession(moduleId, level, questions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  // answers: { [num]: string } — student's written answer
  const [answers, setAnswers] = useState({})
  // scores: { [num]: 0|0.5|1 }
  const [scores, setScores] = useState({})
  // feedback: { [num]: string }
  const [feedback, setFeedback] = useState({})
  const [completed, setCompleted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Restore from localStorage
  useEffect(() => {
    if (!questions.length) return
    const saved = getSession(moduleId, level)
    if (saved) {
      setCurrentIndex(saved.currentIndex ?? 0)
      setAnswers(saved.answers ?? {})
      setScores(saved.scores ?? {})
      setFeedback(saved.feedback ?? {})
      setCompleted(saved.completed ?? false)
    }
    setLoaded(true)
  }, [moduleId, level, questions.length])

  // Persist on change
  useEffect(() => {
    if (!loaded) return
    const q = questions.map(q => ({
      num: q.num,
      score: scores[String(q.num)],
      feedback: feedback[String(q.num)],
    }))
    setSession(moduleId, level, {
      currentIndex,
      answers,
      scores,
      feedback,
      completed,
      questions: q,
    })
  }, [moduleId, level, currentIndex, answers, scores, feedback, completed, loaded, questions])

  const setAnswer = useCallback((num, text) => {
    setAnswers(prev => ({ ...prev, [String(num)]: text }))
  }, [])

  const saveResult = useCallback((num, score, expl) => {
    setScores(prev => ({ ...prev, [String(num)]: score }))
    setFeedback(prev => ({ ...prev, [String(num)]: expl }))
  }, [])

  const nextQuestion = useCallback(() => {
    setCurrentIndex(i => Math.min(i + 1, questions.length - 1))
  }, [questions.length])

  const finish = useCallback(() => setCompleted(true), [])

  const reset = useCallback(() => {
    setCurrentIndex(0)
    setAnswers({})
    setScores({})
    setFeedback({})
    setCompleted(false)
    setSession(moduleId, level, null)
  }, [moduleId, level])

  const currentQuestion = questions[currentIndex] || null
  const isLastQuestion = currentIndex === questions.length - 1
  const currentNum = currentQuestion ? String(currentQuestion.num) : null
  const currentAnswer = currentNum ? (answers[currentNum] ?? '') : ''
  const currentScore = currentNum !== null ? scores[currentNum] : undefined
  const currentFeedback = currentNum ? (feedback[currentNum] ?? null) : null
  const isCurrentGraded = currentScore !== undefined

  return {
    currentIndex,
    currentQuestion,
    answers,
    scores,
    feedback,
    completed,
    loaded,
    isLastQuestion,
    isCurrentGraded,
    currentAnswer,
    currentScore,
    currentFeedback,
    setAnswer,
    saveResult,
    nextQuestion,
    finish,
    reset,
    totalQuestions: questions.length,
  }
}
