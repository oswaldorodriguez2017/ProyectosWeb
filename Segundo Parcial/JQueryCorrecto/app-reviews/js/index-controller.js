$(document).ready(function(){
//  console.log("Hola mundo");

  //var tops = ['Revenge', 'Personal interest', 'liga de la justicia','venom', 'Peter pan'];
  //for (var i = 0; i < tops.length; i++) {
  //  $('#top10').append('<li class="list-group-item"><p>'+tops[i]+'</p></li>');
//  }
  //$('#guardar').click(function(e){
//    console.log($('.navbar'));
  //  console.log($('#nombre'));
  //});

//   console.log("Prueba desde JQUERY");
   // OBTENER EL ELMENMENTO CON EL ID:

  // console.log($('#email'));
   // obtener mediante la CLASE

   //console.log($('.form-group'));

   //console.log($('input'));

   //console.log($('input[name=nombre]'));

 /*

  1 Ebentosd

 */

$('#guardar').click(function(){

   var nombre = $('#nombre').val();
   var email = $('#email').val();
   var password = $('#password').val();

  // alert("nombre " + nombre + " email " + email + " password " + password);

  $('#ayuda').val("");
  $('#ayudaEmail').val("");


  // validar

  if(!$('#nombre').val()){

    alert("Nombre no puede ir en blanco");

    $('#ayuda').text = "No puede dehar el nombre en blanco";

  }

    if(!$('#email').val()){

      alert("Email no puede ir en blanco");

      $('#ayuda').text = "No puede dehar el nombre en blanco";

    }
    else if (validateEmail($('#email'))) {

      alert("Email no Valido");


    }


});


function validateEmail(Email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return $.trim(Email).match(pattern) ? true : false;
}




















});
