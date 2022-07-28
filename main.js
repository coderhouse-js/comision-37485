const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length}  - $${total}`;


function generarCardsCarrito() {
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div>
            <p>${producto.id}
            - ${producto.title}
            - <img src="${producto.img}" style="width:30px">
            - ${producto.price}
            - <button>Sacar del carrito</button>
            </div>`
    })
    
}


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
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cart-elements").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("cart-elements").innerHTML += `<tr>
                <th scope="row">${producto.id}</th>
                <td>${producto.title}</td>
                <td><img src="${producto.img}" style="width:200px"></td>
                <td>${producto.price}</td>
                <td><button>Sacar del carrito</button></td>
            </tr>`
        })
    })
});





// document.getElementById("seccion-card").innerHTML = cards;