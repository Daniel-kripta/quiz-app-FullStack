# Examen Tipo Test — Módulo 3: Inteligencia Artificial

---

## SECCIÓN 1: PREGUNTAS BÁSICAS (1–70)

**1.** ¿Cuál es la principal diferencia entre Python y JavaScript en cuanto a la indentación?
- A) JavaScript requiere indentación obligatoria; Python no
- B) Python usa la indentación como parte de la sintaxis (bloques de código); JavaScript usa llaves `{}`
- C) Ambos requieren indentación
- D) La indentación no importa en ninguno de los dos

**2.** ¿Cómo se declara una variable en Python?
- A) `var nombre = "Ana"`
- B) `nombre = "Ana"` (sin palabras clave)
- C) `let nombre = "Ana"`
- D) `string nombre = "Ana"`

**3.** ¿Cuál es el tipo de dato equivalente a `null` en Python?
- A) `null`
- B) `undefined`
- C) `None`
- D) `Nil`

**4.** ¿Cómo se imprime texto en Python?
- A) `console.log("Hola")`
- B) `echo "Hola"`
- C) `print("Hola")`
- D) `printf("Hola")`

**5.** ¿Cómo se define una función en Python?
- A) `function saluda(nombre) {}`
- B) `def saluda(nombre):`
- C) `fn saluda(nombre):`
- D) `func saluda(nombre) ->`

**6.** ¿Cuál es la sintaxis de un bucle `for` en Python para iterar sobre una lista?
- A) `for (item in lista) {}`
- B) `for item in lista:`
- C) `foreach item in lista:`
- D) `loop item in lista:`

**7.** ¿Qué hace `range(5)` en Python?
- A) Crea una lista `[1, 2, 3, 4, 5]`
- B) Genera los números `0, 1, 2, 3, 4`
- C) Crea una lista de 5 ceros
- D) Devuelve el rango de una variable

**8.** ¿Qué es una lista en Python? ¿Cuál es su equivalente en JavaScript?
- A) Equivalente a un objeto JavaScript
- B) Equivalente a un array de JavaScript: colección ordenada mutable de elementos
- C) Equivalente a un Map de JavaScript
- D) No tiene equivalente en JavaScript

**9.** ¿Cómo se accede al último elemento de una lista en Python?
- A) `lista[lista.length - 1]`
- B) `lista.last()`
- C) `lista[-1]`
- D) `lista[end]`

**10.** ¿Qué es un diccionario en Python?
- A) Una lista de palabras
- B) Una colección de pares clave-valor, equivalente a un objeto JavaScript
- C) Un tipo de bucle especial
- D) Un módulo de Python para traducción

**11.** ¿Cómo se crea un diccionario en Python?
- A) `d = [clave: valor]`
- B) `d = {clave: valor}`
- C) `d = Map(clave, valor)`
- D) `d = dict[clave, valor]`

**12.** ¿Qué es una tupla en Python?
- A) Una lista mutable
- B) Una colección ordenada e inmutable de elementos
- C) Un diccionario sin claves
- D) Un tipo de función

**13.** ¿Cómo se crea una tupla en Python?
- A) `t = [1, 2, 3]`
- B) `t = {1, 2, 3}`
- C) `t = (1, 2, 3)`
- D) `t = <1, 2, 3>`

**14.** ¿Cómo se importa un módulo en Python?
- A) `require('modulo')`
- B) `include modulo`
- C) `import modulo`
- D) `load modulo`

**15.** ¿Qué hace `import math` en Python?
- A) Importa una librería de JavaScript
- B) Importa el módulo matemático estándar de Python con funciones como `sqrt`, `pi`, `floor`
- C) Crea una clase matemática
- D) Importa numpy

**16.** ¿Cómo se maneja una excepción en Python?
- A) `try {} catch (e) {}`
- B) `try: ... except Exception as e:`
- C) `try: ... catch e:`
- D) `try ... except e ...`

**17.** ¿Qué es FastAPI?
- A) Un framework de Python para frontend
- B) Un framework web moderno y de alto rendimiento para construir APIs con Python, basado en type hints
- C) Una versión rápida de Flask
- D) Un cliente HTTP para Python

**18.** ¿Qué ventaja principal tiene FastAPI sobre Flask?
- A) FastAPI es más antiguo y estable
- B) FastAPI genera documentación automática (Swagger), valida tipos automáticamente y es asíncrono por defecto
- C) FastAPI no requiere Python
- D) Flask no puede crear APIs

**19.** ¿Cómo se inicia una aplicación FastAPI básica?
- A) `app = Flask(__name__)`
- B) `from fastapi import FastAPI; app = FastAPI()`
- C) `app = FastAPI.create()`
- D) `import fastapi; app = fastapi.App()`

**20.** ¿Qué hace el decorador `@app.get("/ruta")` en FastAPI?
- A) Crea un endpoint que responde a peticiones GET en `/ruta`
- B) Registra una función de middleware
- C) Define un modelo de datos
- D) Importa una ruta de otro módulo

**21.** ¿Qué es Pydantic en el contexto de FastAPI?
- A) Una librería de testing para Python
- B) Una librería de validación de datos que usa type hints de Python para validar y serializar datos
- C) El ORM de FastAPI
- D) Una librería para crear interfaces gráficas

**22.** ¿Cómo se define un modelo Pydantic básico?
- A) `class Usuario(dict): nombre: str`
- B) `class Usuario(BaseModel): nombre: str`
- C) `@pydantic.model class Usuario: nombre: str`
- D) `Usuario = pydantic.Model({'nombre': str})`

**23.** ¿Dónde se puede ver la documentación automática de una API FastAPI?
- A) En `/docs` (Swagger UI) y `/redoc`
- B) Solo en el código fuente
- C) En `/api-docs`
- D) Solo si se instala un plugin adicional

**24.** ¿Qué es un LLM (Large Language Model)?
- A) Un tipo de base de datos muy grande
- B) Un modelo de aprendizaje automático entrenado en enormes cantidades de texto capaz de generar, resumir y analizar lenguaje natural
- C) Un lenguaje de programación de alto nivel
- D) Un tipo de red neuronal específica para imágenes

**25.** ¿Cuál es un ejemplo de LLM conocido?
- A) TensorFlow
- B) GPT-4, Claude, Gemini, LLaMA
- C) NumPy
- D) scikit-learn

**26.** ¿Qué es la tokenización en el contexto de los LLMs?
- A) La generación de tokens de autenticación
- B) El proceso de dividir el texto de entrada en unidades llamadas tokens (palabras, subpalabras o caracteres) que el modelo puede procesar
- C) La codificación de datos en formato Base64
- D) El proceso de comprimir el modelo

**27.** ¿Aproximadamente cuántos tokens tiene una palabra en inglés en modelos como GPT?
- A) Exactamente 1 token por palabra siempre
- B) Entre 1 y 3 tokens aproximadamente (palabras comunes son 1 token; compuestas o raras, más)
- C) Exactamente 4 tokens por palabra siempre
- D) Depende del idioma, en inglés son 10 tokens por palabra

**28.** ¿Qué es un embedding en el contexto de la IA?
- A) Un proceso de compresión de imágenes
- B) Una representación numérica (vector) de un texto o dato que captura su significado semántico
- C) La incrustación de código en HTML
- D) Un tipo de base de datos vectorial

**29.** ¿Para qué se usan los embeddings?
- A) Solo para generar imágenes
- B) Para comparar la similitud semántica entre textos, búsqueda semántica y sistemas RAG
- C) Para hacer el código Python más eficiente
- D) Para convertir texto a audio

**30.** ¿Qué mide la "similitud coseno" entre dos embeddings?
- A) El ángulo entre dos vectores, siendo 1 muy similar y 0 o -1 muy diferente
- B) La distancia euclidiana entre puntos
- C) El número de palabras en común
- D) La longitud de los vectores

**31.** ¿Qué es el prompt engineering?
- A) Ingeniería de software para AI
- B) El arte de diseñar instrucciones (prompts) de forma efectiva para obtener las respuestas deseadas de un LLM
- C) La programación de modelos de lenguaje desde cero
- D) El proceso de evaluar prompts automáticamente

