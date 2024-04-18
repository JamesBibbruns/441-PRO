document.addEventListener('DOMContentLoaded', function() {
  // Initialize an empty cart array
  let cart623 = [];

  // Function to add or update an item in the cart
  function addToCart623(item, quantity) {
    const existingItem = cart623.find(c => c.name === item.name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart623.push({ name: item.name, price: item.price, quantity: quantity });
    }
    updateCart623();
  }

  // Function to remove an item from the cart
  function removeFromCart623(itemName) {
    cart623 = cart623.filter(item => item.name !== itemName);
    updateCart623();
  }

  // Function to get the price of an item
  function getPrice623(itemName) {
    const prices = {
      'Course 1': 10,
      'Course 2': 15,
      'Course 3': 20,
      'Course 4': 50,
      'Course 5': 85
    };
    return prices[itemName];
  }

  // Function to update the cart display and calculate totals
  function updateCart623() {
    const cartTableBody = document.querySelector('.shopping-cart table tbody');
    cartTableBody.innerHTML = ''; // Clear the table body

    let total = 0;
    cart623.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;

      const newRow = cartTableBody.insertRow();
      newRow.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
        <td>$${subtotal.toFixed(2)}</td>
        <td><button class="button remove">Remove</button></td>
      `;
    });

    document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
    attachRemoveListeners623(); // Reattach remove button event listeners after update
  }

  // Function to attach event listeners to remove buttons
  function attachRemoveListeners623() {
    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', function() {
        const tr = this.closest('tr');
        const itemName = tr.querySelector('td:first-child').textContent;
        removeFromCart623(itemName);
      });
    });
  }

  // Event listeners for add to cart buttons
  document.querySelectorAll('.cart-items button.add').forEach(button => {
    button.addEventListener('click', function() {
      const tr = this.closest('tr');
      const itemName = tr.querySelector('td:first-child').textContent;
      const quantity = tr.querySelector('.quantity-input').value;
      addToCart623({ name: itemName, price: getPrice623(itemName) }, parseInt(quantity, 10) || 1);
    });
  });

  // Event listeners for increment and decrement buttons
  document.querySelectorAll('.increment').forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling;
      input.value = parseInt(input.value, 10) + 1;
      updateCart623();
    });
  });

  document.querySelectorAll('.decrement').forEach(button => {
    button.addEventListener('click', function() {
      const input = this.nextElementSibling;
      input.value = Math.max(0, parseInt(input.value, 10) - 1); // Ensure quantity doesn't go below 0
      updateCart623();
    });
  });

  // Event listener for the clear cart button
  document.querySelector('.button.Clear').addEventListener('click', () => {
    cart623 = [];
    updateCart623();
  });

  // Event listener for the checkout button
  document.querySelector('.button.Checkout').addEventListener('click', () => {
    if (!window.confirm('Are you sure you want to checkout?')) return;
    const total = calculateTotal623(cart623);
    alert('Your total is $' + total.toFixed(2));
    cart623 = [];
    updateCart623();
    alert('Checkout successful! Your cart has been cleared.');
  });

  // Function to calculate the total of items in the cart
  function calculateTotal623(cartItems) {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  // Initial call to update the cart display
  updateCart623();
});
