document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBody = document.querySelector('.cart-items tbody');
    const totalDisplay = document.querySelector('.cart-total p');

    // Debugging log
    console.log(`Found ${addToCartButtons.length} 'Add to Cart' buttons`);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`Adding item: ${this.dataset.name} Price: ${this.dataset.price}`);
            addItemToCart(this.dataset.name, this.dataset.price);
            updateTotal();
        });
    });

    function addItemToCart(name, price) {
        const cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${name}</td>
            <td>$${price}</td>
            <td><button class="btn remove-item">Remove</button></td>
        `;
        cartBody.appendChild(cartRow);

        cartRow.querySelector('.remove-item').addEventListener('click', function() {
            console.log(`Removing item: ${name}`);
            removeItemFromCart(cartRow);
        });
    }

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-items tbody tr').forEach(row => {
            const price = parseFloat(row.cells[1].textContent.replace('$', ''));
            total += price;
        });
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }

    function removeItemFromCart(row) {
        row.remove();
        updateTotal();
    }
});






