/**
 * Parsea preguntas-desarrollo.md y respuestas-desarrollo.md de un módulo.
 * Devuelve { easy: DevQuestion[], medium: DevQuestion[], hard: DevQuestion[] }
 *
 * DevQuestion: { num, text, hasCode: bool, professorAnswer: string }
 */
export function parseDevMd(questionsRaw, answersRaw) {
  const answerMap = parseDevAnswers(answersRaw)
  const sections = splitDevSections(questionsRaw)

  return {
    easy: parseDevSection(sections[0], answerMap),
    medium: parseDevSection(sections[1], answerMap),
    hard: parseDevSection(sections[2], answerMap),
  }
}

function parseDevAnswers(raw) {
  const map = {}
  // Split on ## Pregunta N — Title
  const parts = raw.split(/^## Pregunta (\d+)/m)
  // parts: ['intro', '1', ' — Title\ncontent', '2', ' — Title\ncontent', ...]
  for (let i = 1; i < parts.length; i += 2) {
    const num = parseInt(parts[i])
    const content = parts[i + 1] || ''
    // Remove the " — Title\n" header line, keep the rest
    const body = content.replace(/^[^\n]*\n/, '').trim()
    map[num] = body
  }
  return map
}

function splitDevSections(raw) {
  // Split on ## Sección N —
  const parts = raw.split(/^## Sección \d+ —[^\n]*/m)
  return parts.slice(1)
}

function parseDevSection(sectionText, answerMap) {
  const questions = []
  // Each question starts with **Pregunta N.**
  const re = /\*\*Pregunta (\d+)\.\*\*\s*([\s\S]+?)(?=\n\*\*Pregunta \d+\.|\s*$)/g
  let m
  while ((m = re.exec(sectionText)) !== null) {
    const num = parseInt(m[1])
    const text = m[2].trim()
    questions.push({
      num,
      text,
      hasCode: text.includes('```'),
      professorAnswer: answerMap[num] || '',
    })
  }
  return questions
}
