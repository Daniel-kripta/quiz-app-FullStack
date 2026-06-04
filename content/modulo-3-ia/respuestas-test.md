# Respuestas — Examen Tipo Test — Módulo 3: Inteligencia Artificial

---

## SECCIÓN 1: BÁSICAS (1–70)

| Nº | Resp | Pregunta (resumen) |
|----|------|--------------------|
| 1 | **B** | ¿Diferencia Python vs JS en indentación? → Python usa indentación como sintaxis; JS usa `{}` |
| 2 | **B** | ¿Cómo declarar variable en Python? → `nombre = "Ana"` (sin palabras clave) |
| 3 | **C** | ¿Equivalente a `null` en Python? → `None` |
| 4 | **C** | ¿Cómo imprimir en Python? → `print("Hola")` |
| 5 | **B** | ¿Cómo definir una función en Python? → `def saluda(nombre):` |
| 6 | **B** | ¿Sintaxis de `for` en Python? → `for item in lista:` |
| 7 | **B** | ¿Qué hace `range(5)`? → Genera los números 0, 1, 2, 3, 4 |
| 8 | **B** | ¿Equivalente en JS de lista Python? → Array de JavaScript |
| 9 | **C** | ¿Acceder al último elemento? → `lista[-1]` |
| 10 | **B** | ¿Qué es un diccionario Python? → Colección de pares clave-valor, equivalente a objeto JS |
| 11 | **B** | ¿Cómo crear un diccionario? → `d = {clave: valor}` |
| 12 | **B** | ¿Qué es una tupla? → Colección ordenada e inmutable |
| 13 | **C** | ¿Cómo crear una tupla? → `t = (1, 2, 3)` |
| 14 | **C** | ¿Cómo importar módulo en Python? → `import modulo` |
| 15 | **B** | ¿Qué hace `import math`? → Importa el módulo matemático estándar |
| 16 | **B** | ¿Cómo manejar excepción en Python? → `try: ... except Exception as e:` |
| 17 | **B** | ¿Qué es FastAPI? → Framework web moderno de alto rendimiento para APIs con Python |
| 18 | **B** | ¿Ventaja de FastAPI sobre Flask? → Documentación automática, validación de tipos, async |
| 19 | **B** | ¿Cómo iniciar FastAPI? → `from fastapi import FastAPI; app = FastAPI()` |
| 20 | **A** | ¿Qué hace `@app.get("/ruta")`? → Crea endpoint que responde a GET en `/ruta` |
| 21 | **B** | ¿Qué es Pydantic? → Librería de validación de datos usando type hints |
| 22 | **B** | ¿Cómo definir modelo Pydantic? → `class Usuario(BaseModel): nombre: str` |
| 23 | **A** | ¿Dónde ver documentación automática de FastAPI? → `/docs` y `/redoc` |
| 24 | **B** | ¿Qué es un LLM? → Modelo entrenado en enormes cantidades de texto para generar/analizar lenguaje |
| 25 | **B** | ¿Ejemplo de LLM? → GPT-4, Claude, Gemini, LLaMA |
| 26 | **B** | ¿Qué es la tokenización? → Dividir texto en unidades (tokens) que el modelo puede procesar |
| 27 | **B** | ¿Cuántos tokens tiene una palabra en inglés? → Entre 1 y 3 aproximadamente |
| 28 | **B** | ¿Qué es un embedding? → Representación numérica (vector) que captura significado semántico |
| 29 | **B** | ¿Para qué se usan los embeddings? → Similitud semántica, búsqueda semántica, RAG |
| 30 | **A** | ¿Qué mide la similitud coseno? → El ángulo entre dos vectores (1=muy similar, 0/-1=diferente) |
| 31 | **B** | ¿Qué es el prompt engineering? → Diseñar instrucciones efectivas para obtener respuestas deseadas del LLM |
| 32 | **B** | ¿Qué es Hugging Face? → Plataforma con modelos preentrenados, datasets y herramientas open source |
| 33 | **B** | ¿Qué es un "pipeline" en HuggingFace? → API de alto nivel para usar modelos preentrenados en tareas comunes |
| 34 | **B** | ¿Qué hace `from transformers import pipeline`? → Importa la clase para usar modelos preentrenados |
| 35 | **B** | ¿Qué es ComfyUI? → Interfaz basada en nodos para generar imágenes con Stable Diffusion |
| 36 | **B** | ¿Qué es la IA responsable? → Principios para desarrollar IA de forma ética, justa y segura |
| 37 | **B** | ¿Qué es el sesgo en IA? → Tendencias sistemáticas que reflejan prejuicios de los datos de entrenamiento |
| 38 | **B** | ¿Qué es el context window? → Máximo de tokens que el modelo puede procesar en una interacción |
| 39 | **B** | ¿Cómo instalar paquete en Python? → `pip install paquete` |
| 40 | **B** | ¿Qué es un entorno virtual (`venv`)? → Ambiente aislado con sus propias dependencias |
| 41 | **B** | ¿Cómo crear entorno virtual? → `python -m venv nombre_env` |
| 42 | **B** | ¿Qué es `requirements.txt`? → Lista dependencias del proyecto con versiones |
| 43 | **B** | ¿Qué hace `pip freeze > requirements.txt`? → Exporta dependencias instaladas al archivo |
| 44 | **B** | ¿Qué es un Jupyter Notebook? → Entorno interactivo que mezcla código, resultados y texto |
| 45 | **B** | ¿Extensión de Jupyter Notebook? → `.ipynb` |
| 46 | **B** | ¿Qué es una API de IA? → Servicio que expone modelos via HTTP sin necesidad de alojarlos |
| 47 | **B** | ¿Qué es la generación de texto? → Predecir y generar el siguiente token para completar texto |
| 48 | **B** | ¿Qué es "temperature"? → Controla aleatoriedad: alta=creativo, baja=determinista |
| 49 | **B** | ¿Qué significa "zero-shot"? → Tarea sin ningún ejemplo previo en el prompt |
| 50 | **B** | ¿Qué es "few-shot prompting"? → Incluir ejemplos en el prompt para guiar al modelo |
| 51 | **B** | ¿Qué es la "alucinación"? → Información plausible pero factualmente incorrecta o inventada |
| 52 | **B** | ¿Qué es RAG? → Combina búsqueda de información con generación de texto del LLM |
| 53 | **B** | ¿Qué problema soluciona RAG? → Conocimiento desactualizado o limitado del LLM |
| 54 | **B** | ¿Qué es una base de datos vectorial? → BD optimizada para buscar embeddings por similitud semántica |
| 55 | **B** | ¿Ejemplo de BD vectorial? → Pinecone, Chroma, Weaviate, pgvector |
| 56 | **B** | ¿Relación de Python con espacios? → La indentación define bloques de código |
| 57 | **B** | ¿Cómo se hace list comprehension? → `[x for x in range(10)]` |
| 58 | **B** | ¿Resultado de `[x**2 for x in range(5)]`? → `[0, 1, 4, 9, 16]` |
| 59 | **B** | ¿Cómo definir una clase en Python? → `class MiClase:` |
| 60 | **B** | ¿Qué es `self`? → Referencia a la instancia actual, equivalente a `this` en JS |
| 61 | **B** | ¿Cómo definir el constructor? → `def __init__(self):` |
| 62 | **B** | ¿Qué es la herencia en Python? → Crear clase que hereda atributos y métodos de una clase padre |
| 63 | **B** | ¿Qué hace `super().__init__()`? → Llama al constructor de la clase padre |
| 64 | **B** | ¿Qué devuelve `type("hola")`? → `<class 'str'>` |
| 65 | **B** | ¿Cómo comprobar si una variable es string? → `isinstance(variable, str)` |
| 66 | **B** | ¿Qué hace `len("hola")`? → Devuelve la longitud: `4` |
| 67 | **B** | ¿Qué es un f-string? → Interpolación de strings: `f"Hola {nombre}"` |
| 68 | **B** | ¿Qué hace `str.split(",")`? → Divide el string por comas y devuelve lista |
| 69 | **B** | ¿Qué es una función `lambda`? → Función anónima de una expresión: `lambda x: x * 2` |
| 70 | **B** | ¿`sorted([3,1,4], reverse=True)`? → Nueva lista ordenada de mayor a menor |

