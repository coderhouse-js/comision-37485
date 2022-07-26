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
        <a class="boton" id="${idButton}">Añadir Al Carrito</a>
    </div>`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', () => {
        alert("hola :)");   
    })
});





// document.getElementById("seccion-card").innerHTML = cards;