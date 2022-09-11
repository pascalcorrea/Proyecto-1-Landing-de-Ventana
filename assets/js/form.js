var cajaNombre = document.querySelector("#name");
    var cajaApellidos = document.querySelector("#surname");
    var cajaEmail = document.querySelector("#email");
    var cajaNumero = document.querySelector("#number");
    var cajaContraseña = document.querySelector("#password");

    var buttonEnviar = document.querySelector("#button");

    function imprimirDatos() {
    alert("mi primer onclick event")
    alert(cajaNombre)
    }

    buttonEnviar.addEventListener("click", imprimirDatos());

    $('#contactForm').on('submit', function (event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('service_id', 'service_xa42f1q');
    formData.append('template_id', 'template_hvkervc');
    formData.append('user_id', 'W8wCKti6oi2hoY0_W');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        alert('Your mail is sent!');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
    });