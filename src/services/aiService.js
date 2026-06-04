import OpenAI from 'openai'

function getSettings() {
  try { return JSON.parse(localStorage.getItem('quiz_settings') || '{}') }
  catch { return {} }
}

function getClient() {
  const s = getSettings()
  const apiKey = s.apiKey || import.meta.env.VITE_OPENAI_API_KEY || 'no-key'
  const baseURL = s.localEndpoint || 'https://api.groq.com/openai/v1'
  return new OpenAI({ apiKey, baseURL, dangerouslyAllowBrowser: true })
}

function getModel() {
  return getSettings().model || 'llama-3.3-70b-versatile'
}

/**
 * Grades a development answer: returns { score: 0|0.5|1, explanation: string }
 */
export async function gradeAnswer({ questionText, professorAnswer, studentAnswer }) {
  const client = getClient()
  const response = await client.chat.completions.create({
    model: getModel(),
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content: 'Eres un corrector de examen generoso. Tu objetivo es reconocer si el alumno ha entendido la idea, no buscar fallos. La única referencia es la respuesta del profesor. Responde SOLO con JSON válido sin texto adicional.',
      },
      {
        role: 'user',
        content: `Pregunta: ${questionText}

Respuesta del profesor: ${professorAnswer}

Respuesta del alumno: ${studentAnswer || '(sin respuesta)'}

¿El alumno ha captado la idea principal de la respuesta del profesor? Sé generoso: si la esencia está ahí, aunque falten detalles menores, es un 1.

Criterios:
- score 1: el alumno entiende la idea principal (no hace falta que sea exhaustivo)
- score 0.5: le falta algún concepto importante de la respuesta del profesor, no un detalle
- score 0: la respuesta es incorrecta, está vacía, o va en dirección completamente distinta

Devuelve este JSON:
{"score": 0, "explanation": "..."}

La explanation debe ser 1-2 frases constructivas: confirma qué ha entendido bien y, si hay detalles o conceptos de la respuesta del profesor que no aparecen, menciónalos brevemente aunque no bajen la nota.`,
      },
    ],
  })

  try {
    const parsed = JSON.parse(response.choices[0].message.content)
    return { score: parsed.score, explanation: parsed.explanation }
  } catch {
    return { score: 0, explanation: 'Error al procesar la respuesta de la IA.' }
  }
}

/**
 * Generates a study report in Markdown.
 * mode: 'test' | 'dev'
 */
export async function generateReport({ mode, moduleLabel, levelLabel, data }) {
  const client = getClient()

  let userPrompt
  if (mode === 'test') {
    const { total, correct, failedQuestions } = data
    userPrompt = `Genera un informe de estudio en Markdown para un alumno del curso Full Stack.

Módulo: ${moduleLabel} | Nivel: ${levelLabel}
Total preguntas: ${total} | Acertadas a la primera: ${correct} | Falladas: ${total - correct}

Preguntas falladas (número y resumen del tema):
${failedQuestions.map(q => `- Pregunta ${q.num}: ${q.text.substring(0, 80)}...`).join('\n')}

El informe debe incluir:
1. **Resumen del desempeño** (2-3 frases)
2. **Áreas de mejora** (agrupa las preguntas falladas por tema/concepto)
3. **Recomendaciones de estudio** concretas y accionables
4. **Próximos pasos sugeridos**

Usa Markdown bien estructurado con encabezados, listas y énfasis donde sea útil.`
  } else {
    const { questions } = data
    const scoreTotal = questions.reduce((acc, q) => acc + (q.score ?? 0), 0)
    const scoreMax = questions.length
    userPrompt = `Genera un informe de estudio en Markdown para un alumno del curso Full Stack.

Módulo: ${moduleLabel} | Nivel: ${levelLabel} | Modo: Preguntas de desarrollo
Puntuación total: ${scoreTotal.toFixed(1)} / ${scoreMax}

Preguntas evaluadas:
${questions.map(q => `- Pregunta ${q.num} [${q.score ?? 0}/1]: ${q.feedback || 'Sin feedback'}`).join('\n')}

El informe debe incluir:
1. **Resumen de puntuación** con nota global
2. **Análisis por pregunta** destacando qué faltó en las puntuaciones bajas
3. **Conceptos a reforzar**
4. **Recomendaciones concretas de estudio**

Usa Markdown bien estructurado.`
  }

  const response = await client.chat.completions.create({
    model: getModel(),
    messages: [
      {
        role: 'system',
        content: 'Eres un tutor experto en desarrollo web y Full Stack. Genera informes de estudio detallados, constructivos y motivadores en español.',
      },
      { role: 'user', content: userPrompt },
    ],
  })

  return response.choices[0].message.content
}
