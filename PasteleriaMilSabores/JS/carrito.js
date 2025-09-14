document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotalElement = document.getElementById('cart-subtotal');
    const cartItemCountElement = document.getElementById('cart-item-count');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCountHeader = document.getElementById('cart-count-header');

    // Cargar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Renderizar los productos del carrito
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            checkoutBtn.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
            checkoutBtn.disabled = false;
            
            cart.forEach(item => {
                const productElement = document.createElement('div');
                productElement.classList.add('cart-item');
                productElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>Precio: $${item.price.toLocaleString('es-CL')} CLP</p>
                        <div class="quantity-controls">
                            <button class="remove-one-btn" data-name="${item.name}">-</button>
                            <span>${item.quantity}</span>
                            <button class="add-one-btn" data-name="${item.name}">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" data-name="${item.name}">Eliminar</button>
                `;
                cartItemsContainer.appendChild(productElement);

                subtotal += item.price * item.quantity;
                totalItems += item.quantity;
            });
        }
        
        cartSubtotalElement.innerText = `$${subtotal.toLocaleString('es-CL')} CLP`;
        cartItemCountElement.innerText = totalItems;
        cartCountHeader.innerText = totalItems;
    }

    // Eventos para manipular cantidades y eliminar productos
    cartItemsContainer.addEventListener('click', (e) => {
        const productName = e.target.dataset.name;

        if (e.target.classList.contains('add-one-btn')) {
            const itemIndex = cart.findIndex(item => item.name === productName);
            if (itemIndex !== -1) {
                cart[itemIndex].quantity++;
            }
        } else if (e.target.classList.contains('remove-one-btn')) {
            const itemIndex = cart.findIndex(item => item.name === productName);
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                } else {
                    // Si la cantidad es 1, eliminar el producto del carrito
                    cart.splice(itemIndex, 1);
                }
            }
        } else if (e.target.classList.contains('remove-btn')) {
            const itemIndex = cart.findIndex(item => item.name === productName);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
            }
        }

        // Guardar cambios en localStorage y re-renderizar
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });

    // Llamar a la función para mostrar el carrito al cargar la página
    renderCart();
});