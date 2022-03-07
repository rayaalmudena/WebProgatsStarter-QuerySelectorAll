console.log("He cargado el fichero bucles.js");

function anadirGatoFooter() {
    let gatito = document.createElement("img");
    gatito.style.width = "50px";
    gatito.src = "./img/logo.webp";

    let footer = document.querySelector(".footer");
    footer.appendChild(gatito);
}

// Crear una función que dado un color por parémtro, nos cambia el color del body a dicho color
function cambiarColorBody(color) {
    document.body.style.backgroundColor=color;
}

cambiarColorBody("brown");
//cambiarColorBody("#FF0000"); // cambiar el color a rojo

function cambiarLema(lema) {
    document.querySelector(".hero p").innerHTML=lema;
}

cambiarLema("Cat lives Matter!");


function añadirGatos(numeroDeGatos) {
     for (let i = 0; i < numeroDeGatos; i++) {
       console.log("He entrado en el bucle!");
       anadirGatoFooter();
     }
}
    
    
  añadirGatos(60) // añade 2 gatos al footer

  function cambiarBordeElemento(elemento, grosorBorde, color) {
      elemento.style.border = `${grosorBorde}px solid ${color}`;
  }

  cambiarBordeElemento(document.querySelector("footer"),10,"pink");
  cambiarBordeElemento(document.querySelector(".header--logo"),1,"orange");


// https://lenguajejs.com/javascript/dom/crear-elementos-dom/

// Voy a añadir un <p> al final del body
// let despedida = document.createElement("p");
// despedida.textContent = "¡Gracias por visitar nuestra Web!";
// despedida.style.color = "brown";

// let header = document.querySelector("header");
// header.appendChild(despedida);

// Voy a crear numGatos imagénes; y las voy añadir como hijos del footer
// let gatito = document.createElement("img");
// gatito.style.width = "50px";
// gatito.src = "./img/logo.webp";

// let footer = document.querySelector(".footer");

// Cómo haríamos un for para ejecutar este código tantas veces como numGatos
// console.log("numGatos: ", numGatos);
// for (let i = 0; i < numGatos; i++) {
//     console.log("He entrado en el bucle!");
//     anadirGatoFooter();
// }



// Ejercicios Bucle y condicionales

// Ejercicio1: Si el número de gatos es 0; cambiar el texto por “No hay gatos por adoptar, felicidades!”


// Ejercicio2: Fíjate que ahora en el código hay 3 variables boleanas. Muestra cada uno de los botones de “Contactar”, solo en función de si cada una de las chicas está disponible. Es decir, en esta configuración, el botón de "Verónica" debería desaparecer. Pista: piensa que propiedad de .style tienes que modificar para ocultar, mediante CSS, el botón de la chica correspoiente.


function ocultarMiembro(nombre) {
    // // 1. Recuperar del DOM la tarjeta de la chica en cuestión
    // let persona = document.querySelector(".card__"+ nombre);
    // // 2. Establecer la propiedad style.
    // if(persona){
    //     persona.style.display="none";
    // }else{
    //     console.log("No hay una persona con ese nombre");
    // }
    document.querySelector(".card__"+ nombre).style.display="none";
}

ocultarMiembro("patricia"); // debemos ocultar a Patricia
ocultarMiembro("edurne");

// let patriciaDisponible = true;
// let veronicaDisponible = false;
// let edurneDisponible = true;