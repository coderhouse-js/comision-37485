let nombreDelCurso = "toto";

function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if(tenemosStock === 'Tenemos stock'){
        console.log('Agregas el producto al carrito: ' + producto);
    }else{
        console.log('Lo siento, subio mucho el dolar :(');
    }
}

function validarStock(stockDelProducto) {
    if(stockDelProducto > 0){
        return 'Tenemos stock';
    }else{
        return 'No tenemos stock';
    }
}

agregarAlCarrito('Zapatillas de toto', 0);