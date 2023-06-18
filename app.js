class Alfajor{
    constructor(nombre, precio, img){
        this.nombre=nombre;
        this.precio=precio;
        this.img=img;
    }
}

const carrito=[];

//atributos de alfajor
const sem=new Alfajor("SEMILLA x9uds $1500", 1500, "./assets/sem.png");
const ddl=new Alfajor("SUPER DULCE DE LECHE x9uds $2000", 2000, "./assets/ddl.png");
const choc=new Alfajor("CHOCOLATE NEGRO x12uds $2200", 2200, "./assets/choc.png");
const veg=new Alfajor("VEGANO 70% CACAO x9uds $2300", 2300, "./assets/vegano.png");
const mix=new Alfajor("MIXTOS x12uds $2350", 2350, "./assets/mix.png");


 // Havanna
 const itemsHavanna = [sem, ddl, choc,veg, mix];

//CUPON

let cupon = 6500;

//elementos
const elementoCupon = document.querySelector("#cupon span");
const elementoCarrito = document.querySelector("#carrito");
elementoCupon.innerText = cupon;


const btnComprarSem = document.querySelector("#btnComprarSem");
const btnComprarDdl = document.querySelector("#btnComprarDdl");
const btnComprarChoc = document.querySelector("#btnComprarChoc");
const btnComprarVeg = document.querySelector("#btnComprarVeg");
const btnComprarMix = document.querySelector("#btnComprarMix");

   const botones = document.querySelectorAll(".boton");
  
   // Recorro todos los botones
   for (const boton of botones) {
    boton.addEventListener("click", function (event) {
      let alfajor = itemsHavanna.find((alfajor) => alfajor.nombre == boton.innerText);
      // Muevo la verificación del precio aquí, dentro del evento de clic del botón
      if (cupon - alfajor.precio <= 0) {
        alert("No tienes suficiente creditos para comprar " + alfajor.nombre + ".");
      } else {
        comprar(alfajor);
      }
    });
  }
  
  // Función encargada de agregar items a la mochila
  function comprar(alfajor) {
    if (cupon - alfajor.precio <= 0) {
      alert("No ténes suficiente oro para comprar " + alfajor.nombre + ".");
    } else if (carrito.length > 5) {
      alert("No ténes más espacio en el inventario.");
    } else {
        //Agrego item a carrito si es que me alcanza
      carrito.push(alfajor);
      cupon = cupon - alfajor.precio; // Actualizo el precio
      actualizarHTML(); // Actualizo el HTML
    }
  }

    // Función encargada de quitar itiems del carrito
    function vender(indice) {
        const alfajor = carrito[indice];
        cupon = cupon + alfajor.precio;
        // Con el índice uso splice y lo borro del array
        carrito.splice(indice, 1);
        actualizarHTML(); 
    }
      

function actualizarHTML() {
    elementoCarrito.innerHTML = "";
    for (const alfajor of carrito) {
      let indiceAlfajor = carrito.indexOf(alfajor);
      let elementoAlfajor = `
        <li class="item" onclick="vender(${indiceAlfajor})">
            <img src="${alfajor.img}" />
        </li>`;
      elementoCarrito.innerHTML += elementoAlfajor;
    }
    // Actualioz el cupon
    elementoCupon.innerText = cupon;
  }
  
  // ...

// ...

// ...

// Función para simular la compra y vaciar carrito
function simularCompra() {
  if (carrito.length > 0) {
    alert("¡Compra realizada!");

    while (carrito.length > 0) {
      carrito.pop(); // Eliminar el último elemento del carrito
    }

    // Actualizar el HTML
    actualizarHTML();
  }
}