**32.** ¿Qué es Hugging Face?
- A) Una empresa de hardware para IA
- B) Una plataforma con miles de modelos de IA preentrenados, datasets y herramientas open source
- C) Un framework de Python para crear chatbots
- D) Una alternativa a OpenAI solo para texto

**33.** ¿Qué es un "pipeline" en Hugging Face Transformers?
- A) Una tubería de datos para bases de datos
- B) Una API de alto nivel que simplifica el uso de modelos preentrenados para tareas comunes (clasificación, generación, traducción, etc.)
- C) Un proceso de entrenamiento de modelos
- D) Un sistema de caché para modelos

**34.** ¿Qué hace `from transformers import pipeline`?
- A) Instala la librería transformers
- B) Importa la clase `pipeline` de la librería Hugging Face Transformers para usar modelos preentrenados fácilmente
- C) Crea un pipeline de datos de Python
- D) Importa los modelos de transformers como vectores

**35.** ¿Qué es `ComfyUI`?
- A) Un framework de UI para Python
- B) Una interfaz de usuario basada en nodos para generar imágenes con modelos de difusión como Stable Diffusion
- C) Una librería de componentes CSS
- D) Un editor de código para proyectos de IA

**36.** ¿Qué es la IA responsable?
- A) Una IA que nunca comete errores
- B) El conjunto de principios y prácticas para desarrollar IA de forma ética, justa, transparente y segura
- C) Una IA que requiere supervisión humana constante
- D) Un tipo de IA con menos parámetros para reducir el consumo energético

**37.** ¿Qué es el sesgo (bias) en modelos de IA?
- A) Un error de programación en el modelo
- B) Tendencias sistemáticas en las predicciones del modelo que reflejan prejuicios presentes en los datos de entrenamiento
- C) La incapacidad del modelo para aprender
- D) Un hiperparámetro del modelo

**38.** ¿Qué es el "context window" de un LLM?
- A) La interfaz gráfica del modelo
- B) La cantidad máxima de tokens que el modelo puede procesar en una sola interacción
- C) El tiempo máximo de respuesta del modelo
- D) El número máximo de usuarios simultáneos

**39.** ¿Cómo se instala un paquete en Python?
- A) `npm install paquete`
- B) `pip install paquete`
- C) `python install paquete`
- D) `apt install paquete`

**40.** ¿Qué es un entorno virtual en Python (`venv`)?
- A) Una máquina virtual para ejecutar Python
- B) Un ambiente aislado que tiene sus propias dependencias instaladas, sin afectar al sistema
- C) Una versión de Python en el navegador
- D) Un contenedor Docker específico para Python

**41.** ¿Cómo se crea un entorno virtual en Python?
- A) `pip create venv`
- B) `python -m venv nombre_env`
- C) `virtualenv --create nombre_env`
- D) `python new environment nombre_env`

**42.** ¿Qué es `requirements.txt` en Python?
- A) El archivo de configuración de la aplicación
- B) El archivo que lista las dependencias del proyecto con sus versiones para reproducir el entorno
- C) La documentación del proyecto
- D) El archivo de variables de entorno

**43.** ¿Qué hace `pip freeze > requirements.txt`?
- A) Instala todas las dependencias del `requirements.txt`
- B) Exporta las dependencias instaladas actualmente al archivo `requirements.txt`
- C) Congela la versión de Python
- D) Crea un backup del entorno virtual

**44.** ¿Qué es un Jupyter Notebook?
- A) Una versión ligera de VS Code para Python
- B) Un entorno interactivo que permite mezclar código Python, resultados, texto (Markdown) y gráficos en un solo documento
- C) Una base de datos para proyectos de IA
- D) Un framework de testing para ciencia de datos

**45.** ¿Qué extensión tienen los archivos de Jupyter Notebook?
- A) `.jupyter`
- B) `.ipynb`
- C) `.pynb`
- D) `.notebook`

**46.** ¿Qué es una API de IA como la de OpenAI/Anthropic?
- A) Una librería de Python para entrenar modelos
- B) Un servicio que expone modelos de IA via HTTP para que aplicaciones externas los usen sin necesidad de alojar el modelo
- C) Un framework para crear modelos desde cero
- D) Una base de datos de prompts

**47.** ¿Qué es la generación de texto (text generation) en LLMs?
- A) La capacidad de traducir texto entre idiomas
- B) La capacidad del modelo de predecir y generar el siguiente token/palabra para completar un texto
- C) La capacidad de leer texto de imágenes
- D) La capacidad de comprimir texto

**48.** ¿Qué es el "temperature" en un LLM?
- A) La temperatura del servidor que ejecuta el modelo
- B) Un parámetro que controla la aleatoriedad de las respuestas: valores altos (cercanos a 1) producen respuestas más creativas, valores bajos más deterministas
- C) La velocidad de generación del modelo
- D) El tamaño del contexto del modelo

**49.** ¿Qué significa "zero-shot" en el contexto de LLMs?
- A) El modelo no usa ningún dato de entrenamiento
- B) Pedirle al modelo que realice una tarea sin darle ningún ejemplo previo en el prompt
- C) El modelo tiene cero errores
- D) El modelo responde en cero segundos

**50.** ¿Qué es "few-shot prompting"?
- A) Usar el modelo con muy poca memoria RAM
- B) Incluir algunos ejemplos (shots) en el prompt para guiar al modelo sobre el formato o tipo de respuesta esperada
- C) Hacer pocas preguntas al modelo
- D) Limitar las respuestas del modelo a pocas palabras

**51.** ¿Qué es la "alucinación" en LLMs?
- A) Un modo creativo del modelo
- B) Cuando el modelo genera información plausible pero factualmente incorrecta o inventada con aparente confianza
- C) Un error de software del modelo
- D) Cuando el modelo no puede responder

**52.** ¿Qué es RAG (Retrieval-Augmented Generation)?
- A) Un tipo de modelo de lenguaje alternativo a los Transformers
- B) Una arquitectura que combina búsqueda de información relevante (retrieval) con generación de texto, para que el LLM responda con datos actualizados o específicos
- C) Un método de entrenamiento de LLMs
- D) Una técnica de compresión de modelos

**53.** ¿Cuál es el problema que soluciona RAG?
- A) La lentitud de los modelos de lenguaje
- B) El conocimiento desactualizado o limitado del LLM al proporcionar contexto externo relevante en tiempo real
- C) Los errores de tokenización
- D) La falta de soporte para múltiples idiomas

**54.** ¿Qué es una "base de datos vectorial"?
- A) Una base de datos para almacenar vectores matemáticos de álgebra lineal
- B) Una base de datos optimizada para almacenar y buscar embeddings (vectores de alta dimensión) por similitud semántica
- C) Una base de datos NoSQL especial
- D) Una base de datos que usa vectores de compresión

**55.** ¿Cuál es un ejemplo de base de datos vectorial?
- A) PostgreSQL, MySQL
- B) Pinecone, Chroma, Weaviate, pgvector
- C) MongoDB, Redis
- D) SQLite, SQLServer

**56.** ¿Qué tipo de relación tiene Python con los espacios en blanco?
- A) Los espacios son opcionales en Python
- B) La indentación con espacios o tabs define los bloques de código (if, for, funciones, clases)
- C) Python solo acepta tabs, no espacios
- D) Los espacios se ignoran completamente

**57.** ¿Cómo se hace una lista por comprensión (list comprehension) en Python?
- A) `list(for x in range(10))`
- B) `[x for x in range(10)]`
- C) `[for x in range(10): x]`
- D) `comprehension(x, range(10))`

**58.** ¿Qué devuelve `[x**2 for x in range(5)]`?
- A) `[0, 1, 2, 3, 4]`
- B) `[0, 1, 4, 9, 16]`
- C) `[1, 4, 9, 16, 25]`
- D) `[0, 2, 4, 6, 8]`

**59.** ¿Cómo se define una clase en Python?
- A) `class MiClase {}`
- B) `class MiClase:`
- C) `def class MiClase:`
- D) `type MiClase:`

**60.** ¿Qué es `self` en una clase Python?
- A) Un módulo de Python
- B) La referencia a la instancia actual del objeto, equivalente a `this` en JavaScript
- C) El constructor de la clase
- D) Una variable global de Python

