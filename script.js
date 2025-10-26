// BASE DE DATOS DE PRODUCTOS

const productos = {
    controles: [
        {
            nombre: "Pack de Llaves",
            alto: 30000,
            medio: 28000,
            bajo: 27348,
            financiado: 30000
        },
        {
            nombre: "Mando a Distancia",
            alto: 180000,
            medio: 170000,
            bajo: 164095,
            financiado: 180000
        },
        {
            nombre: "Mando a Distancia DUO",
            alto: 270000,
            medio: 260000,
            bajo: 253341,
            financiado: 270000
        },
        {
            nombre: "Pulsador SOS",
            alto: 145000,
            medio: 140000,
            bajo: 135307,
            financiado: 145000
        },
        {
            nombre: "Lector de Llaves",
            alto: 145000,
            medio: 138000,
            bajo: 133608,
            financiado: 145000
        }
    ],

    sensores: [
        {
            nombre: "Perimetral",
            alto: 365000,
            medio: 350000,
            bajo: 344673,
            financiado: 365000
        },
        {
            nombre: "Fotodetector",
            alto: 210000,
            medio: 200000,
            bajo: 195763,
            financiado: 210000
        },
        {
            nombre: "Shock Sensor",
            alto: 105000,
            medio: 100000,
            bajo: 97880,
            financiado: 105000
        },
        {
            nombre: "Detector Humo",
            alto: 380000,
            medio: 370000,
            bajo: 364121,
            financiado: 380000
        }
    ],

    camaras: [
        {
            nombre: "Arlo Interior",
            alto: 230000,
            medio: 220000,
            bajo: 215916,
            financiado: 230000
        },
        {
            nombre: "Arlo Exterior",
            alto: 275000,
            medio: 265000,
            bajo: 257659,
            financiado: 275000
        },
        {
            nombre: "Hub Arlo",
            alto: 155000,
            medio: 148000,
            bajo: 143944,
            financiado: 155000
        }
    ],

    otros: [
        {
            nombre: "Sirena",
            alto: 140000,
            medio: 135000,
            bajo: 130988,
            financiado: 140000
        },
        {
            nombre: "ZeroVision",
            alto: 450000,
            medio: 435000,
            bajo: 427514,
            financiado: 450000
        },
        {
            nombre: "ZeroVision DUO",
            alto: 760000,
            medio: 740000,
            bajo: 729798,
            financiado: 760000
        }
    ],

    packs: [
        {
            nombre: "Pack Detector Perimetral",
            alto: 585000,
            medio: 570000,
            bajo: 564262,
            financiado: 585000
        },
        {
            nombre: "Pack Fotodetector x2",
            alto: 315000,
            medio: 305000,
            bajo: 295085,
            financiado: 315000
        },
        {
            nombre: "Pack Fotodetector x3",
            alto: 550000,
            medio: 535000,
            bajo: 526836,
            financiado: 550000
        },
        {
            nombre: "Pack Fotodetector x4",
            alto: 740000,
            medio: 720000,
            bajo: 711085,
            financiado: 740000
        },
        {
            nombre: "Pack Shock Sensor",
            alto: 155000,
            medio: 148000,
            bajo: 143944,
            financiado: 155000
        },
        {
            nombre: "Shock Sensor x3",
            alto: 255000,
            medio: 245000,
            bajo: 238947,
            financiado: 255000
        },
        {
            nombre: "Shock Sensor x4",
            alto: 330000,
            medio: 320000,
            bajo: 313797,
            financiado: 330000
        },
        {
            nombre: "Arlo Interior DUO",
            alto: 415000,
            medio: 400000,
            bajo: 392968,
            financiado: 415000
        },
        {
            nombre: "Arlo Interior x3",
            alto: 590000,
            medio: 575000,
            bajo: 562974,
            financiado: 590000
        },
        {
            nombre: "Arlo Exterior DUO",
            alto: 485000,
            medio: 470000,
            bajo: 460621,
            financiado: 485000
        },
        {
            nombre: "Arlo Exterior x3",
            alto: 645000,
            medio: 628000,
            bajo: 616404,
            financiado: 645000
        }
    ]
};

// Información de categorías
const categorias = {
    controles: { titulo: "📱 Controles y Acceso" },
    sensores: { titulo: "🚨 Sensores y Detectores" },
    camaras: { titulo: "📹 Cámaras" },
    otros: { titulo: "🔊 Otros Dispositivos" },
    packs: { titulo: "📦 Packs Dispositivos" }
};

// Función para formatear precios
function formatPrice(price) {
    return '$' + price.toLocaleString('es-AR');
}

// Función para crear la tarjeta de cada producto
function createProductCard(producto) {
    const cuota3 = Math.round(producto.financiado / 3);
    const cuota6 = Math.round(producto.financiado / 6);

    return `
        <div class="product-card">
            <div class="product-name">${producto.nombre}</div>
            <div class="price-grid">
                <div class="price-row alto">
                    <span class="price-label">ALTO</span>
                    <span class="price-value">${formatPrice(producto.alto)}</span>
                </div>
                <div class="price-row medio">
                    <span class="price-label">MEDIO</span>
                    <span class="price-value">${formatPrice(producto.medio)}</span>
                </div>
                <div class="price-row bajo">
                    <span class="price-label">BAJO</span>
                    <span class="price-value">${formatPrice(producto.bajo)}</span>
                </div>
                <div class="price-row financiado">
                    <span class="price-label">FINANCIADO</span>
                    <span class="price-value">${formatPrice(producto.financiado)}</span>
                </div>
                <div class="cuotas-info">
                    <div class="cuota-option">→ 3 cuotas: ${formatPrice(cuota3)} c/u</div>
                    <div class="cuota-option">→ 6 cuotas: ${formatPrice(cuota6)} c/u</div>
                </div>
            </div>
            <div class="payment-note">
                Alto/Medio/Bajo: TC o Transferencia<br>
                Financiado: Sin interés
            </div>
        </div>
    `;
}

// Función principal para renderizar el catálogo
function renderCatalog(filtroCategoria = 'all', busqueda = '') {
    const content = document.getElementById('catalogContent');
    const noResults = document.getElementById('noResults');
    let html = '';
    let hasResults = false;

    // Recorrer cada categoría
    for (const [categoria, items] of Object.entries(productos)) {
        // Si hay filtro de categoría, solo mostrar esa
        if (filtroCategoria !== 'all' && filtroCategoria !== categoria) continue;

        // Filtrar productos por búsqueda
        const itemsFiltrados = items.filter(producto => 
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );

        // Si no hay productos en esta categoría, continuar
        if (itemsFiltrados.length === 0) continue;

        hasResults = true;
        html += `
            <div class="category-section">
                <h2 class="category-title">${categorias[categoria].titulo}</h2>
                <div class="products-grid">
                    ${itemsFiltrados.map(createProductCard).join('')}
                </div>
            </div>
        `;
    }

    content.innerHTML = html;
    noResults.style.display = hasResults ? 'none' : 'block';
}

// Event listeners para búsqueda y filtros
document.getElementById('searchInput').addEventListener('input', (e) => {
    const categoria = document.getElementById('categoryFilter').value;
    renderCatalog(categoria, e.target.value);
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
    const busqueda = document.getElementById('searchInput').value;
    renderCatalog(e.target.value, busqueda);
});

// Renderizar el catálogo al cargar la página
renderCatalog();
