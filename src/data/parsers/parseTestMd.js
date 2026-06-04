/**
 * Parsea preguntas-test.md y respuestas-test.md de un módulo.
 * Devuelve { basic: Question[], medium: Question[], hard: Question[] }
 *
 * Question: { num, text, options: {A,B,C,D}, correct: 'A'|'B'|'C'|'D', summary }
 */
export function parseTestMd(questionsRaw, answersRaw) {
  const correctMap = parseAnswers(answersRaw)
  const sections = splitSections(questionsRaw)

  return {
    basic: parseSection(sections[0], correctMap),
    medium: parseSection(sections[1], correctMap),
    hard: parseSection(sections[2], correctMap),
  }
}

function parseAnswers(raw) {
  const map = {}
  // Matches: | 1 | **B** | description |
  const re = /\|\s*(\d+)\s*\|\s*\*\*([A-D])\*\*/g
  let m
  while ((m = re.exec(raw)) !== null) {
    map[parseInt(m[1])] = m[2]
  }
  return map
}

function splitSections(raw) {
  // Split on ## SECCIÓN headings
  const parts = raw.split(/^## SECCIÓN \d+:/m)
  // parts[0] is the title, parts[1..3] are the three sections
  return parts.slice(1)
}

function seededShuffle(arr, seed) {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff
    const j = s % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function shuffleOptions(options, correct, seed) {
  const letters = ['A', 'B', 'C', 'D']
  const correctText = options[correct]
  const shuffled = seededShuffle(letters.map(l => options[l]), seed)
  const newOptions = {}
  letters.forEach((l, i) => { newOptions[l] = shuffled[i] })
  const newCorrect = letters.find(l => newOptions[l] === correctText)
  return { options: newOptions, correct: newCorrect }
}

function parseSection(sectionText, correctMap) {
  const questions = []
  const re = /\*\*(\d+)\.\*\*\s*([\s\S]+?)(?=\n\*\*\d+\.\*\*|\s*$)/g
  let m
  while ((m = re.exec(sectionText)) !== null) {
    const num = parseInt(m[1])
    const body = m[2].trim()
    const { text, options } = parseBody(body)
    const correct = correctMap[num] || null
    const shuffled = correct ? shuffleOptions(options, correct, num * 31) : { options, correct }
    questions.push({ num, text, ...shuffled })
  }
  return questions
}

function parseBody(body) {
  const lines = body.split('\n')
  const optionLines = []
  const textLines = []

  for (const line of lines) {
    const optMatch = line.match(/^-\s+([A-D])\)\s+(.+)/)
    if (optMatch) {
      optionLines.push({ letter: optMatch[1], text: optMatch[2].trim() })
    } else if (line.trim()) {
      textLines.push(line.trim())
    }
  }

  const options = {}
  for (const o of optionLines) options[o.letter] = o.text

  return { text: textLines.join('\n'), options }
}
