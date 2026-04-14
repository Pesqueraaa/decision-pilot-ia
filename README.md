# Decision Pilot IA

## 🎯 Objetivo del proyecto

Decision Pilot IA es una miniaplicación web educativa diseñada para ayudar a estructurar decisiones complejas mediante prompts.

La aplicación no automatiza decisiones. Su objetivo es obligar al usuario a:
- definir correctamente el problema,
- analizar alternativas,
- identificar riesgos,
- justificar una recomendación,
- diferenciar entre automatización y control humano.

---

## 🧠 Problema que resuelve

El uso habitual de herramientas de IA tiende a generar respuestas rápidas pero poco profundas.

Decision Pilot IA introduce una estructura que fuerza el razonamiento, evitando:
- respuestas superficiales,
- decisiones sin justificación,
- falta de análisis de riesgos,
- ausencia de criterios de evaluación.

---

## 📚 Casos de uso incluidos

La aplicación incorpora cuatro escenarios reales:

1. **Admisión y becas universitarias**  
   Evaluación de expedientes con foco en equidad, sesgo y trazabilidad.

2. **Tickets internos de soporte TI**  
   Clasificación y escalado de incidencias con impacto en SLA.

3. **Devoluciones y fraude en e-commerce**  
   Equilibrio entre experiencia de cliente y control de fraude.

4. **Asistente de documentación corporativa**  
   Diseño de arquitectura para acceso a información interna.

Cada caso incluye contexto, datos y restricciones específicas.

---

## 🗂️ Estructura del proyecto

decision-pilot-ia/
│
├── index.html # Interfaz de usuario
├── style.css # Diseño visual
├── app.js # Lógica de interacción
├── prompts.js # Motor de generación de prompts
│
├── data/
│ └── ejemplos.json # Casos precargados
│
└── README.md # Documentación


---

## 🚀 Cómo usar la aplicación

1. Seleccionar un caso de uso
2. Revisar o ajustar:
   - contexto
   - decisión
   - datos disponibles
   - restricciones
3. Pulsar **“Generar prompt”**
4. Copiar el prompt generado
5. Utilizarlo en una herramienta de IA

⚠️ Importante:  
La calidad del resultado depende directamente de la calidad de la información introducida.

---

## 🌐 Despliegue en GitHub Pages

1. Subir todos los archivos al repositorio
2. Ir a **Settings → Pages**
3. En “Source”, seleccionar:
   - Branch: `main`
   - Folder: `/ (root)`
4. Guardar cambios
5. Acceder a la URL generada por GitHub

---

## ⚠️ Limitaciones

- No toma decisiones automáticamente
- No sustituye el juicio humano
- No valida datos introducidos
- No incluye integración directa con APIs de IA
- Puede generar prompts incompletos si faltan datos

---

## 🧩 Enfoque del sistema

Este proyecto separa claramente:

- **Automatización** → generación de estructura de análisis  
- **Control humano** → interpretación y decisión final  

La herramienta está diseñada como apoyo al pensamiento, no como sustituto.

---


