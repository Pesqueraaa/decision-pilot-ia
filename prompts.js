const PROMPT_MAESTRO = `
Actúa como experto en Diseño e Implementación de Sistemas de Información.

Tu objetivo es estructurar una decisión compleja de forma rigurosa.
NO debes dar respuestas superficiales ni automáticas.

Debes responder EXACTAMENTE con esta estructura:

1. Resumen del problema
2. Decisión concreta a tomar
3. Datos disponibles y datos faltantes (explícitos)
4. Alternativas (mínimo 3 opciones viables)
5. Comparación de alternativas (criterios: impacto, riesgo, coste, complejidad)
6. Recomendación razonada (explica por qué)
7. Separación clara:
   - qué automatizar
   - qué mantener bajo control humano
8. KPIs para medir éxito (mínimo 3)
9. Decisión final:
   - GO
   - NO-GO
   - GO con condiciones (explicar condiciones)

Reglas:
- No omitas pasos
- No inventes datos sin indicarlo
- Si faltan datos críticos, dilo antes de recomendar
- Evita lenguaje genérico
`;

// ==============================
// VARIACIONES POR CASO
// ==============================

const CASOS = {

    admisiones: `
CASO: Admisión y becas universitarias

Condiciones clave:
- Datos sensibles (expedientes académicos)
- Riesgo de sesgo
- Necesidad de trazabilidad
- Revisión humana obligatoria en decisiones críticas

Debes añadir:
- Evaluación de riesgo de sesgo
- Medidas para garantizar equidad
- Diferencia entre automatizar validaciones y decisiones
`,

    soporte: `
CASO: Tickets internos de soporte TI

Condiciones clave:
- Volumen de tickets
- SLA definidos
- Tickets repetidos vs incidentes críticos

Debes incluir explícitamente:
- Priorización de tickets
- Impacto en SLA
- Qué NO debe automatizarse (incidentes críticos)
- Propuesta de primer subproceso a rediseñar
`,

    ecommerce: `
CASO: Devoluciones y fraude en e-commerce

Condiciones clave:
- Equilibrio entre experiencia cliente y fraude
- Volumen de devoluciones
- Pedidos de alto valor

Debes añadir:
- Separación entre casos estándar y excepcionales
- Qué automatizar vs revisar manualmente
- Regla de negocio inicial recomendada
- Indicador clave de mejora del proceso
`,

    documentacion: `
CASO: Asistente interno de documentación corporativa

Condiciones clave:
- Coste de inferencia
- Privacidad
- Latencia
- Arquitectura técnica

Debes incluir comparación entre:
- API externa (SaaS)
- despliegue privado
- solución híbrida

Para cada opción:
- cuándo usarla
- riesgo principal
- coste relativo
- impacto en latencia y privacidad
`
};

// ==============================
// FUNCIÓN PRINCIPAL
// ==============================

function generarPrompt(caso, contexto, decision, datos, restricciones) {

    const contextoCaso = CASOS[caso] || "";

    return `
${PROMPT_MAESTRO}

${contextoCaso}

==============================
INFORMACIÓN DEL CASO
==============================

Contexto:
${contexto}

Decisión a tomar:
${decision}

Datos disponibles:
${datos}

Restricciones:
${restricciones}

==============================
INSTRUCCIONES FINALES
==============================

- Sigue estrictamente la estructura definida
- No des respuestas rápidas
- Justifica cada parte
- Si faltan datos, indícalo antes de decidir
- Mantén separación clara entre automatización y control humano
`;
}
