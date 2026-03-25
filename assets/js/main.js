// Referencia formulario
const form = document.getElementById("registro-form");

// Evento submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = obtenerDatosFormulario();

  limpiarErrores();

  const esValido = validarFormulario(datos);

  if (!esValido) return;

  enviarDatos(datos);
  mostrarExito();
  form.reset();
});

// Obtener datos
const obtenerDatosFormulario = () => {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    edad: document.getElementById("edad").value.trim(),
    email: document.getElementById("email").value.trim()
  };
};

// Validación
const validarFormulario = (datos) => {
  let valido = true;

  if (datos.nombre.length < 2) {
    mostrarError("nombre-error", "Nombre mínimo 2 caracteres");
    valido = false;
  }

  if (datos.edad === "" || isNaN(datos.edad)) {
    mostrarError("edad-error", "Edad inválida");
    valido = false;
  } 
  else if (datos.edad < 18 || datos.edad > 120) {
    mostrarError("edad-error", "Edad entre 18 y 120");
    valido = false;
  }

  if (!validarEmail(datos.email)) {
    mostrarError("email-error", "Email inválido");
    valido = false;
  }

  return valido;
};

// Mostrar error
const mostrarError = (id, mensaje) => {
  document.getElementById(id).textContent = mensaje;
};

// Limpiar errores
const limpiarErrores = () => {
  document
    .querySelectorAll(".error-message")
    .forEach(el => el.textContent = "");
};

// Validar email
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Enviar datos
const enviarDatos = (datos) => {
  console.log("Datos enviados:", datos);
};

// Mensaje éxito
const mostrarExito = () => {
  const mensaje = document.createElement("div");

  mensaje.className = "success-message";
  mensaje.textContent = "Registro exitoso";

  form.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 3000);
};
