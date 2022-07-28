const totalCarrito = localStorage.getItem("totalCarrito");
document.getElementById("cart-total").innerHTML = totalCarrito;

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
            <p>$${producto.price}</p>
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

        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);

        // document.getElementById("cart-total").innerHTML = carrito.length + Number(totalCarrito) + "- $"+total;
        document.getElementById("cart-total").innerHTML = `${carrito.length + Number(totalCarrito)}  - $${total}`;
        localStorage.setItem("totalCarrito", carrito.length)
    })
});





// document.getElementById("seccion-card").innerHTML = cards;