// CONFIGURACIÓN DEL NÚMERO DE WHATSAPP
const NUMERO_WHATSAPP = '573105282378'; // Colombia

// CATÁLOGO DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: 'Zapatos Oxford',
        descripcion: 'Elegantes zapatos Oxford de cuero genuino. Perfectos para ocasiones formales.',
        precio: '$180.000',
        imagen: 'img/oxford-shoes-6078993_1280.jpg'
    },
    {
        id: 2,
        nombre: 'Reloj Clásico',
        descripcion: 'Reloj de pared clásico con diseño elegante. Ideal para decoración.',
        precio: '$95.000',
        imagen: 'img/primer-plano-de-las-manecillas-numeros-y-marcas-de-hora-de-un-reloj-negro.jpg'
    },
    {
        id: 3,
        nombre: 'Tacones Elegantes',
        descripcion: 'Tacones de moda para cualquier ocasión especial. Diseño moderno y cómodo.',
        precio: '$150.000',
        imagen: 'img/high-heels-2086329_1280.jpg'
    },
    {
        id: 4,
        nombre: 'Camisa Casual',
        descripcion: 'Camisa casual de alta calidad. Perfecta para el día a día.',
        precio: '$85.000',
        imagen: 'img/shirt-8947376_1280.jpg'
    },
    {
        id: 5,
        nombre: 'Ramo de Rosas',
        descripcion: 'Hermoso ramo de rosas frescas. Ideal para regalar en ocasiones especiales.',
        precio: '$65.000',
        imagen: 'img/roses-3418141.jpg'
    },
    {
        id: 6,
        nombre: 'Muñecas Rusas',
        descripcion: 'Auténticas muñecas rusas matrioshka. Artesanía tradicional.',
        precio: '$120.000',
        imagen: 'img/russian-stacking-dolls-3774585.jpg'
    },
    {
        id: 7,
        nombre: 'Zapatos Brogue',
        descripcion: 'Zapatos Brogue de cuero premium. Estilo británico clásico.',
        precio: '$200.000',
        imagen: 'img/brogue-shoes-5983822_1280.jpg'
    },
    {
        id: 8,
        nombre: 'Tenis Deportivos',
        descripcion: 'Tenis deportivos de alto rendimiento. Comodidad y estilo.',
        precio: '$175.000',
        imagen: 'img/tennis-7932067_1280.jpg'
    }
];

/**
 * Crea y renderiza las tarjetas de productos en el DOM
 */
function crearTarjetasProductos() {
    const grid = document.getElementById('productosGrid');

    if (!grid) {
        console.error('No se encontró el elemento con id "productosGrid"');
        return;
    }

    // Limpiar el grid antes de agregar productos
    grid.innerHTML = '';

    // Crear una tarjeta por cada producto
    productos.forEach(producto => {
        const card = crearTarjetaProducto(producto);
        grid.appendChild(card);
    });
}

/**
 * Crea una tarjeta individual de producto
 * @param {Object} producto - Datos del producto
 * @returns {HTMLElement} - Elemento div con la tarjeta del producto
 */
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    card.innerHTML = `
        <img src="${producto.imagen}"
             alt="${producto.nombre}"
             class="producto-imagen"
             onerror="this.src='https://via.placeholder.com/300x300?text=Imagen+no+disponible'">
        <div class="producto-info">
            <div class="producto-nombre">${producto.nombre}</div>
            <div class="producto-descripcion">${producto.descripcion}</div>
            <div class="producto-precio">${producto.precio}</div>
            <button class="btn-comprar" data-nombre="${producto.nombre}" data-precio="${producto.precio}">
                <span class="whatsapp-icon">💬</span>
                Comprar por WhatsApp
            </button>
        </div>
    `;

    // Agregar event listener al botón
    const boton = card.querySelector('.btn-comprar');
    boton.addEventListener('click', () => {
        comprarProducto(producto.nombre, producto.precio);
    });

    return card;
}

/**
 * Redirige a WhatsApp con el mensaje del producto seleccionado
 * @param {string} nombreProducto - Nombre del producto
 * @param {string} precio - Precio del producto
 */
function comprarProducto(nombreProducto, precio) {
    // Crear mensaje personalizado
    const mensaje = `Hola! Estoy interesado en comprar:\n\n*${nombreProducto}*\nPrecio: ${precio}\n\n¿Está disponible?`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crear la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(urlWhatsApp, '_blank');
}

/**
 * Inicializar la tienda cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    crearTarjetasProductos();
});
