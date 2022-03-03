
// Me gustaría conocer el nombre de todas las chicas que forman el equipo de Progats. Muéstrame sus nombres por consola

let nombreChicas = document.querySelectorAll(".members--name"); // [nodo_patricia, nodo_veronica, nodo_edurne]

// quiero crear un string más grande con el nombre de todas las chicas
let resultado = "";

for (let i = 0; i < nombreChicas.length; i++) {
    resultado = resultado + " " + nombreChicas[i].textContent;
}

console.log(resultado);

// Me gustaría añadir un borde rojo a verónica. Vamos a añadir dinámicamente la clase "borde-rojo" a la tarejta de verónica

// 1. Seleccionar verónica
// 2. Utilizar el método add() para añadir el nombre de la clase

let veronica = document.querySelector(".card__veronica")
console.log(veronica);
veronica.classList.add("borde-rojo");
veronica.classList.toggle("borde-rojo");
veronica.classList.toggle("borde-rojo");


// Vamos a iterar por el nombre de todas las chicas y vamos a mostrar su nombre por consola

let allNames = document.querySelectorAll("h3");

allNames.forEach(nombre => {
    //console.log(nombre.textContent);
})

// Ejercicio 1. Usa querySelector para obtener los precios de todos los servicios de los gatos. Múestralos por consola. Por consola debería mostrarse  0, 10, 50, 30.  Piensa cual es el selector adecuado para seleccionar todos los precios.
let precios= document.querySelectorAll("td.price");
for (let index = 0; index < precios.length; index++) {
    //console.log(+precios[index].textContent);    
}

// Ejercicio 2: Suma todos los valores de los precios y muéstralos por consola.

let totalPrice = 0; // Al final del bucle y de usar correctamente querySelectorAll debería ser 90

for (let index = 0; index < precios.length; index++) {
    totalPrice= totalPrice + (+precios[index].textContent);    
}
console.log(totalPrice);

// Ejercicio 3: Tenemos un array que proviene de bases de datos, donde nos informa de los miembros que actualmente estan inactivos. Por ejemplo el siguiente array ["patricia", "veronica"] nos informa que Patricia y Verónica deberían aparecer como inactivas. Para ello, añade a cada una de las trabajadoras inactivas la clase "members__disabled"

let inactiveMembers = ["patricia", "veronica"];
for (let index = 0; index < inactiveMembers.length; index++) {
    document.querySelector(".card__"+inactiveMembers[index]).classList.add("members__disabled");
    console.log(inactive);    
}