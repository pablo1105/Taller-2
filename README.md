# Taller 2 - Sistema de Registro de Eventos

## Estado Anterior del Sistema
El sistema presentaba múltiples problemas críticos que afectaban su funcionalidad y mantenibilidad:

### Problemas en HTML:
* Botón de envío configurado como type="button" en lugar de type="submit".
* IDs de elementos poco descriptivos (usr_nm, age_val, correo_elect).
* Falta de elementos para mostrar mensajes de error al usuario
Estructura básica incompleta.

### Problemas en CSS:
* Selectores acoplados y poco específicos (#registro-form div span).
* Diseño desalineado sin uso de Flexbox o Grid.
* Nombres de clases y selectores no descriptivos.

### Problemas en JavaScript:
* Selector incorrecto: document.getElementsByClassName('registro-form') cuando era un ID.
* Error de asignación en lugar de comparación: if (nombre = "").
* Validación lógica incorrecta: comparación estricta edad === 18 en lugar de rango.
* Problemas de scope: variable nombre no accesible en función enviarDatos().
* Sin validación de campos requeridos ni formato de email.
* Falta de prevención de envío cuando hay errores.
* Valores numéricos absurdos aceptados (ej: 2318612178135168 como edad).

## Correcciones Realizadas
### HTML:
✅ Cambio de type="button" a type="submit" en el botón.

✅ Mantenimiento de IDs originales por consistencia con JS existente.

✅ Adición de elementos span para mensajes de error individuales.

✅ Estructura HTML completa con doctype y metadatos.

### CSS:
✅ Reemplazo de selectores acoplados por clases específicas.

✅ Implementación de Flexbox para mejor alineación.

✅ Nombres de clases más descriptivos.

✅ Estilos separados para mensajes de error y éxito.

### JavaScript:
✅ Corrección de selector: getElementById('registro-form').

✅ Fix de asignación: if (nombre === "") (comparación en lugar de asignación).

✅ Validación lógica mejorada: rangos en lugar de valores exactos.

✅ Solución de problemas de scope pasando parámetros correctamente.

✅ Implementación de validación completa de campos requeridos.

✅ Validación de formato de email con expresión regular.

✅ Sistema de prevención de envío cuando hay errores.

✅ Validación de rango realista de edad (18-120 años).

✅ Feedback visual de errores y mensajes de éxito.

✅ Manejo adecuado de eventos de formulario.

## Estado Actual del Sistema
### Funcionalidades Implementadas:

✅ Validación completa de formulario en frontend.

✅ Feedback visual inmediato de errores.

✅ Prevención de envío con datos inválidos.

✅ Mensajes de éxito al registrar correctamente.

✅ Diseño responsive y bien alineado con Flexbox.

✅ Código mantenible y siguiendo estándares.

✅ Nombres semánticos y convenciones claras.

✅ Validación de rangos realistas (edad entre 18-120 años).

### Estructura del Proyecto:
    Taller-2/
    ├── index.html
    └── assets/
        ├── css/
        │   └── style.css
        └── js/
            └── main.js

### Mejoras Clave:
* Experiencia de Usuario: Feedback claro y mensajes descriptivos.
* Robustez: Validación exhaustiva de datos de entrada.
* Mantenibilidad: Código organizado con nombres semánticos.
* Accesibilidad: Estructura HTML semántica correcta.
* Seguridad: Prevención de datos inválidos o peligrosos.

El sistema ahora cumple con todos los requisitos solicitados y presenta un código limpio, mantenible y funcional.