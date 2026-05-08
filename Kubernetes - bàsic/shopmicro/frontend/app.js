let cart = [];
let products = [];

// LOGIN
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "admin") {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadProducts();
  } else {
    document.getElementById("login-error").innerText =
      "Usuari o contrasenya incorrectes";
  }
}

// PRODUCTOS
function loadProducts() {
  fetch("/api/products")
    .then(r => r.json())
    .then(data => {
      products = data;
      renderProducts();
    })
    .catch(err => console.error(err));
}

// MOSTRAR PRODUCTOS (CON IMAGEN)
function renderProducts() {
  const c = document.getElementById("content");

  c.innerHTML = products.map(p => {
    
    let img = "";

    if (p.name === "Laptop") img = "laptop.jpg";
    else if (p.name === "Mouse") img = "mouse.jpg";
    else if (p.name === "Keyboard") img = "keyboard.jpg";

    return `
      <div class="product">
        <img src="/images/${img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}€</p>
        <button onclick="addToCart(${p.id})">ADD</button>
      </div>
    `;
  }).join("");
}

// CARRITO
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  cart.push(p);
  updateCartCount();
}

// ELIMINAR
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
}

// CONTADOR
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// MOSTRAR CARRITO + TOTAL
function showCart() {
  const c = document.getElementById("content");

  if (cart.length === 0) {
    c.innerHTML = "<h3>Carrito vacío</h3>";
    return;
  }

  let total = cart.reduce((sum, p) => sum + p.price, 0);

  c.innerHTML = `
    ${cart.map((p, i) => `
      <div class="cart-item">
        <h3>${p.name}</h3>
        <p>${p.price}€</p>
        <button onclick="removeFromCart(${i})">Eliminar</button>
      </div>
    `).join("")}

    <h2 style="text-align:center;">TOTAL: ${total}€</h2>

    <div style="text-align:center;">
      <button onclick="checkout()">COMPRAR</button>
    </div>
  `;
}

// COMPRA
function checkout() {
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ items: cart })
  })
  .then(async (r) => {
    const data = await r.json();

    if (!r.ok) {
      throw new Error(data.error || "Error en la compra");
    }

    cart = [];
    updateCartCount();

    document.getElementById("content").innerHTML = `
      <h2 style="text-align:center;color:green;">
        ✔ Compra realitzada correctament
      </h2>
    `;
  })
  .catch(err => {
    console.error(err);

    document.getElementById("content").innerHTML = `
      <h2 style="text-align:center;color:red;">
        ❌ Error al realitzar la compra
      </h2>
    `;
  });
}

// VOLVER
function showProducts() {
  renderProducts();
}
