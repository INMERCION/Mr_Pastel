document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-agregar, .producto button');
    const cartCountHeader = document.getElementById('cart-count-header');

    // Cargar el carrito desde localStorage al iniciar
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    // Añadir eventos a los botones de "Añadir al carrito"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productElement = e.target.closest('.producto, article');
            
            if (productElement) {
                const productName = productElement.querySelector('h3').innerText;
                const productPriceText = productElement.querySelector('p').innerText;
                const productPrice = parseFloat(productPriceText.replace(/\$|\.|\sCLP/g, ''));
                const productImage = productElement.querySelector('img').src;

                const existingProductIndex = cart.findIndex(item => item.name === productName);

                if (existingProductIndex !== -1) {
                    // El producto ya existe, solo incrementa la cantidad
                    cart[existingProductIndex].quantity++;
                } else {
                    // El producto no existe, agrégalo al carrito
                    cart.push({
                        name: productName,
                        price: productPrice,
                        image: productImage,
                        quantity: 1
                    });
                }
                
                // Guardar el carrito actualizado en localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                alert(`${productName} ha sido añadido al carrito.`);
            }
        });
    });

    // Función para actualizar el contador de productos en el encabezado
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountHeader) {
            cartCountHeader.innerText = totalItems;
        }
    }
});