---

## SECCIÓN 2: MEDIAS (71–150)

| Nº | Resp | Pregunta (resumen) |
|----|------|--------------------|
| 71 | **B** | ¿Diferencia `append` vs `extend`? → `append`: añade un elemento; `extend`: añade todos los de un iterable |
| 72 | **B** | ¿Qué es un generador? → Función con `yield` para producir valores de forma lazy |
| 73 | **B** | ¿Diferencia `*args` vs `**kwargs`? → `*args`: posicionales como tupla; `**kwargs`: nombrados como dict |
| 74 | **B** | ¿Qué hace `@property`? → Convierte método en propiedad accesible sin paréntesis |
| 75 | **B** | ¿Qué es `async def`? → Define coroutine pausable con `await` para I/O sin bloquear |
| 76 | **B** | ¿Endpoint FastAPI con body validado? → `def crear(datos: MiModelo):` con `BaseModel` |
| 77 | **B** | ¿Parámetros de ruta en FastAPI? → Declarar parámetro con mismo nombre que en la ruta |
| 78 | **B** | ¿Qué hace la validación automática de FastAPI? → Valida tipos y devuelve 422 si no cumplen |
| 79 | **B** | ¿Código HTTP de fallo de validación? → 422 (Unprocessable Entity) |
| 80 | **B** | ¿Qué es un "prompt"? → Instrucción/texto de entrada que se envía al modelo |
| 81 | **B** | ¿Qué es "chain-of-thought prompting"? → Instruir al modelo a razonar paso a paso |
| 82 | **B** | ¿Qué es el "system prompt"? → Mensaje de configuración previo a la conversación |
| 83 | **B** | ¿Qué es el "fine-tuning"? → Entrenar adicionalmente el modelo con datos específicos del dominio |
| 84 | **B** | ¿Diferencia fine-tuning vs RAG? → Fine-tuning: modifica pesos; RAG: proporciona contexto en tiempo real |
| 85 | **B** | ¿Qué son los "tokens" de API de LLM? → Unidades de texto procesadas que se cobran |
| 86 | **B** | ¿Usar pipeline HuggingFace para sentimientos? → `classifier = pipeline("sentiment-analysis"); classifier(texto)` |
| 87 | **B** | ¿Qué es un "transformer"? → Arquitectura de red neuronal basada en mecanismos de atención |
| 88 | **B** | ¿Qué es el mecanismo de "attention"? → Pondera la importancia de cada token respecto a los demás |
| 89 | **B** | ¿Qué hace `with open("file.txt", "r") as f:`? → Abre en lectura y cierra automáticamente |
| 90 | **B** | ¿Cómo leer todo el contenido de un archivo? → `f.read()` dentro de `with open()` |
| 91 | **B** | ¿Qué hace `json.loads()`? → Parsea string JSON a dict/lista Python |
| 92 | **B** | ¿Qué hace `json.dumps(objeto)`? → Convierte objeto Python a string JSON |
| 93 | **B** | ¿Qué es `requests`? → Librería HTTP popular para hacer peticiones web |
| 94 | **B** | ¿Petición GET con `requests`? → `response = requests.get(url); data = response.json()` |
| 95 | **A** | ¿Qué es `httpx`? → Versión moderna de requests con soporte asíncrono |
| 96 | **B** | ¿Errores HTTP personalizados en FastAPI? → `raise HTTPException(status_code=404, detail="...")` |
| 97 | **B** | ¿Qué son los "routers" en FastAPI? → `APIRouter` que agrupa endpoints montable en la app |
| 98 | **B** | ¿Cómo montar un router? → `app.include_router(router, prefix="/api/usuarios")` |
| 99 | **B** | ¿Qué es Stable Diffusion? → Modelo open source para generar imágenes desde texto |
| 100 | **B** | ¿Qué hace un "negative prompt"? → Indica qué elementos NO debe incluir la imagen |
| 101 | **B** | ¿Qué es la anotación de tipos en Python? → Decoradores opcionales para mejorar legibilidad y soporte IDE |
| 102 | **B** | ¿Qué significa `def procesar(texto: str) -> list[str]:`? → Recibe str, retorna lista de strings |
| 103 | **B** | ¿Qué es `Optional[str]`? → El valor puede ser `str` o `None` |
| 104 | **B** | ¿Campo con valor por defecto en Pydantic? → `campo: str = "valor"` o `campo: Optional[str] = None` |
| 105 | **B** | ¿Qué es `Field` en Pydantic? → Función para añadir metadatos a campos del modelo |
| 106 | **B** | ¿Flujo correcto de RAG? → Usuario → Búsqueda vectorial → Insertar docs en prompt → LLM → Respuesta |
| 107 | **B** | ¿Qué es un "chunk" en RAG? → Fragmento de texto de tamaño fijo/semántico para crear embeddings |
| 108 | **B** | ¿Qué es "temperatura 0"? → Modelo completamente determinista, siempre elige el token más probable |
| 109 | **B** | ¿Qué es `top_p`? → Limita selección de tokens al subconjunto de probabilidad acumulada P |
| 110 | **B** | ¿Problema ético del sesgo de género? → El modelo reproduce y amplifica estereotipos de los datos |
| 111 | **B** | ¿Qué es GDPR/RGPD en IA? → Regulación europea que impacta cómo se recopilan y procesan datos |
| 112 | **B** | ¿Qué es "hallucination mitigation"? → Estrategias para reducir alucinaciones (RAG, fuentes, step-by-step) |
| 113 | **B** | ¿Qué hace `async def` con `await`? → Pausa la coroutine cediendo control al event loop |
| 114 | **B** | ¿Qué es `asyncio`? → Librería estándar Python para programación asíncrona con event loop |
| 115 | **B** | ¿Cuándo usar `async` en FastAPI? → Cuando el endpoint realiza operaciones I/O |
| 116 | **B** | ¿Qué es un "model card"? → Documentación del modelo: uso, limitaciones, datos, métricas |
| 117 | **B** | ¿Qué es el "context stuffing"? → Insertar demasiado contexto degradando la calidad de respuesta |
| 118 | **B** | ¿Problema de fine-tuning vs RAG para datos actualizados? → Fine-tuning no actualiza sin reentrenar; RAG sí |
| 119 | **B** | ¿Qué es RLHF? → Alinear LLMs con preferencias humanas usando evaluadores que puntúan respuestas |
| 120 | **B** | ¿Qué hace `model.predict()` en scikit-learn? → Genera predicciones con el modelo ya entrenado |
| 121 | **B** | ¿Qué es pandas? → Librería de análisis y manipulación de datos con DataFrame y Series |
| 122 | **B** | ¿Qué es un DataFrame de pandas? → Estructura 2D con filas y columnas, similar a tabla de BD |
| 123 | **B** | ¿Qué hace `df.head()`? → Devuelve las primeras 5 filas del DataFrame |
| 124 | **B** | ¿Qué es numpy? → Librería para computación numérica con arrays multidimensionales eficientes |
| 125 | **B** | ¿`np.array([1,2,3]) * 2`? → Multiplica cada elemento por 2: `[2, 4, 6]` |
| 126 | **B** | ¿Qué es la "inferencia"? → Usar un modelo ya entrenado para generar predicciones con nuevos datos |
| 127 | **B** | ¿Qué es un "checkpoint"? → Copia guardada del estado del modelo durante entrenamiento |
| 128 | **B** | ¿Qué es el "overfitting"? → Modelo memoriza datos de entrenamiento pero generaliza mal |
| 129 | **B** | ¿Qué son los "weights" de un modelo? → Parámetros ajustables que se optimizan durante el entrenamiento |
| 130 | **B** | ¿Qué es `uvicorn`? → Servidor ASGI de alto rendimiento para ejecutar apps FastAPI |
| 131 | **B** | ¿Qué hace `uvicorn main:app --reload`? → Inicia el servidor con recarga automática |
| 132 | **B** | ¿Diferencia ASGI vs WSGI? → WSGI síncrono; ASGI asíncrono con soporte WebSocket y async |
| 133 | **B** | ¿Qué es un "agent" en LLMs? → Sistema donde el LLM usa herramientas autónomamente para tareas complejas |
| 134 | **B** | ¿Qué es "function calling"? → Capacidad del LLM de generar llamadas estructuradas a funciones definidas |
| 135 | **B** | ¿Qué es "max_tokens"? → Límite máximo de tokens que puede generar la respuesta |
| 136 | **B** | ¿Qué es el "grounding"? → Anclar respuestas del LLM en fuentes verificables |
| 137 | **B** | ¿Qué hace `@app.on_event("startup")`? → Registra función que se ejecuta al arrancar la app |
| 138 | **B** | ¿Qué es `Depends` en FastAPI? → Sistema de inyección de dependencias para lógica reutilizable |
| 139 | **B** | ¿Diferencia latency vs throughput? → Latency: tiempo a primera respuesta; Throughput: peticiones/tokens por segundo |
| 140 | **B** | ¿Qué es el "streaming" en LLMs? → Transmitir respuesta token a token a medida que se genera |
| 141 | **B** | ¿Diferencia `==` e `is` en Python? → `==` compara valores; `is` compara identidad de objetos |
| 142 | **B** | ¿Qué hace `@staticmethod`? → Método sin `self` ni `cls`; no accede a instancia ni clase |
| 143 | **B** | ¿Qué es `@classmethod`? → Método que recibe `cls` en lugar de `self`; para constructores alternativos |
| 144 | **B** | ¿Qué hace `enumerate(lista)`? → Devuelve pares `(índice, elemento)` al iterar |
| 145 | **B** | ¿Qué hace `zip(lista1, lista2)`? → Combina iterables en pares de tuplas |
| 146 | **B** | ¿Qué son los "guardrails"? → Controles que restringen el comportamiento del LLM |
| 147 | **B** | ¿Qué es el "prompt injection"? → Ataque donde el usuario manipula el comportamiento del LLM con instrucciones en su input |
| 148 | **B** | ¿Diferencia embedding model vs GPT? → Embeddings generan vectores; GPT genera texto |
| 149 | **B** | ¿Qué es el "context poisoning"? → Documentos maliciosos en la base de conocimiento contaminan respuestas del LLM |
| 150 | **B** | ¿Qué hace `model.encode(texto)` en sentence-transformers? → Convierte texto en vector de embedding |

