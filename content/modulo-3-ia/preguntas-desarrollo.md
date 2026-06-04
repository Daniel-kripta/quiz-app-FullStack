# Examen de Desarrollo — Módulo 3: Inteligencia Artificial

> Responde con detalle: incluye explicaciones conceptuales, código de ejemplo y razonamiento sobre las implicaciones técnicas y éticas. Se valorará la profundidad de la comprensión, la calidad del código y la capacidad de conectar conceptos.

---

## Sección 1 — Preguntas Fáciles

**Pregunta 1.**
¿Qué es un LLM (Large Language Model)? Explica a alto nivel cómo funciona: ¿qué son los tokens, el contexto y la temperatura? ¿Cuál es la diferencia entre un modelo base (foundation model) y uno fine-tuneado para instrucciones (instruction-tuned)? Menciona dos ejemplos de LLMs actuales y su caso de uso principal.

---

**Pregunta 2.**
¿Qué es FastAPI y qué ventajas tiene sobre Flask? Crea una API sencilla con FastAPI que tenga:
- Un endpoint `GET /` que devuelva un mensaje de bienvenida en JSON
- Un endpoint `POST /analizar` que reciba un texto, valide que tenga al menos 10 caracteres con Pydantic, y devuelva su longitud y el número de palabras

¿Qué es Pydantic y para qué se usa en FastAPI? ¿Dónde se encuentra la documentación automática de la API?

---

**Pregunta 3.**
¿Qué es un embedding en el contexto de la IA? Explica qué representa un vector de embeddings y por qué permite comparar textos por significado. ¿Cuál es la diferencia entre similitud coseno y distancia euclidiana para comparar embeddings de texto? Da un ejemplo de dos textos semánticamente similares e ilustra con código cómo se compara su similitud.

---

**Pregunta 4.**
Compara Python con JavaScript desde la perspectiva de un desarrollador fullstack. Explica las diferencias más importantes en: sintaxis, tipado, sistema de módulos, orientación a objetos y paradigmas de programación. ¿En qué casos elegirías Python sobre JavaScript para una tarea de backend?

---

**Pregunta 5.**
¿Qué es la generación de imágenes con IA y cómo funciona Stable Diffusion? Explica:
- El proceso de difusión (noise → imagen)
- Qué es el "latent space"
- Cómo funciona el "conditioning" con texto
- Qué son los parámetros principales: steps, CFG scale, seed, sampler
- Cómo ComfyUI permite construir flujos de generación complejos mediante nodos

---

## Sección 2 — Preguntas Medias

**Pregunta 6.**
Diseña e implementa una API con FastAPI para un sistema de análisis de sentimientos de reseñas de productos. La API debe:
- Recibir texto de reseña via POST
- Validar el input con Pydantic (longitud mínima/máxima, campos requeridos)
- Usar el pipeline de Hugging Face para clasificar el sentimiento
- Devolver la predicción con su score de confianza
- Manejar errores correctamente
- Generar documentación automática

---

**Pregunta 7.**
Explica qué son los embeddings y cómo se usan en sistemas de búsqueda semántica. Implementa un sistema simple de búsqueda de preguntas frecuentes (FAQ) que:
1. Precalcule embeddings de un conjunto de preguntas
2. Dado una consulta del usuario, encuentre las 3 preguntas más similares
3. Devuelva la respuesta de la más cercana

Explica la diferencia entre similitud coseno y distancia euclidiana para este caso.

---

**Pregunta 8.**
¿Qué es el prompt engineering y por qué es importante? Explica y demuestra con ejemplos prácticos las siguientes técnicas:
1. Zero-shot vs Few-shot prompting
2. Chain-of-thought prompting
3. System prompt efectivo
4. Structured output (forzar respuesta en JSON)
5. Cómo manejar el problema de las alucinaciones en el prompt

---

**Pregunta 9.**
Explica la programación orientada a objetos (POO) en Python con un ejemplo práctico: diseña una jerarquía de clases para representar diferentes tipos de modelos de IA (ModeloBase, ModeloTexto, ModeloImagen, ModeloMultiModal). Implementa:
- Herencia y sobreescritura de métodos
- Métodos abstractos (`@abstractmethod`)
- Propiedades (`@property`)
- Métodos de clase y estáticos
- El patrón Factory para instanciar modelos

---

