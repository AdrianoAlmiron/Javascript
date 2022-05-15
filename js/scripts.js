

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
Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){}
}).showToast();

function guardarDatos() {
  localStorage.nombre = document.getElementById("nombre").value;
  localStorage.password = document.getElementById("password").value;
  showToast();
  
}

function recuperarDatos() {
  if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
      document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
  } else {
      document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
  }
}