**61.** ¿Cómo se define el constructor de una clase en Python?
- A) `def constructor(self):`
- B) `def __init__(self):`
- C) `def new(self):`
- D) `def create(self):`

**62.** ¿Qué es la herencia en POO Python?
- A) Copiar el código de una clase a otra
- B) Crear una nueva clase que hereda atributos y métodos de una clase padre
- C) Compartir variables entre módulos
- D) Importar clases de otros módulos

**63.** ¿Qué hace `super().__init__()` en Python?
- A) Crea una superclase
- B) Llama al constructor de la clase padre
- C) Destruye la instancia actual
- D) Accede a los métodos privados

**64.** ¿Qué devuelve `type("hola")` en Python?
- A) `"string"`
- B) `<class 'str'>`
- C) `"str"`
- D) `String`

**65.** ¿Cómo se comprueba si una variable es de tipo string en Python?
- A) `variable.type === "str"`
- B) `isinstance(variable, str)`
- C) `type(variable) == "str"`
- D) `variable is str`

**66.** ¿Qué hace `len("hola")` en Python?
- A) Devuelve el primer carácter
- B) Devuelve la longitud de la cadena: `4`
- C) Cuenta las letras mayúsculas
- D) Devuelve el índice del último carácter

**67.** ¿Qué es un f-string en Python?
- A) Un archivo de formato especial
- B) Una forma de interpolación de strings: `f"Hola {nombre}, tienes {edad} años"`
- C) Un tipo de función anónima
- D) Un método de formateo heredado de Python 2

**68.** ¿Qué hace `str.split(",")` en Python?
- A) Divide el string por espacios
- B) Divide el string por comas y devuelve una lista
- C) Elimina las comas del string
- D) Cuenta el número de comas

**69.** ¿Qué es una función `lambda` en Python?
- A) Una función que solo puede devolver None
- B) Una función anónima de una sola expresión: `lambda x: x * 2`
- C) Una función que se ejecuta automáticamente
- D) Una función recursiva simplificada

**70.** ¿Qué hace `sorted([3, 1, 4, 1, 5], reverse=True)`?
- A) Ordena la lista de menor a mayor modificándola
- B) Devuelve una nueva lista ordenada de mayor a menor: `[5, 4, 3, 1, 1]`
- C) Elimina duplicados y ordena
- D) Invierte el orden de los elementos sin ordenar

---

## SECCIÓN 2: PREGUNTAS MEDIAS (71–150)

**71.** ¿Cuál es la diferencia entre `append()` y `extend()` en listas Python?
- A) Son equivalentes
- B) `append()` añade un elemento al final; `extend()` añade todos los elementos de un iterable
- C) `extend()` crea una nueva lista; `append()` modifica la original
- D) `append()` es más rápido para listas grandes

**72.** ¿Qué es un generador en Python y cuándo lo usarías?
- A) Una función que genera números aleatorios
- B) Una función que usa `yield` para producir valores de forma lazy (uno a la vez), ahorrando memoria con secuencias grandes
- C) Un tipo especial de lista comprensión
- D) Una función que genera clases dinámicamente

**73.** ¿Cuál es la diferencia entre `*args` y `**kwargs` en Python?
- A) Son equivalentes
- B) `*args` captura argumentos posicionales extra como tupla; `**kwargs` captura argumentos con nombre extra como diccionario
- C) `**kwargs` es solo para funciones de clase
- D) `*args` solo acepta strings; `**kwargs` cualquier tipo

**74.** ¿Qué hace el decorador `@property` en Python?
- A) Marca una propiedad como privada
- B) Convierte un método en una propiedad accesible como atributo, sin paréntesis
- C) Cachea el resultado del método
- D) Define una propiedad de clase en lugar de instancia

**75.** ¿Qué es `async def` en Python?
- A) Define una función que siempre se ejecuta en paralelo
- B) Define una función coroutine que puede ser pausada con `await` para operaciones I/O sin bloquear el hilo
- C) Define una función asíncrona que usa múltiples hilos
- D) Define una función que no retorna valores

**76.** En FastAPI, ¿cómo se define un endpoint que recibe un body JSON validado?
- A) `@app.post("/ruta") def crear(body: dict):`
- B) `@app.post("/ruta") def crear(datos: MiModelo):` donde `MiModelo` es una subclase de `BaseModel`
- C) `@app.post("/ruta", body=True) def crear():`
- D) `@app.post("/ruta") def crear(request: Request): body = request.json()`

**77.** ¿Cómo se accede a los parámetros de ruta en FastAPI?
- A) `request.params.id`
- B) Declarando el parámetro en la función con el mismo nombre que en la ruta: `def get_item(item_id: int):`
- C) `Path.params['id']`
- D) `fastapi.params.path_id`

**78.** ¿Qué hace la validación automática de FastAPI?
- A) Valida que la API esté funcionando correctamente
- B) Valida que los datos de entrada (query params, path params, body) cumplan los tipos declarados y devuelve 422 si no
- C) Valida el token JWT automáticamente
- D) Valida la conexión a la base de datos

**79.** ¿Qué código HTTP devuelve FastAPI por defecto cuando falla la validación de tipos?
- A) 400
- B) 422 (Unprocessable Entity)
- C) 500
- D) 401

**80.** ¿Qué es un "prompt" en el contexto de LLMs?
- A) El sistema operativo del servidor del modelo
- B) La instrucción o texto de entrada que se envía al modelo para obtener una respuesta
- C) La arquitectura interna del modelo
- D) Los pesos del modelo neuronal

**81.** ¿Qué significa "chain-of-thought prompting"?
- A) Concatenar múltiples prompts en uno
- B) Incluir en el prompt instrucciones para que el modelo razone paso a paso antes de dar la respuesta final
- C) Un tipo de prompt que usa cadenas de Markov
- D) Usar el output de un prompt como input del siguiente automáticamente

**82.** ¿Qué es el "system prompt"?
- A) El prompt que genera el sistema automáticamente
- B) Un mensaje de configuración que establece el comportamiento, tono y restricciones del LLM antes de la conversación del usuario
- C) El primer mensaje del usuario
- D) El prompt de la API de OpenAI para autenticarse

**83.** ¿Qué es el "fine-tuning" de un LLM?
- A) Ajustar los parámetros de temperatura y top-p
- B) Entrenar adicionalmente un modelo preentrenado con datos específicos del dominio para mejorar su rendimiento en tareas particulares
- C) Comprimir el modelo para hacerlo más rápido
- D) Ajustar manualmente los pesos del modelo

**84.** ¿Cuál es la diferencia entre fine-tuning y RAG?
- A) No hay diferencia, son equivalentes
- B) Fine-tuning modifica los pesos del modelo para incorporar conocimiento; RAG proporciona información relevante en el prompt en tiempo de inferencia, sin modificar el modelo
- C) RAG es más caro que fine-tuning
- D) Fine-tuning solo funciona con modelos de código abierto

**85.** ¿Qué son los "tokens" de API en servicios de LLM (OpenAI, Anthropic)?
- A) Tokens de autenticación
- B) Las unidades de texto procesadas; se cobran por número de tokens de entrada y salida
- C) Paquetes de datos HTTP
- D) Parámetros de configuración de la API

**86.** ¿Cómo se usa el pipeline de Hugging Face para clasificación de sentimientos?
- A) `pipeline.classify("texto")`
- B) `classifier = pipeline("sentiment-analysis"); classifier("Me encanta este producto")`
- C) `HuggingFace.analyze("texto", task="sentiment")`
- D) `sentiment = pipeline.load("bert-sentiment"); sentiment.predict("texto")`

**87.** ¿Qué es un "transformer" en el contexto de arquitecturas de IA?
- A) Una función que transforma datos de un formato a otro
- B) Una arquitectura de red neuronal basada en mecanismos de atención (attention) que es la base de la mayoría de LLMs modernos
- C) Un tipo de normalización de datos
- D) Un algoritmo de compresión de modelos

