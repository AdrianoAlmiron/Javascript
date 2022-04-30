

function pesosDolares(valNum) {
  document.getElementById("inputDolares").value=(valNum/147).toFixed(2);
  document.getElementById("inputEuro").value=(valNum/197).toFixed(2);
  document.getElementById("inputReales").value=(valNum/7.5).toFixed(2);
}
function dolaresPesos(valNum) {
  document.getElementById("inputEuros").value=(valNum*145).toFixed(2);
  document.getElementById("inputEuro").value=(valNum/0.9).toFixed(2);
  document.getElementById("inputReales").value=(valNum/4.8).toFixed(2);
}
function pesoEuro(valNum) {
  document.getElementById("inputEuros").value=(valNum*197).toFixed(2);
  document.getElementById("inputDolares").value=(valNum*0.9).toFixed(2);
  document.getElementById("inputReales").value=(valNum/5.9).toFixed(2);
}
function pesoReal(valNum) {
  document.getElementById("inputEuros").value=(valNum*7.5).toFixed(2);
  document.getElementById("inputDolares").value=(valNum*0.2).toFixed(2);
  document.getElementById("inputEuro").value=(valNum*0.2).toFixed(2);
}


// Log in

function guardarDatos() {
  localStorage.nombre = document.getElementById("nombre").value;
  localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
  if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
      document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
  } else {
      document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
  }
}
//whatsapp

$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '1231231231', 
   
    headerTitle: 'Charlamos?', 
    popupMessage: 'Hola, en que puedo ayudarte?', 
    showPopup: true, 
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    position: "right"    
  });
});
