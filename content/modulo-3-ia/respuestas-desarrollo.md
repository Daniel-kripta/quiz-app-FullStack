# Respuestas — Examen de Desarrollo — Módulo 3: Inteligencia Artificial

---

## Sección 1 — Preguntas Fáciles

---

## Pregunta 1 — ¿Qué es un LLM?

Un **LLM** (Large Language Model) es un modelo de lenguaje entrenado en enormes cantidades de texto mediante aprendizaje automático. Aprende a predecir el siguiente token dado el contexto previo (next-token prediction).

**Conceptos clave:**

- **Tokens**: unidades en las que el LLM divide el texto. Un token ≈ 4 caracteres en inglés o ≈ 3 en español. "Hello world" ≈ 2 tokens. El coste y los límites del modelo se miden en tokens.
- **Contexto (context window)**: máximo de tokens que el modelo puede procesar a la vez (input + output). Ejemplo: Claude claude-sonnet-4-6 tiene 200K tokens de contexto. Lo que está fuera del contexto, el modelo no lo "recuerda".
- **Temperatura**: controla la aleatoriedad de las respuestas. `0` = determinista y repetible. `1` = más creativo y variado. `0.7` es un valor intermedio habitual para respuestas equilibradas.

**Modelo base vs instruction-tuned:**

| | Modelo base | Instruction-tuned |
|---|---|---|
| Entrenamiento | Predice el siguiente token sobre texto web | Base + RLHF o SFT con instrucciones humanas |
| Comportamiento | Completa texto de forma libre (puede ser incoherente) | Sigue instrucciones como un asistente |
| Uso habitual | Investigación, fine-tuning posterior | Aplicaciones de usuario final |

**Ejemplos actuales:**
- **Claude claude-sonnet-4-6** (Anthropic): excelente para análisis complejo, código y textos largos
- **GPT-4o** (OpenAI): muy usado para integración en aplicaciones y tareas multimodales

---

## Pregunta 2 — FastAPI básico con Pydantic

```python
# main.py
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(
    title="Mi Primera API",
    description="API de ejemplo con FastAPI y Pydantic",
    version="1.0.0"
)

# Pydantic: modelo para validar el body del POST
class AnalisisInput(BaseModel):
    texto: str = Field(
        ...,
        min_length=10,
        description="Texto a analizar (mínimo 10 caracteres)"
    )

class AnalisisOutput(BaseModel):
    longitud: int
    numero_palabras: int
    texto_recibido: str

@app.get("/")
def bienvenida():
    return {"mensaje": "Bienvenido a la API de análisis de texto"}

@app.post("/analizar", response_model=AnalisisOutput)
def analizar(input: AnalisisInput):
    palabras = input.texto.split()
    return AnalisisOutput(
        longitud=len(input.texto),
        numero_palabras=len(palabras),
        texto_recibido=input.texto
    )
```

**FastAPI vs Flask:**
- FastAPI genera **documentación automática** (Swagger UI en `/docs`, ReDoc en `/redoc`) sin configuración adicional
- FastAPI valida los tipos automáticamente gracias a **Pydantic** — si el campo no cumple las restricciones, devuelve un 422 automáticamente sin código extra
- FastAPI es **asíncrono por defecto** (soporta `async def`)
- Flask es más simple para proyectos pequeños; FastAPI es mejor para APIs modernas que necesitan validación, serialización y documentación

**Pydantic**: librería de validación de datos para Python. Con `BaseModel` defines la estructura y los tipos del body. `Field(...)` con el primer argumento `...` indica que el campo es obligatorio. Valida tanto el input como el output (`response_model`).

La documentación automática está en `http://localhost:8000/docs` (interfaz interactiva Swagger) y en `http://localhost:8000/redoc`.

---

## Pregunta 3 — ¿Qué es un embedding?

Un **embedding** es una representación numérica densa de un texto (o imagen, audio, etc.) en un espacio vectorial de alta dimensión (por ejemplo, 384 o 768 dimensiones). El objetivo es que textos semánticamente similares tengan vectores cercanos en ese espacio.

**¿Qué representa el vector?**
Cada dimensión captura algún aspecto semántico del texto. Por ejemplo, los vectores de "gato" y "felino" serán parecidos porque aparecen en contextos similares en los datos de entrenamiento. No podemos interpretar dimensiones individuales, pero sí comparar vectores entre sí para medir similitud de significado.

```python
from sentence_transformers import SentenceTransformer
import numpy as np

modelo = SentenceTransformer('all-MiniLM-L6-v2')

textos = [
    "El gato duerme en el sofá",
    "Un felino descansa en el diván",   # semánticamente similar
    "La base de datos devuelve error",  # semánticamente diferente
]

embeddings = modelo.encode(textos, normalize_embeddings=True)
print(f"Forma: {embeddings.shape}")  # (3, 384)

# Similitud coseno = producto escalar con vectores normalizados
sim_gato_felino = np.dot(embeddings[0], embeddings[1])
sim_gato_bd = np.dot(embeddings[0], embeddings[2])
print(f"Gato ↔ Felino: {sim_gato_felino:.3f}")  # ~0.85 (alta similitud)
print(f"Gato ↔ BD:     {sim_gato_bd:.3f}")       # ~0.12 (baja similitud)
```

**Similitud coseno vs distancia euclidiana:**
- **Coseno**: mide el ángulo entre dos vectores. No depende de la longitud del texto. **Preferida para embeddings de texto** porque captura la dirección semántica independientemente de cuántas palabras tenga el texto.
- **Euclidiana**: mide la distancia lineal. Un texto largo puede generar un vector de mayor magnitud aunque semánticamente sea equivalente, introduciendo sesgo. Menos fiable para comparar texto.

