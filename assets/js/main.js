// Corrección de validación
const form = document.getElementById("registro-form"); // Corrección 1: Usar getElementById
const boton = document.getElementById("btn-submit");

// Cambiar a evento de submit del formulario para mejor control
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir envío por defecto

  const nombre = document.getElementById("usr_nm").value;
  const edad = document.getElementById("age_val").value;
  const email = document.getElementById("correo_elect").value;

  let hayErrores = false;

  // Corrección 2: Usar comparación en lugar de asignación
  if (nombre === "" || nombre.length < 2) {
    mostrarError(
      "nombre-error",
      "El nombre es obligatorio y debe tener al menos 2 caracteres",
    );
    hayErrores = true;
  } else {
    limpiarError("nombre-error");
  }

  // Corrección 3: Validación de rango de edad
  if (edad === "") {
    mostrarError("edad-error", "La edad es obligatoria");
    hayErrores = true;
  } else if (isNaN(edad) || Number(edad) < 18) {
    mostrarError("edad-error", "Debe ser mayor de 18 años");
    hayErrores = true;
  } else if (Number(edad) > 120) {
    // Corrección: Edad máxima razonable
    mostrarError("edad-error", "La edad no puede ser mayor a 120 años");
    hayErrores = true;
  } else {
    limpiarError("edad-error");
  }

  // Validación de email
  if (email === "" || !isValidEmail(email)) {
    mostrarError("email-error", "Email válido es obligatorio");
    hayErrores = true;
  } else {
    limpiarError("email-error");
  }

  // Corrección 4: Solo enviar si no hay errores
  if (!hayErrores) {
    enviarDatos(nombre, email, edad);
    mostrarExito();
    form.reset(); // Limpiar formulario
  }
});

function mostrarError(elementId, mensaje) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.textContent = mensaje;
  }
}

function limpiarError(elementId) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.textContent = "";
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Corrección 5: Pasar parámetros necesarios
function enviarDatos(nombre, email, edad) {
  console.log("Registrando a: " + nombre);
  console.log("Email: " + email);
  console.log("Edad: " + edad);
}

function mostrarExito() {
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.textContent = "¡Registro exitoso!";
  successDiv.id = "mensaje-exito";

  // Remover mensaje anterior si existe
  const mensajeAnterior = document.getElementById("mensaje-exito");
  if (mensajeAnterior) {
    mensajeAnterior.remove();
  }

  form.appendChild(successDiv);

  // Remover mensaje después de 3 segundos
  setTimeout(() => {
    if (successDiv.parentNode) {
      successDiv.remove();
    }
  }, 3000);
}