**88.** ¿Qué es el mecanismo de "attention" en transformers?
- A) Un sistema de alertas del modelo
- B) Un mecanismo que permite al modelo ponderar la importancia de cada token en relación con los demás al procesar una secuencia
- C) La forma en que el modelo presta atención a los prompts del usuario
- D) Un tipo de función de activación

**89.** En Python, ¿qué hace `with open("file.txt", "r") as f:`?
- A) Crea un archivo nuevo llamado `file.txt`
- B) Abre el archivo en modo lectura y garantiza que se cerrará automáticamente al salir del bloque
- C) Escribe en el archivo `file.txt`
- D) Crea un contexto de ejecución para operaciones de archivo en paralelo

**90.** ¿Cómo se lee todo el contenido de un archivo en Python?
- A) `f.read_all()`
- B) `f.read()` dentro de un bloque `with open()`
- C) `read(f)`
- D) `f.get_content()`

**91.** ¿Qué es `json.loads()` en Python?
- A) Carga un archivo JSON desde disco
- B) Parsea un string JSON y lo convierte a un dict/lista de Python
- C) Convierte un objeto Python a JSON
- D) Valida que un string sea JSON válido

**92.** ¿Qué hace `json.dumps(objeto)`?
- A) Guarda el objeto en un archivo JSON
- B) Convierte un objeto Python (dict, lista) a un string JSON
- C) Parsea un string JSON a dict
- D) Imprime el objeto en formato JSON en la consola

**93.** ¿Qué es `requests` en Python?
- A) Una librería para gestionar peticiones de usuarios
- B) Una librería HTTP popular para hacer peticiones web (GET, POST, etc.) de forma sencilla
- C) El módulo nativo de Python para HTTP
- D) Una alternativa a FastAPI para crear APIs

**94.** ¿Cómo se hace una petición GET con la librería `requests`?
- A) `requests.get(url).data`
- B) `response = requests.get(url); data = response.json()`
- C) `response = requests.fetch(url)`
- D) `requests.call(url, method='GET')`

**95.** ¿Qué es `httpx` y cuándo se prefiere sobre `requests`?
- A) Una versión más moderna de requests, igual pero con soporte asíncrono (`async/await`)
- B) Una librería para HTTP/2 exclusivamente
- C) Un cliente HTTP más antiguo que requests
- D) Solo funciona con FastAPI

**96.** En FastAPI, ¿cómo se gestionan los errores HTTP personalizados?
- A) Con `return error(404, "No encontrado")`
- B) Con `raise HTTPException(status_code=404, detail="No encontrado")`
- C) Con `response.status = 404`
- D) Con `fastapi.error(404)`

**97.** ¿Qué son los "routers" en FastAPI?
- A) La configuración de red de FastAPI
- B) Objetos `APIRouter` que agrupan endpoints relacionados y se montan en la app principal
- C) Middleware de enrutamiento de FastAPI
- D) La documentación automática de FastAPI

**98.** ¿Cómo se monta un router en FastAPI?
- A) `app.route(router, prefix="/api")`
- B) `app.include_router(router, prefix="/api/usuarios")`
- C) `app.mount(router, "/api")`
- D) `router.mount_on(app)`

**99.** ¿Qué es Stable Diffusion?
- A) Una versión estable de Python
- B) Un modelo de IA generativa de código abierto para generar imágenes a partir de descripciones de texto
- C) Un framework de testing estable para IA
- D) Un protocolo de comunicación entre modelos de IA

**100.** ¿Qué hace un "negative prompt" en generación de imágenes?
- A) Genera imágenes en negativo (invertidas)
- B) Indica al modelo qué elementos NO debe incluir en la imagen generada
- C) Reduce la resolución de la imagen
- D) Invierte el proceso de generación

**101.** ¿Qué es la "anotación de tipos" (type hinting) en Python?
- A) Un sistema de tipos obligatorio como en Java
- B) Decoradores opcionales que indican los tipos esperados de parámetros y retornos, mejorando la legibilidad y el soporte de IDEs
- C) Un tipo especial de comentario
- D) El sistema de tipos exclusivo de FastAPI

**102.** ¿Qué significa `def procesar(texto: str) -> list[str]:` en Python?
- A) La función solo acepta exactamente un string de menos de `list[str]` caracteres
- B) La función recibe un parámetro `texto` de tipo `str` y retorna una lista de strings
- C) Los tipos después de `:` y `->` son obligatorios en Python moderno
- D) Es sintaxis incorrecta en Python

**103.** ¿Qué es `Optional[str]` en Python type hints?
- A) Un string que no puede ser None
- B) Indica que el valor puede ser `str` o `None`; equivalente a `str | None`
- C) Un string opcional que puede omitirse en la función
- D) Una anotación de TypeScript importada en Python

**104.** ¿Cómo se define un campo con valor por defecto en Pydantic?
- A) `campo: str = default("valor")`
- B) `campo: str = "valor"` o `campo: Optional[str] = None`
- C) `campo = Field(default="valor", type=str)`
- D) `@default campo: str = "valor"`

**105.** ¿Qué es `Field` en Pydantic?
- A) Un tipo de campo en la base de datos
- B) Una función para añadir metadatos a los campos del modelo (descripción, validaciones personalizadas, alias, etc.)
- C) El campo principal de un modelo Pydantic
- D) Una anotación de tipo avanzada

**106.** En el contexto de una arquitectura RAG, ¿cuál es el flujo correcto?
- A) Usuario → LLM → Búsqueda vectorial → Respuesta
- B) Usuario → Búsqueda vectorial de docs relevantes → Insertar docs en el prompt → LLM → Respuesta
- C) Usuario → Embeddings → LLM → Base de datos → Respuesta
- D) Base de datos → LLM → Usuario → Vectores

**107.** ¿Qué es el "chunk" en el procesamiento de documentos para RAG?
- A) Un tipo de formato de archivo
- B) Un fragmento de texto de tamaño fijo (o semántico) en que se divide un documento para crear embeddings más precisos
- C) Un paquete de tokens del LLM
- D) El resultado de una búsqueda vectorial

**108.** ¿Qué es la "temperatura 0" en un LLM?
- A) El modelo se congela y no responde
- B) El modelo es completamente determinista: siempre elige el token más probable, sin aleatoriedad
- C) El modelo usa menos recursos computacionales
- D) El modelo solo responde con respuestas cortas

**109.** ¿Qué es `top_p` (nucleus sampling) en LLMs?
- A) Los mejores P tokens del vocabulario
- B) Un parámetro que limita la selección de tokens al subconjunto cuya probabilidad acumulada suma P, controlando diversidad
- C) El porcentaje del contexto que usa el modelo
- D) La proporción de tokens de entrada vs salida

**110.** ¿Qué problema ético plantea el sesgo de género en modelos de lenguaje?
- A) Que el modelo no puede procesar nombres de género no binario
- B) Que el modelo puede reproducir y amplificar estereotipos de género presentes en los datos de entrenamiento, causando discriminación en aplicaciones reales
- C) Que el modelo consume más energía al procesar texto de géneros diferentes
- D) Que el modelo no puede manejar pronombres neutros

**111.** ¿Qué es GDPR/RGPD en el contexto de IA?
- A) Un protocolo de comunicación entre modelos
- B) La regulación europea de protección de datos que impacta cómo las aplicaciones de IA pueden recopilar, procesar y almacenar datos personales
- C) Un tipo de licencia de modelo de IA
- D) Un estándar técnico de Hugging Face

**112.** ¿Qué es el "hallucination mitigation" en LLMs?
- A) Técnicas para hacer que el modelo alucine más creativamente
- B) Estrategias para reducir las alucinaciones: RAG para dar contexto factual, incluir fuentes, pedir verificación paso a paso
- C) Un tipo de fine-tuning especial
- D) Un filtro post-procesamiento de respuestas

**113.** ¿Qué hace `async def` con `await` en Python?
- A) Ejecuta la función en un nuevo hilo
- B) Pausa la ejecución de la coroutine hasta que la operación awaitable termine, cediendo el control al event loop
- C) Cancela la operación si tarda demasiado
- D) Ejecuta la función en paralelo con otras

**114.** ¿Qué es `asyncio` en Python?
- A) Una librería para threading
- B) La librería estándar de Python para programación asíncrona basada en un event loop
- C) Una versión asíncrona de requests
- D) El módulo de async de FastAPI

