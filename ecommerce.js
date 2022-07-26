const carrito = []
let productos;

const API_URL = 'https://api.mercadolibre.com/';
const endpointProductos = 'sites/MLA/search';

const buscarProductosEnMELI = (productoAbuscar) => {
    fetch(API_URL+endpointProductos+'?q='+productoAbuscar)
    .then((response) => response.json())
    .then((data) => {
        productos = data.results;
        console.log(productos);
        generarCardsEnElHTML(productos);
    })
}


const traerDatosBaseDeDatos = () => {
    fetch(API_URL+endpointProductos+'?nickname=TOTO_VENTA')
    .then((response) => response.json())
    .then((data) => {
        productos = data.results;
        console.log(productos);
        generarCardsEnElHTML(productos);
    })
}

const generarCardsEnElHTML = (arrayDeProductos) => {
    let cards = ``;
    arrayDeProductos.forEach((producto) => {
        cards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.thumbnail}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">
                    </h5>
                    <!-- Product price-->
                    $40.00 - $80.00
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" onclick="agregarAlCarrito('Fancy Product')" href="${producto.permalink}">
                        Agregame!!
                    </a>
                </div>
            </div>
        </div>
    </div>`
    });
    
    document.getElementById("seccion-card").innerHTML = cards;
}

// traerDatosBaseDeDatos();
buscarProductosEnMELI('play5');


const traerComponente = () => {
    fetch("https://www.ciudad.com.ar/espectaculos/barby-silenzi-anuncio-reconciliacion-polaco-afirmo-explosiva-volvimos-hay-mucha_200316")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
}

traerComponente();