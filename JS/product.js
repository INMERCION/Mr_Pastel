
    // 1. Productos en un arreglo
    const productos = [

  {id: 1, nombre: "Torta Cuadrada de Chocolate", precio: 45000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/tarta-chocolate-ganache.jpg"},
  {id: 2, nombre: "Torta Cuadrada de Frutas", precio: 50000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta-de-frutas.jpg"},
  {id: 3, nombre: "Torta Circular de Vainilla", precio: 40000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta de vainilla.jpg"},
  {id: 4, nombre: "Torta Circular de Manjar", precio: 42000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta-manjar-nuez.jpg"},
  {id: 5, nombre: "Mousse de Chocolate", precio: 5000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/mousse-chocolate.jpg"},
  {id: 6, nombre: "Tiramisú Clásico", precio: 6000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/tiramisu.jpg"},
  {id: 7, nombre: "Torta Sin Azúcar de Naranja", precio: 48000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta-naranja.jpg"},
  {id: 8, nombre: "Postre Cheesecake Sin Azúcar", precio: 48000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/chesecake.jpg"},
  {id: 9, nombre: "Empanada de Manzana", precio: 3000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/empanadas-manzana.jpg"},
  {id: 10, nombre: "Tarta de Santiago", precio: 6000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/tarta-santiago.jpg"},
  {id: 11, nombre: "Brownie Sin Gluten", precio: 4000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/brownie-sin-gluten.jpg"},
  {id: 12, nombre: "Pan Sin Gluten", precio: 3500, imagen: "/PasteleriaMilSabores/images/imagenes_producto/pan-sin-gluten.jpg"},
  {id: 13, nombre: "Torta Vegana de Chocolate", precio: 50000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/chocolate-vegano.jpg"},
  {id: 14, nombre: "Galletas Veganas de Avena", precio: 4500, imagen: "/PasteleriaMilSabores/images/imagenes_producto/galletas-avena.jpg"},
  {id: 15, nombre: "Torta Especial de Cumpleaños", precio: 55000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/pastel-cumpleanos.jpg"},
  {id: 16, nombre: "Torta Especial de Boda", precio: 60000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/pastel-boda.jpg"},
  {id: 17, nombre: "Torta Especial de Aniversario", precio: 58000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/pastel-aniversario.jpg"},
  {id: 18, nombre: "Torta Especial para Eventos Empresariales", precio: 65000, imagen: "/PasteleriaMilSabores/images/imagenes_producto/pastel-empresa.jpg"}

    ];

    // 2. Obtener el id desde la URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // 3. Buscar el producto
    const producto = productos.find(p => p.id === id);

    // 4. Mostrar en el HTML
    if (producto) {
      document.getElementById("detalle-producto").innerHTML = `
        <article class="detalle-contenedor">
  <img src="${producto.imagen}" alt="${producto.nombre}">
  <div class="detalle-info">
    <h2>${producto.nombre}</h2>
    <p class="precio">$${producto.precio.toLocaleString()} CLP</p>
    
    <label for="tamano">Tamaño:</label>
    <select id="tamano">
      <option value="pequeño">Pequeño</option>
      <option value="mediano">Mediano</option>
      <option value="grande">Grande</option>
    </select>

    <br><br>

    <label for="nota">Nota personalizada:</label><br>
    <textarea id="nota" rows="4" cols="40" placeholder="Escribe tu mensaje..."></textarea>

    <br><br>

    <button onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
  </div>
</article>

      `;
    } else {
      document.getElementById("detalle-producto").innerHTML = "<p>Producto no encontrado.</p>";
    }

    // 5. Función para añadir al carrito
    function agregarAlCarrito(id) {
      const tamano = document.getElementById("tamano").value;
      const nota = document.getElementById("nota").value;
      alert(`Agregado al carrito: ${producto.nombre}\nTamaño: ${tamano}\nNota: ${nota}`);
      // Aquí podrías guardar en localStorage o enviarlo al backend
    }