**115.** ¿Cuándo usar `async` en un endpoint de FastAPI?
- A) Siempre, para mejor rendimiento
- B) Cuando el endpoint realiza operaciones I/O (peticiones HTTP, BD, archivos) para no bloquear el servidor
- C) Solo cuando el cliente lo solicita
- D) Nunca, FastAPI maneja la asincronía internamente

**116.** ¿Qué es un "model card" en Hugging Face?
- A) Una tarjeta de crédito para pagar el uso del modelo
- B) Documentación que acompaña a un modelo describiendo su uso, limitaciones, datos de entrenamiento y métricas de evaluación
- C) La configuración técnica del modelo
- D) Un tipo de checkpoint del modelo

**117.** ¿Qué es el "context stuffing" en RAG?
- A) Comprimir el contexto del LLM
- B) Insertar demasiado contexto en el prompt, lo que puede degradar la calidad de la respuesta al superar la capacidad de atención del modelo
- C) Un ataque de prompt injection
- D) Una técnica de optimización de embeddings

**118.** ¿Cuál de estos es un problema conocido del fine-tuning vs RAG para datos actualizados?
- A) RAG no puede actualizar datos
- B) El fine-tuning "memoriza" los datos de entrenamiento pero no puede actualizarlos fácilmente sin reentrenar; RAG puede actualizar la base de conocimiento sin tocar el modelo
- C) El fine-tuning es siempre más preciso
- D) RAG no es compatible con modelos fine-tuneados

**119.** ¿Qué es RLHF (Reinforcement Learning from Human Feedback)?
- A) Una técnica para entrenar robots con feedback humano
- B) Una técnica para alinear LLMs con preferencias humanas usando evaluadores humanos que puntúan las respuestas del modelo
- C) Un tipo de fine-tuning sin supervisión
- D) El proceso de evaluar manualmente los embeddings

**120.** ¿Qué hace `model.predict()` en scikit-learn?
- A) Entrena el modelo con nuevos datos
- B) Genera predicciones para nuevos datos a partir del modelo ya entrenado
- C) Evalúa el rendimiento del modelo
- D) Guarda el modelo en disco

**121.** ¿Qué es pandas en Python?
- A) Un framework web de Python
- B) Una librería de análisis y manipulación de datos que provee estructuras como DataFrame y Series
- C) Una librería de visualización de datos
- D) Un ORM de Python

**122.** ¿Qué es un DataFrame de pandas?
- A) Una imagen de datos
- B) Una estructura de datos bidimensional con filas y columnas, similar a una tabla de base de datos o hoja de cálculo
- C) Una lista de objetos Python
- D) Un tipo de gráfico

**123.** ¿Qué hace `df.head()` en pandas?
- A) Devuelve el primer elemento de cada columna
- B) Devuelve las primeras 5 filas del DataFrame por defecto
- C) Devuelve los nombres de las columnas
- D) Devuelve el tamaño del DataFrame

**124.** ¿Qué es numpy en Python?
- A) Un framework de IA
- B) Una librería para computación numérica con arrays multidimensionales eficientes y operaciones matemáticas
- C) Una librería de visualización
- D) Un gestor de paquetes científicos

**125.** ¿Qué hace `np.array([1, 2, 3]) * 2`?
- A) Dobla el tamaño del array
- B) Multiplica cada elemento por 2: `[2, 4, 6]`
- C) Crea dos copias del array
- D) Lanza un error porque no es una operación válida

**126.** ¿Qué es la "inferencia" en el contexto de modelos de IA?
- A) El proceso de entrenar el modelo
- B) El proceso de usar un modelo ya entrenado para generar predicciones o respuestas con nuevos datos
- C) El proceso de evaluar el modelo
- D) El proceso de desplegar el modelo en producción

**127.** ¿Qué es un "checkpoint" en entrenamiento de modelos?
- A) Un punto de control en el código del modelo
- B) Una copia guardada del estado del modelo durante el entrenamiento (pesos, optimizador) para poder reanudar o usar el mejor modelo
- C) El primer punto de entrenamiento
- D) La validación del modelo en cada epoch

**128.** ¿Qué es el "overfitting" en modelos de ML?
- A) El modelo tiene demasiados parámetros
- B) El modelo aprende demasiado bien los datos de entrenamiento pero generaliza mal a datos nuevos (memoriza en lugar de aprender patrones)
- C) El modelo es demasiado lento para entrenar
- D) El modelo usa demasiada memoria GPU

**129.** ¿Qué son los "weights" (pesos) de un modelo neuronal?
- A) El tamaño en disco del modelo
- B) Los parámetros ajustables del modelo que se optimizan durante el entrenamiento para minimizar el error
- C) La configuración de hardware del modelo
- D) Los tipos de capas del modelo

**130.** ¿Qué es `uvicorn` en el contexto de FastAPI?
- A) Una base de datos para Python
- B) Un servidor ASGI de alto rendimiento usado para ejecutar aplicaciones FastAPI en producción
- C) Una herramienta de testing de FastAPI
- D) El compilador de Python para IA

**131.** ¿Qué hace `uvicorn main:app --reload`?
- A) Compila y publica la app en producción
- B) Inicia el servidor uvicorn con la app FastAPI con recarga automática al detectar cambios
- C) Ejecuta los tests de la aplicación
- D) Reinicia la base de datos

**132.** ¿Qué es ASGI vs WSGI en Python?
- A) Son equivalentes
- B) WSGI es el estándar síncrono de interfaces web Python; ASGI es su sucesor asíncrono que soporta WebSockets y async/await
- C) ASGI es más antiguo que WSGI
- D) WSGI es para APIs; ASGI es para webs

**133.** ¿Qué es un "agent" en el contexto de LLMs?
- A) Un asistente humano que revisa las respuestas del modelo
- B) Un sistema donde el LLM puede usar herramientas (buscar en internet, ejecutar código, consultar BD) de forma autónoma para completar tareas complejas
- C) Un tipo de prompt especial
- D) El proceso de fine-tuning autónomo

**134.** ¿Qué es "function calling" en LLMs?
- A) Una función de Python que llama al LLM
- B) Una capacidad de los LLMs de generar llamadas estructuradas a funciones/herramientas definidas por el desarrollador
- C) La capacidad del LLM de ejecutar código Python directamente
- D) Un tipo de prompt de función matemática

**135.** ¿Qué es el "max_tokens" en una llamada a API de LLM?
- A) El número máximo de usuarios que pueden usar el modelo
- B) El límite máximo de tokens que puede generar la respuesta del modelo
- C) El número de tokens del prompt de entrada
- D) La cantidad máxima de memoria que usa el modelo

**136.** ¿Qué es el concepto de "grounding" en IA?
- A) Conectar el modelo a tierra físicamente para evitar estática
- B) Anclar las respuestas del LLM en fuentes o datos verificables, reduciendo alucinaciones
- C) El proceso de entrenar modelos con datos reales
- D) La capacidad del modelo de entender el mundo real

**137.** ¿Qué hace `@app.on_event("startup")` en FastAPI?
- A) Define el endpoint de inicio de la aplicación
- B) Registra una función que se ejecuta cuando arranca la aplicación (para inicializar conexiones, cargar modelos, etc.)
- C) Configura el puerto de arranque
- D) Carga la configuración inicial de la base de datos

**138.** ¿Qué es `Depends` en FastAPI?
- A) Una librería de dependencias de Python
- B) Un sistema de inyección de dependencias para compartir lógica reutilizable entre endpoints (autenticación, BD, etc.)
- C) Un decorador de dependencias circulares
- D) Una función que verifica dependencias instaladas

**139.** ¿Qué es el "latency" vs "throughput" en el contexto de APIs de LLM?
- A) Son sinónimos
- B) Latency: tiempo hasta la primera respuesta (importante para UX en tiempo real); Throughput: cuántas peticiones/tokens procesa por segundo (importante para escala)
- C) Latency: cantidad de tokens; Throughput: velocidad de entrenamiento
- D) Son métricas solo relevantes en modelos de imagen