Textos similares → vectores apuntan en la misma dirección → ángulo pequeño → similitud coseno cercana a 1.

---

## Pregunta 4 — Python vs JavaScript para desarrollador fullstack

| Aspecto | Python | JavaScript |
|---------|--------|------------|
| **Tipado** | Dinámico, type hints opcionales (PEP 484) | Dinámico, TypeScript para tipado estático |
| **Sintaxis** | Indentación obligatoria, muy legible | Llaves `{}`, más familiar para web devs |
| **Módulos** | `import modulo` (ESM/CJS no aplica) | CommonJS (`require`) o ESM (`import`) |
| **OOP** | Soporte nativo, herencia múltiple | Prototype-based, clases como azúcar sintáctico |
| **Paradigmas** | Multiparadigma: OOP, funcional, procedimental | Multiparadigma: funcional, OOP, event-driven |
| **Ecosistema IA** | NumPy, pandas, PyTorch, Hugging Face | TensorFlow.js, Brain.js (limitado) |
| **Async** | `asyncio`, `async/await` (desde 3.5) | Nativo desde ES6, muy maduro |

```python
# Python: OOP con decoradores y type hints
class APIClient:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self._api_key = api_key   # convención: privado

    @property
    def headers(self) -> dict:   # @property sin paréntesis al acceder
        return {"Authorization": f"Bearer {self._api_key}"}

    def get(self, endpoint: str) -> dict:
        import requests
        return requests.get(f"{self.base_url}/{endpoint}", headers=self.headers).json()
```

**¿Cuándo elegir Python sobre JS para backend?**
- Cuando necesitas librerías de ML/IA (PyTorch, scikit-learn, Hugging Face)
- Para procesamiento de datos con pandas/numpy
- Para scripting científico o análisis de datos
- Cuando el equipo tiene experiencia previa en Python
- JS/Node.js sigue siendo mejor para: tiempo real (WebSocket), ecosistema npm rico, equipo fullstack unificado

---

## Pregunta 5 — Stable Diffusion y ComfyUI

**Proceso de difusión:**

La generación de imágenes con modelos de difusión funciona en dos fases:
1. **Forward process (entrenamiento)**: se añade ruido gaussiano progresivamente a imágenes reales hasta convertirlas en ruido puro
2. **Reverse process (inferencia)**: el modelo aprende a **deshacer** el ruido paso a paso, partiendo de ruido aleatorio y llegando a una imagen coherente

**Latent Space**: Stable Diffusion trabaja en el "espacio latente" (latent space), una representación comprimida de las imágenes (por ejemplo, 64×64 en lugar de 512×512) procesada por un VAE (Variational Autoencoder). Esto reduce enormemente el coste computacional.

**Text Conditioning**: El texto se codifica con un modelo CLIP (encoder de texto), generando embeddings que condicionan el proceso de denoising en cada step. El modelo de difusión (UNet) recibe en cada paso: latent ruidoso + embeddings del texto + timestep.

**Parámetros principales:**
- **Steps**: número de pasos de denoising. Más steps = mayor calidad pero más lento. 20-30 es un buen balance
- **CFG Scale (Guidance Scale)**: cuánto se adhiere el resultado al prompt. 7-8 es común; muy alto = sobreentrenado y artefactos
- **Seed**: semilla para el ruido inicial. Misma seed + mismo prompt = misma imagen (reproducibilidad)
- **Sampler**: algoritmo de denoising (Euler a, DPM++ 2M, DDIM). Afecta estilo y velocidad

**ComfyUI y nodos:** ComfyUI expone el pipeline de Stable Diffusion como un grafo de nodos conectables: CLIP Text Encode → KSampler → VAE Decode → Save Image. Permite flujos avanzados: ControlNet, LoRA, inpainting, img2img, todos con visualización clara del flujo de datos.

---

## Sección 2 — Preguntas Medias

---

## Pregunta 6 — API FastAPI de análisis de sentimientos

```python
# sentiment_api/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field, field_validator
from transformers import pipeline
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="API de Análisis de Sentimientos",
    description="Clasifica el sentimiento de reseñas de productos",
    version="1.0.0"
)

# Cargar el modelo una sola vez al arrancar la app
sentiment_analyzer = None

@app.on_event("startup")
async def cargar_modelo():
    global sentiment_analyzer
    logger.info("Cargando modelo de sentimientos...")
    sentiment_analyzer = pipeline(
        "sentiment-analysis",
        model="nlptown/bert-base-multilingual-uncased-sentiment"
    )
    logger.info("Modelo cargado correctamente")

class ResenaInput(BaseModel):
    texto: str = Field(
        ...,
        min_length=10,
        max_length=2000,
        description="Texto de la reseña a analizar",
        examples=["Este producto es excelente, lo recomiendo totalmente"]
    )
    idioma: str = Field(default="es", pattern="^[a-z]{2}$")

    @field_validator('texto')
    @classmethod
    def sin_solo_espacios(cls, v):
        if not v.strip():
            raise ValueError('El texto no puede estar vacío o ser solo espacios')
        return v.strip()

class SentimientoOutput(BaseModel):
    texto_original: str
    sentimiento: str
    score_confianza: float
    estrellas: int | None = None

@app.post("/analizar", response_model=SentimientoOutput)
async def analizar_sentimiento(resena: ResenaInput):
    if sentiment_analyzer is None:
        raise HTTPException(status_code=503, detail="Modelo no disponible")

    try:
        resultado = sentiment_analyzer(resena.texto)[0]
        label = resultado['label']
        score = round(resultado['score'], 4)

        estrellas_map = {
            '1 star': 1, '2 stars': 2, '3 stars': 3, '4 stars': 4, '5 stars': 5
        }
        sentimiento_map = {
            '1 star': 'muy negativo', '2 stars': 'negativo',
            '3 stars': 'neutro', '4 stars': 'positivo', '5 stars': 'muy positivo'
        }

        return SentimientoOutput(
            texto_original=resena.texto,
            sentimiento=sentimiento_map.get(label, label),
            score_confianza=score,
            estrellas=estrellas_map.get(label)
        )
    except Exception as e:
        logger.error(f"Error al analizar: {e}")
        raise HTTPException(status_code=500, detail="Error al procesar el análisis")

@app.get("/health")
def health_check():
    return {"status": "ok", "modelo_cargado": sentiment_analyzer is not None}
```

