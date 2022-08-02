//*
/*
/*  Variables 8.5
/*  Condicionales: 7
/*  Bucles: 5
/*  Funciones: 5
/*  Objetos: 7
/*  Array: 9
*/

// const edad = 18;

// if(edad < 13){
//     console.log("Anda a la matine");
// } else if(edad < 18) {
//     console.log("Sos menor de edad, tenes que aguantar unos años");
// } else {
//     console.log("Sos mayor de edad :)");
// }

// const navegacionCategorias = ["Zapatillas", "Remeras", "Ojotas", "Gorros"];

// for(let desde = 0; desde < navegacionCategorias.length; desde++){
//     document.getElementById("navagacion-categorias").innerHTML += `<li class="nav-item">
//         <a class="nav-link active filtrar-categoria" aria-current="page" data-categoria="${navegacionCategorias[desde]}">
//             ${navegacionCategorias[desde]}
//         </a>
//     </li>`
// }

// navegacionCategorias.forEach((categoria) => {
//     document.getElementById("navegacion-categorias").innerHTML += `<li class="nav-item">
//         <a class="nav-link active filtrar-categoria" aria-current="page" data-categoria="${categoria}">
//             ${categoria}
//         </a>
//     </li>`
// })


// let acumulacionNotas = 10;

// calcularNuevaNota(3);
// calcularNuevaNota(3);
// calcularNuevaNota(3);
// calcularNuevaNota(3);

// acumulacionNotas = acumulacionNotas + 7;
// acumulacionNotas = acumulacionNotas + 9;
// acumulacionNotas = acumulacionNotas + 2;
// acumulacionNotas = acumulacionNotas + 2;

// console.log(acumulacionNotas)

// function calcularNuevaNota(nota){
//     acumulacionNotas = acumulacionNotas + nota;
// }

// const carrito = [];

// function agregarAlCarrito(){
//     carrito.push({id:1, title:'gorra nike', price: 91234})
// }
// const miAuto = "Audi tt"
// const persona = { nombre: 'Toto', edad: 50, monotributo:"h", autos: ['ferrar','lambo','buggatti', miAuto]};
// console.log(persona.nombre);
// persona.avion = "flybondi"



// const listado = ['pan rallado', "arroz", "fideos",];

// listado.length; // 3 
// listado.push("leche");
// listado.find((elemento) => elemento === "arroz");
// listado.filter((elemento) => elemento.length > 4)

























const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("cart-total").innerHTML = carrito.length;

function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div>
            <p>${producto.id}
            - ${producto.title}
            - <img src="${producto.img}" style="width:30px">
            - ${producto.price}
            - <button>ver producto</button>
            </div>`
    })
}












const productos = [
    {
        id:1,
        title:"Zapatilla nike",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacNyDWaDPl56kGUCdal-ifjIfArZWaSmnLw&usqp=CAU",
        price: 34299,
        category: 'Zapatillas'
    },
    {
        id:2,
        title:"Remera puma",
        img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd9e43888/products/PU_851787-02/PU_851787-02-1.JPG",
        price: 3200,
        category: 'Remeras'
    },
    {
        id:3,
        title:"Zapatilla Adidas",
        img: "https://ferreira.vteximg.com.br/arquivos/ids/342387-588-588/ad_ef0102.jpg?v=637213686632400000",
        price: 27910,
        category: 'Zapatillas'
    },
];

for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarProductosPorCategoria(categoria)
    }
}

function filtrarProductosPorCategoria(categoria) {
    document.getElementById("seccion-card").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.category === categoria);

    productosFiltrados.forEach((producto) => {
        const idButton = `add-cart${producto.id}` 
        document.getElementById("seccion-card").innerHTML += `<div class="card">
            <div class="precio">
                <p>$${producto.price}</p>
            </div>
            <img src="${producto.img}">
            <h4>${producto.title}</h4>
            <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
        </div>`;
    })
}


productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById("seccion-card").innerHTML += `<div class="card">
        <div class="precio">
            <p>$${producto.price}</p>
        </div>
        <img src="${producto.img}">
        <h4>${producto.title}</h4>
        
        <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>

        <a class="boton" onclick="verProducto(${producto.id})">
            Ver producto
        </a>
    </div>`;
})



function verProducto(id){
    const indiceProducto = productos.findIndex((producto) => producto.id === id);
    localStorage.setItem('verProducto', JSON.stringify(productos[indiceProducto]));
    location.href = "producto.html";
}














productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).onclick = () => {
        carrito.push(producto);
        document.getElementById("cart-total").innerHTML = carrito.length;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(carrito);
    }
});