**140.** ¿Qué es el "streaming" en respuestas de LLM?
- A) Enviar el audio del modelo en tiempo real
- B) Transmitir la respuesta token a token a medida que se genera, en lugar de esperar la respuesta completa, mejorando la experiencia del usuario
- C) Procesar múltiples peticiones simultáneamente
- D) Transmitir el modelo a otro servidor

**141.** En Python, ¿cuál es la diferencia entre `==` e `is`?
- A) Son equivalentes
- B) `==` compara valores; `is` compara identidad de objetos (si son el mismo objeto en memoria)
- C) `is` es más rápido para cualquier comparación
- D) `==` solo funciona con primitivos; `is` con objetos

**142.** ¿Qué hace `@staticmethod` en Python?
- A) Hace que el método no pueda ser sobreescrito
- B) Define un método que no recibe `self` ni `cls`: pertenece a la clase pero no accede a la instancia ni a la clase
- C) Cachea el resultado del método
- D) Define una variable de clase en lugar de instancia

**143.** ¿Qué es `@classmethod` en Python?
- A) Marca la clase como clasificable
- B) Define un método que recibe `cls` (la clase) en lugar de `self`, útil para constructores alternativos
- C) Hace que el método sea heredado automáticamente
- D) Define un método abstracto

**144.** ¿Qué hace `enumerate(lista)` en Python?
- A) Ordena la lista con índices
- B) Devuelve pares `(índice, elemento)` al iterar, útil cuando necesitas el índice y el valor
- C) Cuenta los elementos de la lista
- D) Convierte la lista en un diccionario

**145.** ¿Qué hace `zip(lista1, lista2)` en Python?
- A) Comprime las listas en formato zip
- B) Combina dos o más iterables en pares de tuplas: `[(a1, b1), (a2, b2), ...]`
- C) Une dos listas en una sola
- D) Verifica que ambas listas tengan la misma longitud

**146.** ¿Qué son los "guardrails" en aplicaciones de IA?
- A) Barreras de seguridad en hardware de IA
- B) Controles y filtros que restringen el comportamiento del LLM: evitar contenido dañino, mantener el tema, verificar respuestas
- C) Parámetros de configuración del modelo
- D) Logs de seguridad de la aplicación

**147.** ¿Qué es el "prompt injection" y cómo se mitiga?
- A) Optimización de prompts para mejor rendimiento
- B) Un ataque donde un usuario malicioso incluye instrucciones en su input para manipular el comportamiento del LLM; se mitiga con sandboxing, validación de input y separación clara de instrucciones
- C) Un tipo de fine-tuning con prompts inyectados
- D) La técnica de insertar contexto en el prompt del sistema

**148.** ¿Qué diferencia hay entre `text-embedding-ada-002` y un modelo GPT?
- A) Son el mismo tipo de modelo
- B) Los modelos de embedding solo generan vectores numéricos (no texto); los modelos GPT generan texto
- C) `text-embedding-ada-002` es más moderno
- D) Los embeddings son más caros de usar

**149.** ¿Qué es el "context poisoning" en RAG?
- A) Un problema de rendimiento en bases de datos vectoriales
- B) Cuando documentos maliciosos o erróneos en la base de conocimiento se recuperan e incluyen en el contexto del LLM, contaminando la respuesta
- C) Cuando el contexto del LLM se llena demasiado
- D) Un ataque de denegación de servicio al sistema RAG

**150.** ¿Qué hace `model.encode(texto)` en sentence-transformers?
- A) Encripta el texto para protegerlo
- B) Convierte el texto en un vector de embedding usando el modelo
- C) Codifica el texto en Base64
- D) Tokeniza el texto y devuelve los IDs de tokens

---

## SECCIÓN 3: PREGUNTAS DIFÍCILES (151–200)

**151.** ¿Qué problema tiene el siguiente código FastAPI?
```python
from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()

class Usuario(BaseModel):
    nombre: str
    email: str
    password: str

@app.post("/usuarios")
def crear_usuario(usuario: Usuario):
    db.insert(usuario.dict())
    return usuario
```
- A) No hay ningún problema
- B) La contraseña se devuelve en la respuesta y se almacena en texto plano; debería hashearse antes de guardar y excluirse de la respuesta
- C) Solo falta el manejo de errores
- D) Pydantic no acepta campos de contraseña

**152.** ¿Qué es el problema de "lost update" en concurrencia de bases de datos?
- A) Un registro que se pierde por una migración fallida
- B) Cuando dos transacciones leen el mismo dato, ambas hacen cambios basados en ese valor, y la segunda escritura sobreescribe la primera sin considerar el cambio intermedio
- C) Cuando se elimina accidentalmente un registro
- D) Cuando el ORM pierde la conexión durante una actualización

**153.** ¿Cuál es la diferencia entre tokenización BPE (Byte Pair Encoding) y tokenización por palabras?
- A) No hay diferencia práctica
- B) BPE divide las palabras en subpalabras frecuentes, permitiendo representar vocabulario ilimitado con un número finito de tokens y manejando palabras nuevas/raras
- C) La tokenización por palabras es más eficiente en uso de tokens
- D) BPE solo funciona en inglés

**154.** ¿Por qué los LLMs tienen dificultades con matemáticas precisas?
- A) No tienen módulo matemático
- B) Los LLMs predicen tokens estadísticamente: no "calculan", sino que predicen secuencias plausibles de tokens, lo que puede llevar a errores en aritmética exacta
- C) El contexto no es suficiente para cálculos largos
- D) La temperatura afecta los cálculos matemáticos

**155.** ¿Qué es el "position encoding" en los Transformers?
- A) La posición del servidor del modelo
- B) Información añadida a los embeddings de tokens para que el modelo sepa el orden de los tokens en la secuencia (ya que el attention es paralelo y no secuencial)
- C) El índice de cada token en el vocabulario
- D) Un tipo de normalización de la capa de atención

**156.** ¿Qué hace el siguiente código y cuál es su propósito en un sistema RAG?
```python
from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer('all-MiniLM-L6-v2')

def buscar_similares(consulta: str, documentos: list[str], top_k: int = 3):
    emb_consulta = model.encode(consulta)
    emb_docs = model.encode(documentos)
    similitudes = np.dot(emb_docs, emb_consulta) / (
        np.linalg.norm(emb_docs, axis=1) * np.linalg.norm(emb_consulta)
    )
    indices = np.argsort(similitudes)[::-1][:top_k]
    return [documentos[i] for i in indices]
```
- A) Clasifica documentos por longitud
- B) Implementa la parte de retrieval de RAG: busca los K documentos más semánticamente similares a la consulta usando similitud coseno
- C) Genera embeddings para fine-tuning
- D) Comprime documentos en vectores para almacenamiento eficiente

**157.** ¿Qué es "quantization" en el contexto de LLMs?
- A) Medir la calidad de las respuestas del modelo
- B) Reducir la precisión numérica de los pesos del modelo (ej: de float32 a int8) para reducir el uso de memoria y aumentar la velocidad de inferencia, con pérdida mínima de calidad
- C) El proceso de contar tokens eficientemente
- D) Comprimir el código fuente del modelo

**158.** ¿Cuál es la diferencia entre `self-attention` y `cross-attention` en Transformers?
- A) Son equivalentes
- B) Self-attention: cada token atiende a todos los demás tokens de la misma secuencia. Cross-attention: los tokens de una secuencia atienden a los de otra (ej: encoder-decoder en traducción)
- C) Cross-attention es más rápido que self-attention
- D) Self-attention es para texto; cross-attention para imágenes

**159.** ¿Qué hace este código Pydantic y cuál es su propósito?
```python
from pydantic import BaseModel, field_validator

class Email(BaseModel):
    direccion: str

    @field_validator('direccion')
    @classmethod
    def validar_email(cls, v):
        if '@' not in v or '.' not in v.split('@')[-1]:
            raise ValueError('Email inválido')
        return v.lower()
```
- A) Valida contraseñas
- B) Valida que el campo `direccion` sea un email válido y lo normaliza a minúsculas al crear el modelo
- C) Encripta el email al almacenarlo
- D) Valida el formato del email solo en producción

