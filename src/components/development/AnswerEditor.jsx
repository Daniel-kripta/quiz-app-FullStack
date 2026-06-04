import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'

export default function AnswerEditor({ value, onChange, hasCode, disabled }) {
  if (hasCode) {
    return (
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <CodeMirror
          value={value}
          onChange={onChange}
          extensions={[javascript(), python()]}
          theme={oneDark}
          readOnly={disabled}
          basicSetup={{ lineNumbers: true, foldGutter: false }}
          minHeight="180px"
          placeholder="// Escribe tu respuesta aquí..."
        />
      </div>
    )
  }

  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
      rows={8}
      placeholder="Escribe tu respuesta aquí..."
      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 disabled:bg-gray-50 dark:disabled:bg-gray-900 disabled:text-gray-400 dark:disabled:text-gray-600"
    />
  )
}
