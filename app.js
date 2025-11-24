// Todo el código se ejecuta cuando el documento está listo (jQuery ready)
$(document).ready(function () {
 // 1) Referencias a los campos y al mensaje de estado
  var $nombre = $("#nombre");
  var $edad = $("#edad"); // Nuevo campo
  var $email = $("#email");
  var $comentario = $("#comentario"); // ID actualizado a comentario
  var $formStatus = $("#formStatus");

  // 2) Feedback inmediato: focus / blur
  $("#nombre, #edad, #email, #comentario").focus(function () {
    $(this).css("background-color", "#e0f7fa");
  });

  $("#nombre, #edad, #email, #comentario").blur(function () {
    $(this).css("background-color", "white");
  });

  // 3) Validación al hacer clic en Enviar
  $("#btnEnviar").click(function () {
    var hayError = false;
    var errores = []; // Para mostrar mensajes debajo de los campos si hay errores
    
    // Reset de bordes y mensajes antes de validar
    $nombre.css("border-color", "#cccccc");
    $edad.css("border-color", "#cccccc");
    $email.css("border-color", "#cccccc");
    $comentario.css("border-color", "#cccccc");
    $formStatus.text(""); // Limpiar mensaje de estado


    // Reset de bordes antes de validar
    $nombre.css("border-color", "#cccccc");
    $email.css("border-color", "#cccccc");
    $mensaje.css("border-color", "#cccccc");

    // Validación simple: que no estén vacíos
    if ($nombre.val() === "") {
      hayError = true;
      $nombre.css("border-color", "red");
    }

    if ($email.val() === "") {
      hayError = true;
      $email.css("border-color", "red");
    }
    // Validar que contenga @
    if (!$email.val().includes("@")) {
      hayError = true;
      $email.css("border-color", "red");
      $formStatus
        .text("El email debe contener @")
        .css("color", "red");}

    if ($mensaje.val() === "") {
      hayError = true;
      $mensaje.css("border-color", "red");
    }

    // Mensajes para el usuario
    if (hayError) {
      $formStatus
        .text("Por favor, completá los campos obligatorios.")
        .css("color", "red");
    } else {
      $formStatus
        .text("Formulario enviado correctamente. ¡Gracias por tu mensaje!")
        .css("color", "green");
    }
  });

  // ------------ TEMA 2: TEXTO DESTACADO (solo color) ------------

  var textoDestacado = document.querySelector("#texto-destacado");
  var btnTextoColor = document.querySelector("#btnTextoColor");

  if (btnTextoColor && textoDestacado) {
    btnTextoColor.addEventListener("click", function () {
      textoDestacado.classList.toggle("texto-resaltado");
    });
  }

    // ------------ TEMA 3: CAMBIAR COLOR DEL SITIO + LOCALSTORAGE ------------

  var btnColorSitio = document.querySelector("#btnColorSitio");

  // Al cargar la página, leemos el valor guardado
  var modoGuardado = localStorage.getItem("modo-oscuro");
  if (modoGuardado === "on") {
    document.body.classList.add("modo-oscuro");
  }

  if (btnColorSitio) {
    btnColorSitio.addEventListener("click", function () {
      document.body.classList.toggle("modo-oscuro");

      // Si ahora está activo, guardamos "on", sino "off"
      if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("modo-oscuro", "on");
      } else {
        localStorage.setItem("modo-oscuro", "off");
      }
    });
  }

/* cambiar el tamaño de la fuente */
$("#increaseFont").on("click", function () {
    adjustFont(1);
  });
 
  $("#decreaseFont").on("click", function () {
    adjustFont(-1);
  });
 
  function adjustFont(delta) {
    let current = parseFloat($("html").css("font-size")) || defaultFontSize;
    let next = current + delta;
    // límites razonables
    if (next < 12) next = 12;
    if (next > 22) next = 22;
 
    $("html").css("font-size", next + "px");
    localStorage.setItem("fontSize", next);
  }
});