**160.** ¿Qué es el "attention sink" problem en LLMs de contexto largo?
- A) Cuando el modelo pierde atención con contextos largos
- B) La tendencia de los mecanismos de atención a dar demasiado peso a los primeros tokens, lo que puede degradar el rendimiento en contextos muy largos
- C) Un error de memoria en modelos grandes
- D) Cuando los pesos de atención se vuelven negativos

**161.** ¿Cuál es el riesgo de hacer `eval(input_usuario)` en una aplicación Python que usa LLMs?
- A) Es lento para strings largos
- B) Permite la ejecución de código arbitrario: si el input viene del usuario o del LLM, podría ejecutarse código malicioso en el servidor
- C) Solo es peligroso en Python 2
- D) No hay riesgo si se usa dentro de un try/catch

**162.** ¿Qué es "model distillation"?
- A) Destilar el alcohol del proceso de entrenamiento
- B) Entrenar un modelo más pequeño (student) para que imite el comportamiento de un modelo más grande (teacher), obteniendo un modelo eficiente con rendimiento similar
- C) Comprimir los pesos del modelo con un algoritmo de compresión
- D) Eliminar capas del modelo para hacerlo más rápido

**163.** ¿Por qué es importante el "reproducibility" en experimentos de IA?
- A) Para que los modelos sean más rápidos
- B) Para que otros investigadores o el equipo pueda reproducir los mismos resultados, esencial para validación científica y depuración
- C) Para reducir el consumo energético del entrenamiento
- D) Solo es importante en producción

**164.** ¿Qué hace `@app.middleware("http")` en FastAPI?
- A) Define el protocolo de comunicación de la API
- B) Registra un middleware que se ejecuta para cada petición HTTP, antes y después del handler
- C) Configura el servidor HTTP de FastAPI
- D) Añade soporte para WebSocket

**165.** ¿Qué es el "semantic search" y en qué se diferencia de la búsqueda por palabras clave?
- A) La búsqueda semántica usa palabras clave avanzadas
- B) La búsqueda semántica usa embeddings para encontrar resultados conceptualmente similares aunque no compartan palabras exactas; la búsqueda por keyword solo encuentra coincidencias literales
- C) La búsqueda semántica es siempre más precisa
- D) Son equivalentes para textos cortos

**166.** ¿Qué es el fenómeno de "catastrophic forgetting" en fine-tuning?
- A) Cuando el modelo olvida cómo generar texto largo
- B) Cuando al hacer fine-tuning en datos específicos, el modelo "olvida" parte del conocimiento general aprendido en el preentrenamiento
- C) Cuando los pesos del modelo se corrompen durante el entrenamiento
- D) Cuando el modelo memoriza exactamente los datos de training

**167.** ¿Qué es LoRA (Low-Rank Adaptation) en el contexto de fine-tuning?
- A) Una librería de Python para low-rank matrices
- B) Una técnica eficiente de fine-tuning que solo actualiza matrices de bajo rango añadidas al modelo base, en lugar de actualizar todos los pesos, reduciendo enormemente los recursos necesarios
- C) Un tipo de quantization del modelo
- D) Una técnica de compresión de datasets

**168.** ¿Cuál de estos es el principal problema de privacidad al usar APIs de LLM de terceros (OpenAI, Anthropic)?
- A) La latencia de la red
- B) Los datos enviados en los prompts pueden ser usados para mejorar el modelo o almacenados por el proveedor; datos sensibles o personales no deberían enviarse
- C) Los modelos de terceros son menos precisos
- D) La tokenización expone datos sensibles

**169.** ¿Qué hace este código y cuál es su uso típico?
```python
async def generate_stream(prompt: str):
    async with httpx.AsyncClient() as client:
        async with client.stream("POST", "https://api.anthropic.com/v1/messages",
                                  headers={"x-api-key": API_KEY},
                                  json={"model": "claude-sonnet-4-6", "stream": True, "messages": [...]}) as response:
            async for chunk in response.aiter_text():
                yield chunk
```
- A) Descarga el modelo de Anthropic para uso local
- B) Implementa streaming de respuestas del LLM en tiempo real, devolviendo tokens a medida que se generan
- C) Hace múltiples peticiones paralelas al LLM
- D) Cacha las respuestas del LLM para peticiones repetidas

**170.** ¿Qué es el "needle in a haystack" test para LLMs?
- A) Un test de buscar patrones en imágenes
- B) Un benchmark donde se inserta información específica en el medio de un contexto muy largo para evaluar si el modelo puede encontrarla y usarla
- C) Un test de generación de código
- D) Un test de comprensión de documentos cortos

**171.** ¿Qué es la "cosine similarity" y por qué se usa para comparar embeddings en lugar de la distancia euclidiana?
- A) La similitud coseno no se usa en embeddings
- B) La similitud coseno mide el ángulo entre vectores independientemente de su magnitud, siendo más robusta para comparar embeddings de diferentes longitudes de texto
- C) La distancia euclidiana siempre es más precisa
- D) Son equivalentes para embeddings de la misma dimensión

**172.** ¿Qué significa que un modelo LLM es "autoregressive"?
- A) Que se auto-entrena continuamente
- B) Que genera texto prediciendo el siguiente token basándose en todos los tokens anteriores (incluyendo los que el modelo ya generó)
- C) Que usa regresión lineal internamente
- D) Que puede corregir sus propios errores

**173.** ¿Qué es el "beam search" en generación de texto?
- A) Una técnica de entrenamiento
- B) Un algoritmo de decodificación que mantiene los K mejores candidatos parciales en cada paso de generación, produciendo respuestas más coherentes que el greedy search
- C) Un tipo de atención en Transformers
- D) Una técnica de chunking para RAG

**174.** ¿Cuál es el impacto ambiental de entrenar LLMs grandes?
- A) Es despreciable
- B) El entrenamiento de modelos grandes consume enormes cantidades de energía y genera emisiones de CO2 significativas; es una consideración de IA responsable
- C) Solo afecta si el servidor está en un país sin energías renovables
- D) El impacto es solo en hardware, no en energía

**175.** ¿Qué es `FastAPI Depends` con OAuth2?
- A) Una dependencia externa de FastAPI
- B) Un patrón para implementar autenticación OAuth2/JWT en FastAPI usando el sistema de dependencias, inyectando el usuario autenticado en los endpoints
- C) Una forma de integrar FastAPI con bases de datos OAuth2
- D) Un middleware de autenticación de FastAPI

**176.** ¿Qué hace el siguiente código Python?
```python
class Singleton:
    _instancia = None

    def __new__(cls):
        if cls._instancia is None:
            cls._instancia = super().__new__(cls)
        return cls._instancia
```
- A) Crea siempre nuevas instancias de la clase
- B) Implementa el patrón Singleton: garantiza que solo exista una instancia de la clase
- C) Define una clase abstracta
- D) Crea una copia profunda del objeto

**177.** ¿Por qué es importante el "eval set" (conjunto de evaluación) en el desarrollo de sistemas RAG?
- A) Para medir la velocidad del sistema
- B) Para medir objetivamente la calidad de las respuestas: precisión de retrieval, relevancia, fidelidad al contexto, antes de desplegar en producción
- C) Para evaluar el coste de las llamadas a la API
- D) Solo sirve durante el fine-tuning

**178.** ¿Qué es el "output parsing" en aplicaciones LLM?
- A) Parsear el prompt de entrada
- B) Extraer información estructurada de las respuestas del LLM (ej: JSON, listas, campos específicos) para que la aplicación pueda procesarla programáticamente
- C) Parsear los logs del modelo
- D) Convertir el streaming de tokens en texto completo

**179.** ¿Cuál es el problema de seguridad específico de los sistemas RAG?
- A) Los embeddings son más lentos que el SQL
- B) Indirect prompt injection: un documento malicioso en la base de conocimiento puede contener instrucciones que manipulen al LLM cuando se recupere como contexto
- C) La base de datos vectorial puede ser hackeada
- D) Los embeddings pueden revelar el contenido del modelo

**180.** ¿Qué es el "BLEU score" en evaluación de modelos de lenguaje?
- A) Un tipo de temperatura de los modelos
- B) Una métrica que mide la similitud entre el texto generado y un texto de referencia contando n-gramas comunes, usada en traducción automática y generación de texto
- C) La puntuación de sesgo del modelo
- D) Una métrica de velocidad del modelo

