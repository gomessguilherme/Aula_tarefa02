
let quantity = 1; 

function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
    }
}

function updateQuantityDisplay() {
    const quantityElement = document.getElementById('quantity');
    quantityElement.textContent = quantity;
}


updateQuantityDisplay();


