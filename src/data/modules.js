import { parseTestMd } from './parsers/parseTestMd'
import { parseDevMd } from './parsers/parseDevMd'

// React
import reactTestQ from '../../content/modulo-1-react/preguntas-test.md?raw'
import reactTestA from '../../content/modulo-1-react/respuestas-test.md?raw'
import reactDevQ  from '../../content/modulo-1-react/preguntas-desarrollo.md?raw'
import reactDevA  from '../../content/modulo-1-react/respuestas-desarrollo.md?raw'

// Node
import nodeTestQ from '../../content/modulo-2-node/preguntas-test.md?raw'
import nodeTestA from '../../content/modulo-2-node/respuestas-test.md?raw'
import nodeDevQ  from '../../content/modulo-2-node/preguntas-desarrollo.md?raw'
import nodeDevA  from '../../content/modulo-2-node/respuestas-desarrollo.md?raw'

// IA
import iaTestQ from '../../content/modulo-3-ia/preguntas-test.md?raw'
import iaTestA from '../../content/modulo-3-ia/respuestas-test.md?raw'
import iaDevQ  from '../../content/modulo-3-ia/preguntas-desarrollo.md?raw'
import iaDevA  from '../../content/modulo-3-ia/respuestas-desarrollo.md?raw'

export const MODULES = {
  react: {
    id: 'react',
    label: 'React',
    emoji: '⚛️',
    color: 'sky',
    test: parseTestMd(reactTestQ, reactTestA),
    dev:  parseDevMd(reactDevQ, reactDevA),
  },
  node: {
    id: 'node',
    label: 'Node.js',
    emoji: '🟢',
    color: 'green',
    test: parseTestMd(nodeTestQ, nodeTestA),
    dev:  parseDevMd(nodeDevQ, nodeDevA),
  },
  ia: {
    id: 'ia',
    label: 'IA',
    emoji: '🤖',
    color: 'violet',
    test: parseTestMd(iaTestQ, iaTestA),
    dev:  parseDevMd(iaDevQ, iaDevA),
  },
}

export const TEST_LEVELS = [
  { id: 'basic',  label: 'Básico',   key: 'basic',  range: '1–70'    },
  { id: 'medium', label: 'Medio',    key: 'medium', range: '71–150'  },
  { id: 'hard',   label: 'Difícil',  key: 'hard',   range: '151–200' },
]

export const DEV_LEVELS = [
  { id: 'easy',   label: 'Fácil',   key: 'easy'   },
  { id: 'medium', label: 'Medio',   key: 'medium' },
  { id: 'hard',   label: 'Difícil', key: 'hard'   },
]