---

## Pregunta 7 — Sistema de búsqueda semántica en FAQs

```python
from sentence_transformers import SentenceTransformer
import numpy as np

FAQS = [
    {"pregunta": "¿Cómo puedo restablecer mi contraseña?",
     "respuesta": "Ve a la página de login y haz clic en '¿Olvidaste tu contraseña?'. Recibirás un email."},
    {"pregunta": "¿Cuánto tarda el envío?",
     "respuesta": "El envío estándar tarda 3-5 días hábiles. El envío express tarda 24 horas."},
    {"pregunta": "¿Puedo devolver un producto?",
     "respuesta": "Sí, tienes 30 días para devolver cualquier producto en perfectas condiciones."},
    {"pregunta": "¿Cómo contacto con soporte?",
     "respuesta": "Puedes contactarnos por email en soporte@empresa.com o por chat en horario 9-18h."},
    {"pregunta": "¿Aceptan pagos con PayPal?",
     "respuesta": "Sí, aceptamos PayPal, tarjeta de crédito y transferencia bancaria."},
]

class SistemaFAQ:
    def __init__(self, modelo_nombre: str = 'all-MiniLM-L6-v2'):
        self.modelo = SentenceTransformer(modelo_nombre)
        self.faqs = FAQS
        self.embeddings_precomputados = None
        self._precalcular_embeddings()

    def _precalcular_embeddings(self):
        preguntas = [faq['pregunta'] for faq in self.faqs]
        self.embeddings_precomputados = self.modelo.encode(preguntas, normalize_embeddings=True)
        print(f"Embeddings precalculados para {len(self.faqs)} FAQs")

    def buscar(self, consulta: str, top_k: int = 3) -> list[dict]:
        emb_consulta = self.modelo.encode(consulta, normalize_embeddings=True)

        # Similitud coseno: con vectores normalizados = producto escalar
        similitudes = np.dot(self.embeddings_precomputados, emb_consulta)

        indices_ordenados = np.argsort(similitudes)[::-1][:top_k]

        return [
            {**self.faqs[i], 'similitud': float(similitudes[i])}
            for i in indices_ordenados
        ]

    def responder(self, consulta: str, umbral: float = 0.4) -> str:
        resultados = self.buscar(consulta, top_k=1)
        if not resultados or resultados[0]['similitud'] < umbral:
            return "Lo siento, no encontré una pregunta similar. Por favor contacta soporte."
        return resultados[0]['respuesta']

# Uso:
faq = SistemaFAQ()
print(faq.responder("¿Cómo cambio mi password?"))
# → "Ve a la página de login y haz clic en '¿Olvidaste tu contraseña?'..."
```

**Similitud coseno vs distancia euclidiana:**
- **Coseno**: mide el ángulo entre vectores. Con vectores normalizados equivale al producto escalar. Ideal para embeddings de texto porque captura la dirección semántica independientemente de la longitud del texto.
- **Euclidiana**: mide la distancia en el espacio. Un texto muy largo puede tener un vector de mayor magnitud aunque sea semánticamente similar, lo que la hace menos fiable para embeddings de texto.

---

## Pregunta 8 — Técnicas de Prompt Engineering

