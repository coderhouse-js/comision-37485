const carrito = [];

const productos = [
    {
        id:1,
        title:"Zapatilla nike",
        img: "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg",
        price: 900
    },
    {
        id:2,
        title:"Zapatilla Jagguar",
        img: "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg",
        price: 900
    },
    {
        id:3,
        title:"Zapatilla Adidas",
        img: "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg",
        price: 900
    },
];

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById("seccion-card").innerHTML += `<div class="card">
        <div class="precio">
            <p>$1500</p>
        </div>
        <img src="${producto.img}">
        <h4>${producto.title}</h4>
        <a class="boton" id="${idButton}" data-id="${producto.id}">Añadir Al Carrito</a>
    </div>`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        // const nodo = event.target;
        // const idProducto = nodo.getAttribute("data-id")
        // const indiceProducto = productos.findIndex(producto => producto.id == idProducto);
        // const producto = productos[indiceProducto];
        // carrito.push(producto);
        // console.log(carrito);
    })
});





// document.getElementById("seccion-card").innerHTML = cards;