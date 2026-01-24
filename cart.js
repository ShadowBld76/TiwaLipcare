// Ensure this is at the top of your cart.js
window.addToCart = function(id) {
  // Use == to match regardless of string or number type
  const product = products.find(p => p.id == id);
  
  // Refresh local cart variable from storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const existingItem = cart.find(item => item.id == id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    // Add new product with quantity 1
    cart.push({ ...product, quantity: 1 });
  }

  // Save to storage
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Feedback to user
  alert(`${product.name} added to cart! 🛍️`);
};


// Initialize cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display the cart items
window.displayCart = function() {
  const cartList = document.getElementById('cart-list');
  if (!cartList) return;

  // Refresh cart variable from storage to be safe
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartList.innerHTML = `<div class="empty-state">Your cart is feeling a bit light! 🌸</div>`;
    updateTotal();
    return;
  }

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="item-details">
        <img src="${item.image}" alt="${item.name}" class="cart-thumb">
        <div class="item-text">
          <h4>${item.name}</h4>
          <p class="item-price-small">₦${Number(item.price).toLocaleString()}</p>
        </div>
      </div>

      <div class="item-actions">
        <div class="qty-control">
          <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">
          &times;
        </button>
      </div>
    </div>
  `).join('');
  
  updateTotal();
};

// Function to update quantity
window.updateQty = function(productId, change) {
  // Use == instead of === to handle both string and number IDs
  const itemIndex = cart.findIndex(item => item.id == productId);

  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveAndRefresh();
  }
};

// Function to remove item
window.removeFromCart = function(productId) {
  cart = cart.filter(item => item.id != productId);
  saveAndRefresh();
};

// Function to update total price
function updateTotal() {
  const totalElement = document.getElementById('cart-total');
  const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
  
  if (totalElement) {
    totalElement.innerText = `₦${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
  }
}

// Helper to save and reload
function saveAndRefresh() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