```python
from anthropic import Anthropic
client = Anthropic()

# 1. Zero-shot vs Few-shot
# ZERO-SHOT: sin ejemplos
zero_shot = """Clasifica el sentimiento de este texto como POSITIVO, NEGATIVO o NEUTRO:
"El producto tardó más de lo esperado pero la calidad es buena."
"""

# FEW-SHOT: con ejemplos para guiar el formato y el razonamiento
few_shot = """Clasifica el sentimiento. Responde con JSON {"sentimiento": ..., "razon": ...}

Ejemplos:
Input: "Es lo mejor que he comprado, funciona perfecto"
Output: {"sentimiento": "POSITIVO", "razon": "Satisfacción total con el producto"}

Input: "Llegó roto y el soporte no respondió"
Output: {"sentimiento": "NEGATIVO", "razon": "Producto defectuoso y mal servicio"}

Ahora clasifica:
Input: "El producto tardó más de lo esperado pero la calidad es buena."
Output:"""

# 2. Chain-of-thought
cot_prompt = """Resuelve este problema paso a paso antes de dar la respuesta final:

Un servidor procesa 150 peticiones por hora. Si el 20% falla y el 30% de las exitosas 
requieren procesamiento adicional, ¿cuántas peticiones requieren procesamiento adicional por hora?

Razona paso a paso:
1. Primero calcula las peticiones exitosas
2. Luego determina cuántas de esas requieren procesamiento adicional
3. Da la respuesta final"""

# 3. System prompt efectivo para un asistente de API
system_prompt = """Eres un asistente técnico especializado en APIs REST y Node.js.

COMPORTAMIENTO:
- Responde solo preguntas relacionadas con desarrollo backend con Node.js/Express
- Para preguntas fuera de tu especialidad, redirige amablemente
- Proporciona código cuando sea útil, siempre con comentarios explicativos
- Advierte sobre problemas de seguridad cuando los detectes
- Responde en el mismo idioma que el usuario

RESTRICCIONES:
- No generes código malicioso o con vulnerabilidades conocidas
- No compartas información de variables de entorno o claves API"""

# 4. Structured output - forzar JSON
structured_prompt = """Analiza el siguiente código Python e identifica los problemas.
Responde ÚNICAMENTE con este JSON (sin texto adicional antes o después):

{
  "tiene_errores": true/false,
  "errores": [
    {"tipo": "...", "linea": N, "descripcion": "...", "severidad": "alta/media/baja"}
  ],
  "puntuacion_calidad": 0-10
}

Código a analizar:
def login(user, pw):
    result = db.query(f"SELECT * FROM users WHERE user='{user}' AND pw='{pw}'")
    return result
"""

# 5. Mitigar alucinaciones
anti_hallucination = """Eres un asistente de información médica. 
REGLA CRÍTICA: Si no tienes certeza absoluta sobre un dato médico, DEBES decirlo explícitamente.
Usa frases como: "No estoy seguro de esto", "Consulta con un médico", "Este dato puede estar desactualizado".
NUNCA inventes datos, estadísticas o nombres de medicamentos.
Si no sabes algo, di "No tengo información fiable sobre esto" en lugar de especular."""
```

---

## Pregunta 9 — POO en Python: jerarquía de modelos IA

```python
from abc import ABC, abstractmethod
from enum import Enum

class TipoModal(Enum):
    TEXTO = "texto"
    IMAGEN = "imagen"
    MULTIMODAL = "multimodal"

class ModeloBase(ABC):
    def __init__(self, nombre: str, version: str, proveedor: str):
        self._nombre = nombre
        self._version = version
        self._proveedor = proveedor
        self._llamadas = 0

    @property
    def nombre_completo(self) -> str:
        return f"{self._proveedor}/{self._nombre}:{self._version}"

    @property
    def estadisticas(self) -> dict:
        return {"llamadas_totales": self._llamadas}

    @abstractmethod
    def inferir(self, input_datos) -> dict:
        pass

    @abstractmethod
    def tipo_modal(self) -> TipoModal:
        pass

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}('{self.nombre_completo}')"

    @classmethod
    def desde_config(cls, config: dict) -> 'ModeloBase':
        return cls(**config)

    @staticmethod
    def calcular_coste(tokens: int, precio_por_mil: float) -> float:
        return (tokens / 1000) * precio_por_mil

class ModeloTexto(ModeloBase):
    def __init__(self, nombre: str, version: str, proveedor: str, context_window: int):
        super().__init__(nombre, version, proveedor)
        self._context_window = context_window

    @property
    def tipo_modal(self) -> TipoModal:
        return TipoModal.TEXTO

    @property
    def context_window(self) -> int:
        return self._context_window

    def inferir(self, prompt: str, max_tokens: int = 1000, temperature: float = 0.7) -> dict:
        if len(prompt) > self._context_window * 4:
            raise ValueError(f"Prompt supera el context window de {self._context_window} tokens")
        self._llamadas += 1
        return {"respuesta": f"[Respuesta de {self.nombre_completo}]", "tokens_usados": 150}

class ModeloImagen(ModeloBase):
    def __init__(self, nombre: str, version: str, proveedor: str, resoluciones: list[str]):
        super().__init__(nombre, version, proveedor)
        self._resoluciones = resoluciones

    @property
    def tipo_modal(self) -> TipoModal:
        return TipoModal.IMAGEN

    def inferir(self, prompt: str, resolucion: str = "512x512") -> dict:
        if resolucion not in self._resoluciones:
            raise ValueError(f"Resolución {resolucion} no soportada. Usa: {self._resoluciones}")
        self._llamadas += 1
        return {"url_imagen": f"https://cdn.example.com/img_{hash(prompt)}.png"}

class ModeloMultiModal(ModeloTexto):
    @property
    def tipo_modal(self) -> TipoModal:
        return TipoModal.MULTIMODAL

    def inferir(self, input_datos: dict) -> dict:
        if 'texto' not in input_datos:
            raise ValueError("Se requiere al menos texto en el input")
        self._llamadas += 1
        return {"respuesta": f"[Respuesta multimodal de {self.nombre_completo}]"}

# Factory Pattern
class ModeloFactory:
    _registro = {}

    @classmethod
    def registrar(cls, nombre: str, clase: type):
        cls._registro[nombre] = clase

    @classmethod
    def crear(cls, tipo: str, **kwargs) -> ModeloBase:
        if tipo not in cls._registro:
            raise ValueError(f"Tipo desconocido: {tipo}. Disponibles: {list(cls._registro.keys())}")
        return cls._registro[tipo](**kwargs)

ModeloFactory.registrar('texto', ModeloTexto)
ModeloFactory.registrar('imagen', ModeloImagen)
ModeloFactory.registrar('multimodal', ModeloMultiModal)

claude = ModeloFactory.crear('texto', nombre='claude-sonnet-4-6', version='latest',
                              proveedor='anthropic', context_window=200000)
```

---

## Pregunta 10 — IA Responsable: riesgos y mitigaciones

**1. Alucinaciones en contextos de alto impacto:**