**Pregunta 10.**
¿Qué consideraciones de IA responsable son más relevantes para una aplicación de generación de contenido con LLMs? Explica los riesgos de:
1. Alucinaciones en contextos de alto impacto (medicina, finanzas, legal)
2. Sesgo y discriminación en sistemas de toma de decisiones
3. Privacidad y datos personales en los prompts
4. Mal uso (generación de desinformación, contenido dañino)

¿Qué estrategias técnicas y de diseño implementarías para mitigar cada riesgo?

---

**Pregunta 11.**
Analiza las diferencias entre los principales enfoques para dotar de "conocimiento" a un LLM:
1. **Preentrenamiento**: qué es, cuándo se hace, coste
2. **Fine-tuning** (y LoRA): cuándo usar, ventajas/desventajas
3. **RAG**: cuándo usar, ventajas/desventajas
4. **In-context learning (few-shot)**: cuándo usar, limitaciones

Para cada enfoque, da un ejemplo de caso de uso real donde sería la opción preferida.

---

**Pregunta 12.**
Explica qué es Hugging Face y cómo se usa la librería `transformers`. Implementa tres casos de uso diferentes usando `pipeline`:
1. Clasificación de texto (sentimientos/tema)
2. Generación de texto con un modelo local
3. Question answering (responder preguntas sobre un contexto dado)

Para cada caso, explica qué modelo preentrenado usarías y por qué.

---

## Sección 3 — Preguntas Difíciles

**Pregunta 13.**
¿Qué es RAG (Retrieval-Augmented Generation) y qué problemas resuelve? Diseña una arquitectura RAG completa para un chatbot de documentación técnica que:
- Procesa documentos PDF/texto y los divide en chunks
- Genera embeddings y los almacena en una base de datos vectorial
- Para cada consulta, recupera los fragmentos más relevantes
- Construye el prompt con el contexto y llama al LLM
- Devuelve la respuesta con las fuentes utilizadas

Incluye el código de los componentes clave y explica las decisiones de diseño (tamaño de chunk, número de resultados recuperados, etc.).

---

**Pregunta 14.**
Implementa un sistema de procesamiento de documentos para RAG con Python que:
- Cargue documentos de texto desde un directorio
- Los divida en chunks con overlap (para no perder contexto en los bordes)
- Genere embeddings con sentence-transformers
- Los indexe en una base de datos vectorial (Chroma o similar)
- Exponga una función de búsqueda que devuelva los N chunks más relevantes

---

**Pregunta 15.**
Diseña e implementa un endpoint FastAPI que actúe como proxy de LLM con las siguientes características:
- Recibe el prompt del usuario
- Implementa un sistema de caché simple para no repetir peticiones idénticas
- Añade un guardrail básico para filtrar contenido inapropiado en input y output
- Registra las peticiones (sin datos sensibles) para análisis posterior
- Implementa rate limiting básico por usuario
- Devuelve la respuesta con streaming

---

**Pregunta 16.**
Implementa un sistema de evaluación de calidad de un RAG con Python. El sistema debe medir:
- **Fidelidad**: ¿la respuesta del LLM se basa en el contexto recuperado o alucina?
- **Relevancia del retrieval**: ¿los documentos recuperados son realmente relevantes para la pregunta?
- **Relevancia de la respuesta**: ¿la respuesta responde a la pregunta?

Muestra cómo generarías un conjunto de evaluación y cómo calcularías estas métricas.

---

**Pregunta 17.**
Explica el concepto de "agentes" (agents) en LLMs. Diseña un agente simple con Python que pueda:
- Usar herramientas (tools): búsqueda web, calculadora, consulta de BD
- Decidir qué herramienta usar según la pregunta del usuario (function calling)
- Procesar el resultado de la herramienta y generar una respuesta final
- Mantener historial de la conversación

---

**Pregunta 18.**
Analiza el siguiente sistema RAG e identifica todos sus problemas de diseño, rendimiento y seguridad. Proporciona una versión mejorada y explica cada cambio:

```python
from fastapi import FastAPI
from openai import OpenAI
import chromadb

app = FastAPI()
client = OpenAI(api_key="sk-CLAVE_REAL_AQUI")
chroma = chromadb.Client()
collection = chroma.create_collection("docs")

@app.post("/preguntar")
def preguntar(pregunta: str):
    # Buscar documentos similares
    resultados = collection.query(
        query_texts=[pregunta],
        n_results=20
    )
    
    # Construir contexto
    contexto = "\n".join(resultados['documents'][0])
    
    # Llamar al LLM
    respuesta = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "user", "content": f"Pregunta: {pregunta}\nContexto: {contexto}"}
        ]
    )
    
    return respuesta.choices[0].message.content
```
