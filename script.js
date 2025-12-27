const productList = document.getElementById("product-list");

function displayProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="product.image" alt="{product.name}">
      <div class="details">
        <h3>product.name</h3>
        <p>product.price.toFixed(2)</p>
        <button onclick="addToCart({product.id})">Add to Cart</button>
      </div>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  alert(`Product ${id} added to cart`);
  // You can connect this to localStorage or cart.js later
}

displayProducts();