*Riesgo*: Un LLM que responde sobre dosificación de medicamentos puede inventar datos con apariencia confiable.

*Mitigaciones técnicas:*
```python
# a) RAG con fuentes verificadas
# b) Prompt que instruye a admitir incertidumbre
# c) Citar fuentes en la respuesta
system_prompt = """IMPORTANTE: Eres un asistente informativo, NO un médico.
- Solo usa información del contexto proporcionado
- Siempre incluye: "Consulta con un profesional de la salud"
- Si no encuentras la información en el contexto, di "No tengo información verificada sobre esto"
- Nunca proporciones dosis específicas sin citar la fuente"""
```

**2. Sesgo y discriminación:**

*Riesgo*: Un modelo de RRHH entrenado con datos históricos puede discriminar por género o etnia.

*Mitigaciones*:
- Auditoría de sesgos antes del despliegue (test con diferentes grupos demográficos)
- Eliminar features sensibles del input (nombre, género, edad en algunos contextos)
- Monitoreo continuo de decisiones post-despliegue
- Human-in-the-loop para decisiones de alto impacto

**3. Privacidad en prompts:**
```python
import re

def sanitizar_prompt(texto: str) -> str:
    # Eliminar emails, teléfonos, DNIs antes de enviar al LLM externo
    patrones = [
        (r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', '[EMAIL]'),
        (r'\b\d{9}\b', '[DNI]'),
        (r'\b(?:\+34\s?)?\d{9}\b', '[TELEFONO]'),
        (r'\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b', '[TARJETA]'),
    ]
    for patron, reemplazo in patrones:
        texto = re.sub(patron, reemplazo, texto)
    return texto
```

**4. Mal uso:**
- Guardrails de input: clasificador de intención antes de procesar
- Guardrails de output: filtro de contenido en la respuesta
- Rate limiting y autenticación
- Logging para auditoría (sin datos personales)
- Terms of Service con usos prohibidos explícitos

---

## Pregunta 11 — Comparativa de enfoques para "conocimiento" en LLMs

| Enfoque | Cuándo usar | Ventajas | Desventajas |
|---------|------------|----------|-------------|
| **Preentrenamiento** | Crear un modelo desde cero para un dominio muy específico | Conocimiento profundo del dominio | Coste masivo (millones $), necesitas enormes datos |
| **Fine-tuning** | Cambiar el estilo o comportamiento del modelo | Responde en el estilo deseado; más rápido en tareas específicas | Costoso, "olvido catastrófico", no actualizable sin reentrenar |
| **LoRA fine-tuning** | Fine-tuning con recursos limitados | Mucho más barato que fine-tuning completo | Menor capacidad de adaptación |
| **RAG** | Conocimiento actualizable, documentos privados, reducir alucinaciones | Actualizable sin tocar el modelo, citable, coste bajo | Latencia adicional, calidad del retrieval es crítica |
| **Few-shot / In-context** | Cambiar el formato de respuesta, demostrar una tarea nueva | Sin entrenamiento, inmediato | Limitado por el context window, no aprende permanentemente |

**Casos de uso reales:**
- **Preentrenamiento**: empresa farmacéutica que crea un modelo entrenado solo con literatura médica
- **Fine-tuning**: asistente de código que siempre responde en el estilo de tu empresa
- **RAG**: chatbot de soporte que responde sobre tu documentación interna actualizada semanalmente
- **Few-shot**: clasificador de tickets de soporte con 5 ejemplos en el prompt

---

## Pregunta 12 — Hugging Face Transformers: tres casos de uso

```python
from transformers import pipeline

# 1. Clasificación de texto (sentimientos en español)
clasificador = pipeline(
    "text-classification",
    model="dccuchile/bert-base-spanish-wwm-uncased",  # BERT en español
    return_all_scores=True
)
resultado = clasificador("Este producto es increíble, muy recomendable")
# → [{'label': 'POS', 'score': 0.98}, {'label': 'NEG', 'score': 0.02}]
# Modelo elegido: BERT fine-tuned en corpus en español para mejor precisión en castellano

# 2. Generación de texto con modelo local
generador = pipeline(
    "text-generation",
    model="gpt2",           # modelo pequeño para demo local
    max_new_tokens=100,
    temperature=0.7,
    do_sample=True,
    pad_token_id=50256
)
texto_generado = generador("La inteligencia artificial en educación puede")
print(texto_generado[0]['generated_text'])
# Modelo elegido: GPT-2 para uso local sin API key; en producción usar GPT-4/Claude via API

# 3. Question Answering sobre un contexto dado
qa = pipeline(
    "question-answering",
    model="deepset/roberta-base-squad2"  # fine-tuned en SQuAD2
)
contexto = """
FastAPI es un framework moderno y de alto rendimiento para construir APIs con Python.
Fue creado por Sebastián Ramírez y lanzado en 2018.
Utiliza type hints de Python 3.6+ y Pydantic para la validación de datos.
Genera documentación automática con Swagger UI y ReDoc.
"""
respuesta = qa(question="¿Quién creó FastAPI?", context=contexto)
print(respuesta)
# → {'score': 0.97, 'start': 87, 'end': 105, 'answer': 'Sebastián Ramírez'}
# Modelo elegido: RoBERTa fine-tuned en SQuAD2, mejor F1-score en QA que BERT base
```

---

## Sección 3 — Preguntas Difíciles

---

## Pregunta 13 — Arquitectura RAG completa

