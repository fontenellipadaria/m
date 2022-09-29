$(document).on('click','.send_form', function(){
  var input_blanter = document.getElementById('wa_email'),
  input_blanter = document.getElementById('wa_name');

  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
  
  walink2 = 'Olá!',
  text_yes = 'Você foi redirecionado para o WhatsApp. Obrigado!';
  text_no = 'Por favor, preencha os campos obrigatórios.';

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
  }

  if("" != input_blanter.value){

   /* Call Input Form */
   var input_select1 = $("#wa_select :selected").text(),
   input_name1 = $("#wa_name").val(),
   //input_name2 = $("#wa_surname").val(),
   input_email1 = $("#wa_email").val(),
   //input_number1 = $("#wa_number").val(),
   //input_url1 = $("#wa_url").val(),
   input_tlg = $("#tlg_num").val(),
   input_textarea1 = $("#wa_textarea").val();

   /* Final Whatsapp URL */
   var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
   '*Nome*: ' + input_name1 + '%0A' +
    /*'*Sobrenome*: ' + input_name2 + '%0A' +
    '*Idade*: ' + input_number1 + '%0A' +*/
    '*E-mail*: ' + input_email1 + '%0A' +
    '*Soube por*: ' + input_select1 + '%0A' +
    //'*URL/Link*: ' + input_url1 + '%0A' +
    '*Telegram*: ' + input_tlg + '%0A' +
    '*Mensagem*: ' + input_textarea1 + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info")
    Swal.fire({
      confirmButtonText: 'OK',
      confirmButtonColor: 'var(--themecolor)',
      position: 'top',
      icon: 'success',
      title: 'Sucesso!',
      text: text_yes,
    }).then(okay => {
     if (okay) {
      window.location.reload();
    }
  });

  } else {
    document.getElementById("text-info")
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Oops...',
      text: text_no,
      showConfirmButton: false,
      timer: 1500
    });
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();

$(".needs-validation").submit(function(e) {
    e.preventDefault(); // <==stop page refresh==>
  });