---

## SECCIÓN 3: DIFÍCILES (151–200)

| Nº | Resp | Pregunta (resumen) |
|----|------|--------------------|
| 151 | **B** | ¿Problema del código FastAPI? → Password devuelta en respuesta y almacenada en texto plano |
| 152 | **B** | ¿Qué es el "lost update" problem? → Dos transacciones leen el mismo dato y la segunda sobreescribe la primera |
| 153 | **B** | ¿Diferencia tokenización BPE vs por palabras? → BPE: subpalabras frecuentes para vocabulario infinito con tokens finitos |
| 154 | **B** | ¿Por qué los LLMs tienen dificultades con matemáticas? → Predicen tokens estadísticamente, no calculan realmente |
| 155 | **B** | ¿Qué es el "position encoding"? → Información sobre el orden de tokens añadida a los embeddings |
| 156 | **B** | ¿Qué hace el código de búsqueda semántica? → Retrieval de RAG: busca K documentos más similares usando similitud coseno |
| 157 | **B** | ¿Qué es "quantization"? → Reducir precisión numérica de pesos para menor memoria y mayor velocidad |
| 158 | **B** | ¿Diferencia self-attention vs cross-attention? → Self: tokens atienden a su misma secuencia; Cross: tokens de una secuencia atienden a otra |
| 159 | **B** | ¿Qué hace el código Pydantic con `@field_validator`? → Valida email y normaliza a minúsculas |
| 160 | **B** | ¿Qué es el "attention sink"? → Exceso de peso en primeros tokens que degrada el rendimiento en contextos largos |
| 161 | **B** | ¿Riesgo de `eval(input_usuario)`? → Ejecución de código arbitrario del usuario |
| 162 | **B** | ¿Qué es "model distillation"? → Entrenar modelo pequeño para imitar a uno grande |
| 163 | **B** | ¿Por qué importa el "reproducibility"? → Para que otros puedan verificar los mismos resultados |
| 164 | **B** | ¿Qué hace `@app.middleware("http")`? → Registra middleware para cada petición HTTP |
| 165 | **B** | ¿Qué es "semantic search"? → Búsqueda por similitud semántica aunque no haya palabras exactas en común |
| 166 | **B** | ¿Qué es "catastrophic forgetting"? → El modelo olvida conocimiento general al hacer fine-tuning específico |
| 167 | **B** | ¿Qué es LoRA? → Fine-tuning eficiente que solo actualiza matrices de bajo rango añadidas al modelo |
| 168 | **B** | ¿Riesgo de privacidad de APIs de LLM de terceros? → Datos del prompt pueden ser usados/almacenados por el proveedor |
| 169 | **B** | ¿Qué hace el código de streaming? → Streaming de respuestas del LLM en tiempo real |
| 170 | **B** | ¿Qué es el "needle in a haystack" test? → Benchmark que inserta información en contexto muy largo para evaluar si el modelo la encuentra |
| 171 | **B** | ¿Por qué similitud coseno en vez de euclidiana para embeddings? → Mide ángulo independientemente de la magnitud |
| 172 | **B** | ¿Qué significa modelo "autoregressive"? → Genera texto prediciendo el siguiente token basado en los anteriores |
| 173 | **B** | ¿Qué es "beam search"? → Algoritmo que mantiene los K mejores candidatos parciales en cada paso |
| 174 | **B** | ¿Impacto ambiental de entrenar LLMs? → Consume enormes cantidades de energía con emisiones CO2 significativas |
| 175 | **B** | ¿Qué es `FastAPI Depends` con OAuth2? → Patrón para implementar JWT/OAuth2 con inyección de dependencias |
| 176 | **B** | ¿Qué hace el código de `Singleton`? → Implementa patrón Singleton: solo una instancia de la clase |
| 177 | **B** | ¿Por qué el "eval set" es importante en RAG? → Para medir objetivamente la calidad antes de desplegar |
| 178 | **B** | ¿Qué es el "output parsing"? → Extraer información estructurada de respuestas del LLM |
| 179 | **B** | ¿Riesgo de seguridad específico de RAG? → Indirect prompt injection por documentos maliciosos en la base de conocimiento |
| 180 | **B** | ¿Qué es el "BLEU score"? → Métrica que compara texto generado con referencia contando n-gramas comunes |
| 181 | **B** | ¿Modelo local vs API de embeddings? → Local: datos sensibles, sin latencia, coste fijo; API: mejor calidad, mantenimiento cero |
| 182 | **B** | ¿Qué es el "knowledge cutoff"? → Fecha hasta la que el modelo fue entrenado |
| 183 | **B** | ¿Qué hace `background_tasks.add_task(fn, arg)`? → Ejecuta `fn` DESPUÉS de que la respuesta HTTP sea enviada |
| 184 | **B** | ¿Qué es una "embeddings similarity matrix"? → Matriz NxN de similitudes coseno entre N textos |
| 185 | **B** | ¿Riesgo de `subprocess.run(cmd, shell=True)` con input de usuario? → Command injection: ejecutar comandos del SO |
| 186 | **B** | ¿Qué es el "perplexity"? → Métrica que mide cuán bien el modelo predice una secuencia |
| 187 | **B** | ¿Diferencia encoder-only, decoder-only, encoder-decoder? → Encoder: comprensión; Decoder: generación; Encoder-decoder: comprensión+generación |
| 188 | **B** | ¿Qué hace el código de `filtrar_respuesta`? → Implementa filtro básico de contenido dañino (guardrail de output) |
| 189 | **B** | ¿Qué es "constitutional AI"? → Entrenamiento donde el modelo usa principios para auto-criticar y mejorar respuestas |
| 190 | **B** | ¿Diferencia chat model vs completion model? → Completion: continúa texto; Chat: optimizado para conversaciones multi-turno |
| 191 | **B** | ¿Qué hace `asyncio.gather(*corutinas)`? → Ejecuta múltiples corutinas concurrentemente y espera a que todas terminen |
| 192 | **B** | ¿Diferencia sparse vs dense retrieval? → Sparse: términos exactos (BM25); Dense: similitud semántica (embeddings) |
| 193 | **B** | ¿Qué soluciona el "re-ranking" en RAG? → Reordena documentos recuperados por relevancia real usando modelo más potente |
| 194 | **B** | ¿Qué es "multi-modal"? → Modelo que procesa múltiples tipos de datos (texto, imágenes, audio, video) |
| 195 | **B** | ¿Qué es el "data poisoning"? → Inyectar datos maliciosos en el dataset de entrenamiento para manipular el modelo |
| 196 | **B** | ¿Qué hace `model.generate(..., do_sample=True, temperature=0.7)`? → Genera tokens con muestreo aleatorio balanceando creatividad y coherencia |
| 197 | **B** | ¿Qué es el "context compression"? → Reducir contexto enviado al LLM resumiendo/filtrando partes irrelevantes |
| 198 | **B** | ¿Qué es la "explicabilidad" (XAI)? → Capacidad de entender por qué el modelo tomó una decisión |
| 199 | **B** | ¿Qué es el problema del "alignment"? → Asegurarse de que los sistemas de IA actúen según valores humanos |
| 200 | **B** | ¿Diferencia AI Safety vs AI Security? → Safety: comportamiento esperado y no dañino; Security: protección contra ataques externos |