```python
# rag_system/processor.py — Procesamiento de documentos
from sentence_transformers import SentenceTransformer
import chromadb

class DocumentProcessor:
    def __init__(self, chunk_size: int = 500, overlap: int = 50):
        self.chunk_size = chunk_size
        self.overlap = overlap

    def crear_chunks(self, texto: str, fuente: str) -> list[dict]:
        chunks = []
        inicio = 0
        while inicio < len(texto):
            fin = inicio + self.chunk_size
            chunk = texto[inicio:fin]
            if fin < len(texto):
                ultimo_punto = chunk.rfind('.')
                if ultimo_punto > self.chunk_size * 0.5:
                    fin = inicio + ultimo_punto + 1
                    chunk = texto[inicio:fin]
            chunks.append({'texto': chunk.strip(), 'fuente': fuente, 'inicio': inicio})
            inicio = fin - self.overlap
        return chunks

class RAGSystem:
    def __init__(self, modelo_embeddings: str = 'all-MiniLM-L6-v2'):
        self.modelo = SentenceTransformer(modelo_embeddings)
        self.processor = DocumentProcessor(chunk_size=500, overlap=50)
        self.chroma = chromadb.PersistentClient(path="./chroma_db")
        self.collection = self.chroma.get_or_create_collection(
            name="documentacion",
            metadata={"hnsw:space": "cosine"}
        )

    def indexar_documento(self, texto: str, fuente: str):
        chunks = self.processor.crear_chunks(texto, fuente)
        if not chunks:
            return
        textos = [c['texto'] for c in chunks]
        embeddings = self.modelo.encode(textos, normalize_embeddings=True).tolist()
        ids = [f"{fuente}_{i}" for i in range(len(chunks))]
        metadatos = [{'fuente': c['fuente'], 'inicio': c['inicio']} for c in chunks]
        self.collection.add(documents=textos, embeddings=embeddings, ids=ids, metadatas=metadatos)
        print(f"Indexados {len(chunks)} chunks de '{fuente}'")

    def recuperar(self, consulta: str, n_resultados: int = 3) -> list[dict]:
        emb_consulta = self.modelo.encode(consulta, normalize_embeddings=True).tolist()
        resultados = self.collection.query(
            query_embeddings=[emb_consulta],
            n_results=n_resultados,
            include=['documents', 'metadatas', 'distances']
        )
        return [
            {'texto': doc, 'fuente': meta['fuente'], 'relevancia': 1 - dist}
            for doc, meta, dist in zip(
                resultados['documents'][0],
                resultados['metadatas'][0],
                resultados['distances'][0]
            )
        ]

    def preguntar(self, consulta: str, cliente_llm) -> dict:
        fragmentos = self.recuperar(consulta, n_resultados=3)
        contexto = "\n\n---\n\n".join(f['texto'] for f in fragmentos)
        fuentes = list({f['fuente'] for f in fragmentos})

        respuesta = cliente_llm.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            system="""Eres un asistente de documentación técnica. 
Responde SOLO basándote en el contexto proporcionado.
Si la respuesta no está en el contexto, dilo explícitamente.""",
            messages=[{"role": "user", "content": f"Consulta: {consulta}\n\nContexto:\n{contexto}"}]
        )

        return {
            'respuesta': respuesta.content[0].text,
            'fuentes': fuentes,
            'fragmentos_usados': len(fragmentos)
        }
```

**Decisiones de diseño:**
- **Chunk size 500 chars**: balance entre contexto suficiente y precisión de embedding
- **Overlap 50 chars**: evita perder información en los bordes de los chunks
- **3 fragmentos**: suficiente contexto sin superar el context window ni sobrecargar el modelo
- **Cosine similarity**: más robusta para embeddings de texto que la euclidiana

---

## Pregunta 14 — Sistema de procesamiento de documentos para RAG

```python
import os
from pathlib import Path
from sentence_transformers import SentenceTransformer
import chromadb

class IndexadorDocumentos:
    def __init__(self, directorio_docs: str, chunk_size: int = 400, overlap: int = 40):
        self.directorio = Path(directorio_docs)
        self.chunk_size = chunk_size
        self.overlap = overlap
        self.modelo = SentenceTransformer('all-MiniLM-L6-v2')
        self.cliente_chroma = chromadb.PersistentClient(path="./rag_index")
        self.coleccion = self.cliente_chroma.get_or_create_collection(
            "documentos",
            metadata={"hnsw:space": "cosine"}
        )

    def _leer_documento(self, ruta: Path) -> str:
        if ruta.suffix == '.txt':
            return ruta.read_text(encoding='utf-8')
        raise ValueError(f"Formato no soportado: {ruta.suffix}")

    def _crear_chunks(self, texto: str) -> list[str]:
        chunks = []
        inicio = 0
        while inicio < len(texto):
            fin = min(inicio + self.chunk_size, len(texto))
            chunk = texto[inicio:fin]
            if fin < len(texto):
                for sep in ['\n\n', '. ', '\n', ' ']:
                    pos = chunk.rfind(sep)
                    if pos > self.chunk_size * 0.6:
                        chunk = chunk[:pos + len(sep)]
                        fin = inicio + len(chunk)
                        break
            if chunk.strip():
                chunks.append(chunk.strip())
            inicio = fin - self.overlap
        return chunks

    def indexar_directorio(self) -> int:
        total_chunks = 0
        for ruta in self.directorio.rglob('*.txt'):
            try:
                texto = self._leer_documento(ruta)
                chunks = self._crear_chunks(texto)
                if not chunks:
                    continue
                embeddings = self.modelo.encode(chunks, normalize_embeddings=True).tolist()
                fuente = ruta.name
                ids = [f"{fuente}_{i}" for i in range(len(chunks))]
                self.coleccion.add(
                    documents=chunks,
                    embeddings=embeddings,
                    ids=ids,
                    metadatas=[{'fuente': fuente, 'chunk_idx': i} for i in range(len(chunks))]
                )
                total_chunks += len(chunks)
                print(f"✓ {fuente}: {len(chunks)} chunks indexados")
            except Exception as e:
                print(f"✗ Error procesando {ruta}: {e}")
        return total_chunks

    def buscar(self, consulta: str, n_resultados: int = 5) -> list[dict]:
        emb = self.modelo.encode(consulta, normalize_embeddings=True).tolist()
        resultado = self.coleccion.query(
            query_embeddings=[emb],
            n_results=n_resultados,
            include=['documents', 'metadatas', 'distances']
        )
        return [
            {'texto': doc, 'fuente': meta['fuente'], 'similitud': round(1 - dist, 4)}
            for doc, meta, dist in zip(
                resultado['documents'][0],
                resultado['metadatas'][0],
                resultado['distances'][0]
            )
        ]
```

