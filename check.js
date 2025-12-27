 const summary = document.getElementById("order-summary");
    const totalEl = document.getElementById("checkout-total");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
      summary.appendChild(div);
      total += item.price * item.quantity;
    });
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
    document.getElementById("checkout-form").addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.removeItem("cart");
      document.getElementById("order-message").textContent = "Order placed successfully!";
      summary.innerHTML = "";
      totalEl.textContent = "";
      e.target.reset();
    });
    