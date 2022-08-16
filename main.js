const traerProductosBaseDeDatos = () =>{
  return new Promise((resolve, reject) => {
    //...
    setTimeout(() => {
      // Simulacion de base de datos
      const productos = [
        
      ]
      
      if(productos.length > 0){
        resolve(productos)
      }else {
        reject("Algo falló. Estamos trabajando para mejorar tu servicio")
      }
    }, 2000)
  })
}

// traerProductosBaseDeDatos().then((respuesta) => {
//   console.log(respuesta)
//   document.getElementById('seccion-card').innerHTML = ""

//   let acumulador = ``;
//   respuesta.forEach((producto) => {
//     acumulador += `<div class="bg-dark card text-white mx-5 my-5">${producto.title}</div>`
//   })
//   document.getElementById('seccion-card').innerHTML = acumulador
// }).catch((toto) => {
//   document.getElementById('seccion-card').innerHTML = ''
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Something went wrong!',
//     footer: '<a href="">Why do I have this issue?</a>'
//   })
// })






const buscarUnProductoEnMeli = () => {
  fetch('productos.json')
    .then((response) => response.json())
    .then(informacion => {
      let acumulador = ``;
      informacion.forEach((producto) => {
        console.log(producto)
        acumulador += `<div class="card">
          <h2>${producto.title}</h2>
          <h2>$${producto.price}</h2>
        </div>`
      })

      document.getElementById('seccion-card').innerHTML = acumulador;
    })
}

buscarUnProductoEnMeli();