---

## Pregunta 15 — Proxy de LLM con caché, guardrails y rate limiting

```python
from fastapi import FastAPI, Depends, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import hashlib, time, anthropic, re
from collections import defaultdict

app = FastAPI()
client = anthropic.Anthropic()

# Caché simple en memoria (en producción: Redis)
cache: dict[str, dict] = {}

# Rate limiting simple en memoria
peticiones_usuario: dict[str, list] = defaultdict(list)
MAX_PETICIONES_POR_MINUTO = 10

PALABRAS_PROHIBIDAS = ['ataque', 'exploit', 'hack malicioso']

class PromptRequest(BaseModel):
    prompt: str
    user_id: str

def verificar_rate_limit(user_id: str):
    ahora = time.time()
    peticiones_usuario[user_id] = [t for t in peticiones_usuario[user_id] if ahora - t < 60]
    if len(peticiones_usuario[user_id]) >= MAX_PETICIONES_POR_MINUTO:
        raise HTTPException(status_code=429, detail="Rate limit excedido")
    peticiones_usuario[user_id].append(ahora)

def guardrail_input(texto: str) -> bool:
    texto_lower = texto.lower()
    return not any(palabra in texto_lower for palabra in PALABRAS_PROHIBIDAS)

def guardrail_output(texto: str) -> str:
    for palabra in PALABRAS_PROHIBIDAS:
        texto = re.sub(re.escape(palabra), '[CONTENIDO FILTRADO]', texto, flags=re.IGNORECASE)
    return texto

@app.post("/chat")
async def chat(request: PromptRequest):
    verificar_rate_limit(request.user_id)

    if not guardrail_input(request.prompt):
        raise HTTPException(status_code=400, detail="Contenido no permitido")

    cache_key = hashlib.sha256(request.prompt.encode()).hexdigest()
    if cache_key in cache:
        return {"respuesta": cache[cache_key]["respuesta"], "desde_cache": True}

    async def stream_respuesta():
        respuesta_completa = []
        with client.messages.stream(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            messages=[{"role": "user", "content": request.prompt}]
        ) as stream:
            for texto in stream.text_stream:
                respuesta_completa.append(texto)
                yield texto

        respuesta_final = guardrail_output("".join(respuesta_completa))
        cache[cache_key] = {"respuesta": respuesta_final, "timestamp": time.time()}

    return StreamingResponse(stream_respuesta(), media_type="text/plain")
```

---

## Pregunta 16 — Evaluación de calidad de RAG

```python
from anthropic import Anthropic
import json

client = Anthropic()

class EvaluadorRAG:
    def evaluar_fidelidad(self, pregunta: str, contexto: str, respuesta: str) -> dict:
        prompt = f"""Evalúa si la siguiente respuesta está fundamentada en el contexto.

Pregunta: {pregunta}
Contexto: {contexto}
Respuesta: {respuesta}

Responde SOLO con JSON:
{{"puntuacion": 0-1, "razonamiento": "...", "hay_alucinaciones": true/false}}"""

        res = client.messages.create(
            model="claude-sonnet-4-6", max_tokens=300,
            messages=[{"role": "user", "content": prompt}]
        )
        return json.loads(res.content[0].text)

    def evaluar_relevancia_retrieval(self, pregunta: str, fragmento: str) -> dict:
        prompt = f"""¿Es este fragmento relevante para responder la pregunta?

Pregunta: {pregunta}
Fragmento: {fragmento}

JSON: {{"relevancia": 0-1, "es_relevante": true/false}}"""

        res = client.messages.create(
            model="claude-sonnet-4-6", max_tokens=150,
            messages=[{"role": "user", "content": prompt}]
        )
        return json.loads(res.content[0].text)

    def evaluar_dataset(self, dataset: list[dict]) -> dict:
        """
        dataset: [{"pregunta": ..., "contexto": ..., "respuesta": ..., "fragmentos": [...]}]
        """
        metricas = {"fidelidad": [], "relevancia": []}

        for item in dataset:
            fid = self.evaluar_fidelidad(item["pregunta"], item["contexto"], item["respuesta"])
            metricas["fidelidad"].append(fid["puntuacion"])

            for fragmento in item["fragmentos"]:
                rel = self.evaluar_relevancia_retrieval(item["pregunta"], fragmento)
                metricas["relevancia"].append(rel["relevancia"])

        return {
            "fidelidad_media": sum(metricas["fidelidad"]) / len(metricas["fidelidad"]),
            "relevancia_media": sum(metricas["relevancia"]) / len(metricas["relevancia"]),
            "num_evaluaciones": len(dataset)
        }
```

