const carrito = [];

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
}

// Deberia llamarlo el usuario al agregar un producto al carrito
agregarAlCarrito({id: 9123, name: "Gorra adidas", price: 900})
agregarAlCarrito({id: 3727, name: "Zapas adidas", price: 200})
agregarAlCarrito({id: 8818, name: "Remera adidas", price: 100})


function borrarProductoDelCarrito(idDelProducto){
    const index = carrito.findIndex((producto) => producto.id === idDelProducto);

    if(index !== -1) {
        carrito.splice(index, 1);
    }

    console.log(carrito);
}

// Deberia llamarlo el usuario al hacer click ene l boton de borrar
borrarProductoDelCarrito(9123);
borrarProductoDelCarrito(8818);
borrarProductoDelCarrito(3);