**181.** ¿Cuándo usarías un modelo de embeddings local (sentence-transformers) vs un embedding model de API?
- A) Siempre es mejor usar la API
- B) Modelo local: datos sensibles que no pueden enviarse a terceros, sin latencia de red, coste fijo; API: mejor calidad, mantenimiento cero, pero coste variable y datos enviados externamente
- C) Los modelos locales son siempre más precisos
- D) Solo hay APIs, no existen modelos de embeddings locales

**182.** ¿Qué es el "knowledge cutoff" de un LLM?
- A) El límite de conocimiento que el modelo puede procesar
- B) La fecha hasta la que el modelo fue entrenado; no tiene conocimiento de eventos posteriores a esa fecha
- C) El número máximo de tokens que puede "recordar"
- D) La fecha de actualización del fine-tuning

**183.** ¿Qué hace `background_tasks.add_task(fn, arg)` en FastAPI?
- A) Ejecuta `fn` en un hilo separado inmediatamente
- B) Registra `fn` para ejecutarse en segundo plano DESPUÉS de que la respuesta HTTP haya sido enviada al cliente
- C) Programa la ejecución de `fn` con cron
- D) Ejecuta `fn` antes de procesar la petición actual

**184.** ¿Qué es una "embeddings similarity matrix" y para qué sirve?
- A) Una matriz de confusión de embeddings
- B) Una matriz NxN de similitudes coseno entre N textos, útil para clustering, detección de duplicados y análisis de similitud
- C) La arquitectura interna del modelo de embeddings
- D) Una técnica de compresión de embeddings

**185.** ¿Qué riesgo supone usar `shell=True` en `subprocess.run(cmd, shell=True)` cuando `cmd` incluye input del usuario?
- A) Solo es más lento que `shell=False`
- B) Permite command injection: el usuario puede inyectar comandos del sistema operativo
- C) Solo funciona en sistemas Unix
- D) El proceso no hereda las variables de entorno

**186.** ¿Qué es el "perplexity" en evaluación de LLMs?
- A) La dificultad de los prompts para el modelo
- B) Una métrica que mide cuán bien el modelo predice una secuencia: perplexity baja indica que el modelo asigna alta probabilidad al texto real
- C) El nivel de confusión del modelo
- D) Una métrica de velocidad de generación

**187.** ¿Cuál es la diferencia entre un modelo "encoder-only" (BERT), "decoder-only" (GPT) y "encoder-decoder" (T5)?
- A) Son terminología diferente para lo mismo
- B) Encoder-only: especializado en comprensión y clasificación de texto. Decoder-only: especializado en generación de texto. Encoder-decoder: comprensión + generación (traducción, resumen)
- C) La diferencia es solo el número de parámetros
- D) Decoder-only no puede ser usado para clasificación

**188.** ¿Qué hace el siguiente código en el contexto de IA responsable?
```python
def filtrar_respuesta(respuesta: str) -> str:
    palabras_prohibidas = cargar_lista_prohibida()
    for palabra in palabras_prohibidas:
        if palabra.lower() in respuesta.lower():
            return "No puedo ayudarte con eso."
    return respuesta
```
- A) Optimiza la respuesta del LLM
- B) Implementa un filtro básico de contenido dañino post-generación (guardrail de output)
- C) Censura respuestas políticas
- D) Mejora la gramática de la respuesta

**189.** ¿Qué es el "constitutional AI" de Anthropic?
- A) Una IA que crea constituciones políticas
- B) Un enfoque de entrenamiento donde el modelo usa principios explícitos (una "constitución") para auto-criticar y mejorar sus propias respuestas, haciéndolas más útiles y menos dañinas
- C) Un tipo de fine-tuning con leyes y regulaciones
- D) El conjunto de reglas de uso de la API de Anthropic

**190.** ¿Cuál es la diferencia entre un "chat model" y un "completion model"?
- A) Los completion models son más modernos
- B) Los completion models continúan un texto dado; los chat models están optimizados para conversaciones multi-turno con roles (system, user, assistant)
- C) Los chat models no pueden hacer completions
- D) Son equivalentes en la práctica

**191.** ¿Qué hace `asyncio.gather(*corutinas)` en Python?
- A) Ejecuta corutinas de forma secuencial
- B) Ejecuta múltiples corutinas de forma concurrente y espera a que todas terminen
- C) Cancela todas las corutinas si una falla
- D) Ejecuta corutinas en múltiples hilos en paralelo

**192.** ¿Qué es el "sparse vs dense retrieval" en sistemas RAG?
- A) La densidad de los vectores de embeddings
- B) Sparse (BM25, TF-IDF): busca por términos exactos. Dense (embeddings): busca por similitud semántica. Los sistemas híbridos combinan ambos para mayor precisión
- C) La diferencia entre bases de datos vectoriales y relacionales
- D) El número de documentos en la base de conocimiento

**193.** ¿Qué problema soluciona el "re-ranking" en RAG?
- A) Reordena los documentos por fecha
- B) Tras el retrieval inicial, un modelo más potente reordena los documentos recuperados por relevancia real, mejorando la calidad de los resultados que pasan al LLM
- C) Reduce el número de tokens enviados al LLM
- D) Optimiza el indexado de los embeddings

**194.** ¿Qué es el "multi-modal" en el contexto de LLMs?
- A) Un modelo que habla múltiples idiomas
- B) Un modelo que puede procesar y/o generar múltiples modalidades de datos: texto, imágenes, audio, video (ej: GPT-4V, Claude con visión)
- C) Un modelo entrenado con múltiples métodos
- D) Un ensemble de múltiples modelos LLM

**195.** ¿Cuál es el riesgo de "data poisoning" en modelos de IA?
- A) Corromper los archivos del modelo en disco
- B) Inyectar datos maliciosos en el dataset de entrenamiento para manipular el comportamiento del modelo de forma oculta
- C) Exponer los datos de entrenamiento del modelo
- D) Sobrecargar el modelo con demasiados datos

**196.** ¿Qué hace `model.generate(**inputs, max_new_tokens=200, do_sample=True, temperature=0.7)` en Hugging Face?
- A) Entrena el modelo con 200 nuevos tokens
- B) Genera hasta 200 nuevos tokens con muestreo aleatorio a temperatura 0.7 (balanceando creatividad y coherencia)
- C) Evalúa el modelo con 200 tokens de prueba
- D) Carga el modelo con configuración de temperatura

**197.** ¿Qué es el "context compression" en RAG?
- A) Comprimir la base de datos vectorial
- B) Técnicas para reducir la cantidad de contexto enviado al LLM (resumiendo, filtrando partes irrelevantes) para caber en la ventana de contexto sin perder información clave
- C) Comprimir el prompt del sistema
- D) Reducir la dimensionalidad de los embeddings

**198.** ¿Qué es la "explicabilidad" (explainability/XAI) en IA y por qué importa?
- A) Que el código de IA sea legible
- B) La capacidad de entender y explicar por qué un modelo tomó una decisión concreta; crítico en ámbitos de alto impacto (medicina, finanzas, justicia) para detectar sesgos y garantizar responsabilidad
- C) Que el modelo pueda explicar sus propias respuestas en texto
- D) La documentación de los modelos de IA

**199.** ¿Qué es el problema del "alignment" en IA avanzada?
- A) Alinear el texto de salida con el formato esperado
- B) El desafío de asegurarse de que los sistemas de IA actúen de acuerdo con los valores, intenciones y objetivos humanos, especialmente en sistemas muy capaces
- C) La calibración de los parámetros del modelo
- D) La sincronización entre múltiples modelos

**200.** ¿Cuál es la diferencia entre "AI Safety" e "AI Security"?
- A) Son el mismo campo
- B) AI Safety: asegurarse de que los sistemas de IA se comporten como se espera y no causen daños no intencionados. AI Security: proteger los sistemas de IA de ataques externos (adversarial attacks, data poisoning, model theft)
- C) AI Security es un subconjunto de AI Safety
- D) AI Safety es sobre regulación; AI Security es técnico
