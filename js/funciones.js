
const mostrarProductos = () => {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
                <img src="${producto.img}" />
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <button id="${producto.id}" class="agregar">Agregar al carrito</button>
            </div>
        `;
    });
}


const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
    }
}


const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre} \t $${producto.precio}</p>
        `;
    });
}