// cart.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;
  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty</p>";
    totalEl.textContent = "";
    return;
  }
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <div class="qty-control">
        <button onclick="updateQty(${item.id}, -1)">➖</button>
        <span>${item.quantity}</span>
        <button onclick="updateQty(${item.id}, 1)">➕</button>
      </div>
      <p>₦${(item.price * item.quantity).toFixed(2)}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartList.appendChild(div);
    total += item.price * item.quantity;
  });
  totalEl.textContent = `Total: ₦${total.toFixed(2)}`;
}

function updateQty(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity < 1) item.quantity = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}