---

## Pregunta 17 — Agente con herramientas (function calling)

```python
import anthropic, json, math
from datetime import datetime

client = anthropic.Anthropic()

herramientas = [
    {
        "name": "calculadora",
        "description": "Realiza operaciones matemáticas: suma, resta, multiplicación, división, potencia",
        "input_schema": {
            "type": "object",
            "properties": {
                "operacion": {"type": "string", "enum": ["suma", "resta", "multiplicacion", "division", "potencia"]},
                "a": {"type": "number"}, "b": {"type": "number"}
            },
            "required": ["operacion", "a", "b"]
        }
    },
    {
        "name": "obtener_fecha",
        "description": "Devuelve la fecha y hora actual",
        "input_schema": {"type": "object", "properties": {}}
    }
]

def ejecutar_herramienta(nombre: str, inputs: dict) -> str:
    if nombre == "calculadora":
        ops = {
            "suma": lambda a, b: a + b, "resta": lambda a, b: a - b,
            "multiplicacion": lambda a, b: a * b,
            "division": lambda a, b: a / b if b != 0 else "Error: división por cero",
            "potencia": lambda a, b: a ** b
        }
        return str(ops[inputs["operacion"]](inputs["a"], inputs["b"]))
    elif nombre == "obtener_fecha":
        return datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return "Herramienta no encontrada"

def agente(pregunta: str, historial: list = None) -> str:
    if historial is None:
        historial = []
    historial.append({"role": "user", "content": pregunta})

    while True:
        respuesta = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            system="Eres un asistente útil con acceso a herramientas. Úsalas cuando sean necesarias.",
            tools=herramientas,
            messages=historial
        )

        if respuesta.stop_reason == "tool_use":
            resultados_herramientas = []
            for bloque in respuesta.content:
                if bloque.type == "tool_use":
                    resultado = ejecutar_herramienta(bloque.name, bloque.input)
                    resultados_herramientas.append({
                        "type": "tool_result", "tool_use_id": bloque.id, "content": resultado
                    })

            historial.append({"role": "assistant", "content": respuesta.content})
            historial.append({"role": "user", "content": resultados_herramientas})
        else:
            texto_final = next(b.text for b in respuesta.content if hasattr(b, 'text'))
            historial.append({"role": "assistant", "content": texto_final})
            return texto_final

# Uso con historial (conversación multi-turno)
historial = []
print(agente("¿Cuánto es 2^10 + 150?", historial))
print(agente("¿Y si le resto 24?", historial))  # mantiene el contexto
```

---

## Pregunta 18 — Análisis y refactorización del sistema RAG

**Problemas identificados:**

1. **🔴 CLAVE API en código fuente** → filtración de secretos si se sube a Git
2. **🔴 Sin autenticación** → cualquiera puede usar el endpoint
3. **🔴 Sin validación de input** → texto vacío, inyección de prompts
4. **🟡 20 resultados al LLM** → puede superar el context window, respuestas peores con demasiado contexto
5. **🟡 Sin manejo de errores** → crashes con 500 sin información útil
6. **🟡 Sin system prompt** → el LLM puede alucinar o salirse del contexto
7. **🟡 Sin caché** → llama al LLM para cada petición aunque sea repetida
8. **🟡 Chroma efímero** → `chromadb.Client()` no persiste entre reinicios; los datos se pierden

```python
# VERSIÓN CORREGIDA
import os
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
from openai import OpenAI
import chromadb, hashlib

app = FastAPI()
security = HTTPBearer()

# FIX 1: API key desde variable de entorno
client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

# FIX 8: Chroma persistente
chroma = chromadb.PersistentClient(path="./chroma_data")
collection = chroma.get_or_create_collection("docs")

cache: dict[str, str] = {}

class PreguntaInput(BaseModel):  # FIX 3: validación con Pydantic
    pregunta: str = Field(..., min_length=5, max_length=1000)

def verificar_token(credentials: HTTPAuthorizationCredentials = Depends(security)):  # FIX 2
    if credentials.credentials != os.environ.get("API_TOKEN"):
        raise HTTPException(status_code=401, detail="Token inválido")

@app.post("/preguntar")
def preguntar(input: PreguntaInput, _: None = Depends(verificar_token)):
    # FIX 7: caché por hash de la pregunta
    cache_key = hashlib.md5(input.pregunta.encode()).hexdigest()
    if cache_key in cache:
        return {"respuesta": cache[cache_key], "desde_cache": True}

    # FIX 4: reducir a 3 resultados relevantes
    resultados = collection.query(query_texts=[input.pregunta], n_results=3)
    if not resultados['documents'][0]:
        raise HTTPException(status_code=404, detail="No se encontraron documentos relevantes")

    contexto = "\n\n".join(resultados['documents'][0])

    # FIX 6: system prompt que instruye a usar el contexto
    try:
        respuesta = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": """Responde SOLO usando el contexto proporcionado.
Si la respuesta no está en el contexto, di explícitamente que no tienes esa información."""},
                {"role": "user", "content": f"Pregunta: {input.pregunta}\n\nContexto:\n{contexto}"}
            ]
        )
    except Exception as e:  # FIX 5: manejo de errores
        raise HTTPException(status_code=502, detail=f"Error al llamar al LLM: {str(e)}")

    texto_respuesta = respuesta.choices[0].message.content
    cache[cache_key] = texto_respuesta
    fuentes = list({m.get('fuente', 'desconocida') for m in resultados['metadatas'][0]})
    return {"respuesta": texto_respuesta, "fuentes": fuentes}
```
