// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    guardarCarrito();
    alert(`${nombre} añadido al carrito`);
}

// Guardar en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Mostrar carrito
document.getElementById("verCarrito").addEventListener("click", () => {
    const modal = document.getElementById("carritoModal");
    const lista = document.getElementById("listaCarrito");
    const totalTxt = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        total += item.precio;
    });

    totalTxt.textContent = "Total: $" + total;
    modal.style.display = "flex";
});

// Cerrar carrito
document.getElementById("cerrarCarrito").addEventListener("click", () => {
    document.getElementById("carritoModal").style.display = "none";
});

// Buscar productos
document.getElementById("buscar").addEventListener("keyup", e => {
    let filtro = e.target.value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        let nombre = producto.querySelector("h3").textContent.toLowerCase();
        producto.style.display = nombre.includes(filtro) ? "block" : "none";
    });
});
