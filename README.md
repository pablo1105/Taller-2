#Evaluación Práctica — Sistema de Registro de Eventos
Objetivo

Identificar errores de lógica, sintaxis y estructura en un sistema de registro, aplicando buenas prácticas y principios de Clean Code para mejorar la mantenibilidad y validación del formulario.

Parte A — Diagnóstico de Errores

Se identificaron los siguientes errores en el sistema original:

Error 1 — Selector incorrecto del formulario

Archivo: main.js
Código original:

const form = document.getElementsByClassName('registro-form');

Problema:
Se intenta seleccionar el formulario usando una clase cuando el HTML utiliza un ID. Esto devuelve una colección vacía y rompe la validación.

Corrección:

const form = document.getElementById('registro-form');
Error 2 — Uso incorrecto del operador de asignación

Archivo: main.js
Código original:

if (nombre = "")

Problema:
Se usa el operador de asignación (=) en lugar del operador de comparación. La condición siempre se evalúa como verdadera.

Corrección:

if (nombre === "")
Error 3 — Validación incorrecta de edad

Archivo: main.js
Código original:

if (edad === 18)

Problema:
La validación solo permite exactamente 18 años en lugar de un rango válido.

Corrección:

if (edad >= 18)
Error 4 — Problema de alcance de variable

Archivo: main.js
Código original:

console.log("Registrando a: " + nombre);

Problema:
La variable nombre no existe dentro del scope de la función.

Corrección:

function enviarDatos(nombre) {
Error 5 — Botón no envía el formulario

Archivo: index.html
Código original:

<button type="button">

Problema:
El botón no envía el formulario porque no es tipo submit.

Corrección:

<button type="submit">
Parte B — Reestructuración y Clean Code

Se realizaron mejoras estructurales en HTML, CSS y JavaScript siguiendo buenas prácticas.

Mejoras en HTML
Uso de etiquetas semánticas <label>
Asociación correcta entre label e input mediante for e id
Uso de required para validación básica
Estructura HTML completa
Eliminación de etiquetas obsoletas
Agregado de contenedores para mensajes de error dinámicos

Ejemplo aplicado:

<label for="nombre">Nombre Completo:</label>
<input type="text" id="nombre" required>
<div id="nombre-error" class="error-message"></div>
Mejoras en CSS

Se implementaron buenas prácticas modernas:

Variables CSS
Flexbox
Diseño responsive
Reset básico
Selectores semánticos
Estilos separados para errores y éxito

Ejemplo:

:root {
  --primary-color: #2563eb;
  --error-color: #dc2626;
}

Uso de Flexbox:

.input-group {
  display: flex;
  flex-direction: column;
}
Mejoras en JavaScript (Clean Code)

Se refactorizó el código aplicando:

Funciones de responsabilidad única
Arrow functions
Validación separada
Uso de preventDefault()
Retorno booleano en validación
Separación lógica del DOM
Manejo dinámico de errores

Estructura final:

obtenerDatosFormulario()
validarFormulario()
mostrarError()
limpiarErrores()
validarEmail()
enviarDatos()
mostrarExito()

Ejemplo:

if (!validarFormulario(datos)) return;
Parte C — Funcionalidad Implementada

Se implementó la opción:

Manejo dinámico del DOM para mostrar errores

Se crean mensajes de error debajo de cada campo sin usar alert().

Ejemplo:

mostrarError("nombre-error", "Nombre mínimo 2 caracteres");

Los errores se limpian dinámicamente:

document
  .querySelectorAll(".error-message")
  .forEach(el => el.textContent = "");

También se implementó:

Validación regex para email
Mensaje de éxito dinámico
Eliminación automática del mensaje
Funcionalidades Implementadas
Validación completa del formulario
Validación de nombre
Validación de edad (18–120)
Validación regex email
Mensajes de error dinámicos
Mensaje de éxito dinámico
Prevención de envío inválido
Limpieza automática del formulario
Código modular y mantenible
Diseño responsive con Flexbox
Uso de variables CSS
HTML semántico
Estructura del Proyecto
Evaluacion_Practica/
│
├── index.html
│
└── assets/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── main.js
Mejoras Implementadas
Experiencia de Usuario

Mensajes claros y validación inmediata

Mantenibilidad

Código modular con funciones separadas

Accesibilidad

HTML semántico con label e inputs asociados

Robustez

Validación completa de todos los campos

Clean Code

Funciones pequeñas y reutilizables

Estado Final del Sistema

El sistema ahora:

No permite envío con errores
Muestra mensajes dinámicos
Valida email con regex
Valida rango de edad
Usa diseño responsive
Aplica Clean Code
Cumple los requisitos de la evaluación

El sistema cumple con todos los requerimientos solicitados en la Evaluación Práctica y presenta un código limpio, mantenible y funcional.
