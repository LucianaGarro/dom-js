//DOM: Modelo de objetos del Documento
//nodos = etiquetas html

//Plantillas literales: nos van a permitir concatenar datos de una manera más simple.
//Hasta el momento si nosotros queríamos concatenar datos:
let cliente = "Ricky Fort";
let montoCompra = 100000;

let mensaje = cliente + " realizó una compra por $  "  + montoCompra;
console.log(mensaje);

// `` backsticks (alt+96)

let plantillaLiteral = `El cliente ${cliente} realizó una compra por $ ${montoCompra}`;
console.log(plantillaLiteral);

//¿Qué es DOM? Document Object Model = modelos de objetos del documento
//El Dom es una estructura de objetos generada por el navegador la cual representa la página HTML actual. Lo que hace es transformarme el HTML en objetos. 
//Cada etiqueta HTML se transforma para el dom en un NODO, que contiene las mismas propiedades que un objeto. 
//Ventaja: me permite trabajar desde el lado del lenguaje de programación con la estructura html (programación dinámica)
//Con JS vamos a poder acceder a esa estructura para modificarla.

//¿Cómo funciona? 
//En el modelo de objetos del documento, cada etiqueta representa un objeto llamado nodo. 
//Todos estos nodos, son accesible para JS através de un objeto global que denominamos "document"

//A) getElementByID: busca en el html y retorna el ID

const tituloPrincipal2 = document.getElementById("tituloPrincipal");

console.log(tituloPrincipal2);

//B) clases: busca en el html y retorna la classe

const campeones = document.getElementsByClassName ("nombre");
console.log(campeones);

//C) Nombre de las etiquetas: busca en el html y retorna la etiqueta
const meses = document.getElementsByTagName ("li");
console.log(meses);

//D) querySelector: este método nos permite seleccionar nodos con la misma sintaxis que en CSS. SOLAMENTE ME TRAE EL PRIMERO QUE ENCUENTRA
const queryMessi = document.querySelector(".nombre")
console.log(queryMessi);

//E) querySelectorAll 

    const messiNombresAll = document.querySelectorAll(".nombre");
    console.log(messiNombresAll);

//Modificación de nodos

//innerText: me permite acceder al contenido textual de algún elemento del dom.

tituloPrincipal2.innerText = "Modificamos el título de JS";

//InnerHTML: me permite agregar código html en el interior de un nodo. 

const divContenedor2 = document.getElementById("divContenedor");
divContenedor2.innerHTML = `<p> Esto es un párrafo <p>`

divContenedor2.innerHTML = `<div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button> Agregar al carrito </button>
                            </div>`

//ClassName: me permite agregar un nombre de clase: 
//Voy a asociar la clase al nodo del h1

tituloPrincipal2.className = "titulo";

//Agregar Nodos:

const contenedor = document.getElementById("contenedor");
const parrafo = document.createElement("p");
parrafo.innerText = "Primero Argentina...";
parrafo.className = "titulo";
contenedor.appendChild(parrafo);

//Eliminar nodos: remove() elimina el método seleccionado
//  parrafo.remove();

//Creamos un objeto de forma dinámica

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const yerba = new Producto ("Yerba", 250);
const harina = new Producto ("Harina", 300);

const arrayProductos = [yerba, harina];

const contenedorProductos = document.getElementById("contenedorProductos");
arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.innerHTML = `<p> Nombre: ${producto.nombre}</p>
                    <p> Precio: ${producto.precio}</p>
                    <button>Agregar al carrito</button>`
    contenedorProductos.appendChild(div);

})









