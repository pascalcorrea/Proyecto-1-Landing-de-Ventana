$('#contactForm').on('submit', function (event) {
    event.preventDefault(); // prevent reload

    var cajaNombre = $('#caja-texto-nombre').val();
    var cajaApellido = $('#caja-texto-apellido').val();
    var cajaEmail = $('#caja-texto-email').val();
    var cajaTelefono = $('#caja-texto-telefono').val();
    var cajaContraseña = $('#caja-texto-contraseña').val();

    alert(cajaNombre, cajaApellido, cajaEmail, cajaTelefono, cajaContraseña);

    var formData = new FormData(this);
    formData.append('service_id', 'service_3ovfx7i');
    formData.append('template_id', 'vapzstore-template');
    formData.append('user_id', '0cwP3lmSkSPgGPpK5');

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