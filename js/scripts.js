

 class Producto {
    constructor(precio, moneda){
    this.precio = parseFloat(precio);
    this.moneda = moneda;
    
}

sumarIva(){
  return this.precio * 1.21;
}
cuotas3(){
  return this.precio / 3 * 1.21;
}
cuotas6(){
  return this.precio / 6 * 1.21;
}
cuotas12(){
  return this.precio / 12 * 1.21;
}
dolar(){
  return this.precio * 1.21 / 112.17;
}


}
const elemento = document.getElementById("Mensaje");
const elemento2 = document.getElementById("Mensaje2");
const elemento3 = document.getElementById("Mensaje3");
const elemento4 = document.getElementById("Mensaje4");
const elemento5 = document.getElementById("Mensaje5");
const elemento6 = document.getElementById("Mensaje6");

let arrayProductos = [];
do{
  var comprobacion = prompt ("ingrese Valor del producto a calcular o OK para terminar");
  if (comprobacion === "Ok"|| comprobacion === "OK" || comprobacion === "ok"){
    break;
  }else{
    preciop = comprobacion;
    var monedap = prompt ("ingrese en que moneda");
    arrayProductos.push(new Producto(preciop, monedap));
  }
}

while (comprobacion != "Ok" || comprobacion != "OK" || comprobacion != "ok")

console.log(arrayProductos);

for (var producto of arrayProductos){
  elemento.innerHTML = "$ " + producto.precio;
  elemento2.innerHTML = "$ " + producto.sumarIva();
  elemento3.innerHTML = "$ " + producto.cuotas3();
  elemento4.innerHTML = "$ " + producto.cuotas6();
  elemento5.innerHTML = "$ " + producto.cuotas12();
  elemento6.innerHTML = "u$s " + producto.dolar();
 

}


function ConfirmDemo() {
  var mensaje = confirm("¿Esta Correcto los valores?");
  
  if (mensaje) {
  alert("u$s" + producto.dolar());
  }
  
  else {
  alert("¡Haz denegado el mensaje!");
  }
}

window.addEventListener('DOMContentLoaded', event => {

  // Navbar
  let navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

   
  navbarShrink();

  //scroll navbar
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: 74,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});





