const cartBtn = document.getElementById("cartBtn");
const shipCart = document.querySelector(".ship-to-cart-count");

cartBtn.addEventListener("click", function () {
  window.location.href = "cart.html";
});

function checkout() {
  localStorage.removeItem("cartItems");
  location.reload();
}

var cartItems = [];

if (localStorage.getItem("cartItems")) {
  cartItems = JSON.parse(localStorage.getItem("cartItems"));
}

function calculateTotalPrice() {
  const totalPrice = cartItems
    .map((item) => {
      const parsedPrice = parseFloat(item.price.replace("$", ""));

      return parsedPrice;
    })
    .reduce((total, price) => total + price, 0);
  return totalPrice.toFixed(2);
}

function renderCartItems() {
  const cartItemsDiv = document.getElementById("cart-items");
  const noCartInfoParagraph = document.querySelector(".no-cart-info");
  cartItemsDiv.innerHTML = "";
  if (cartItems.length === 0) {
    noCartInfoParagraph.classList.remove("d-none");
  } else {
    noCartInfoParagraph.classList.add("d-none");

    cartItems.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";

      const image = document.createElement("img");
      image.src = item.imageSrc;
      image.classList.add("card-img-top");
      card.appendChild(image);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = item.name;
      cardBody.appendChild(title);

      const info = document.createElement("p");
      info.classList.add("card-text");
      info.textContent = item.info;
      cardBody.appendChild(info);

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.textContent = item.price;
      cardBody.appendChild(price);

      const removeButton = document.createElement("button");
      removeButton.classList.add("btn", "btn-danger");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => removeFromCart(index));
      cardBody.appendChild(removeButton);

      card.appendChild(cardBody);
      cartItemsDiv.appendChild(card);
      const cartValue = document.getElementById("cartValue");
      cartValue.innerHTML = cartItems.length;
      const totalPrice = calculateTotalPrice();
      shipCart.innerHTML = `${cartItems.length} Items ($${totalPrice})`;
    });
  }
}

function removeFromCart(index) {
  cartItems.splice(index, 1);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  renderCartItems();
  location.reload();
}

function addToCart(index) {
  const productElement = document.querySelectorAll(".bg")[index];
  const productName = productElement.querySelector(".product-name").innerText;
  const productInfo = productElement.querySelector(".product-info").innerText;
  const productPrice = productElement.querySelector(".product-price").innerText;
  const productImageSrc = productElement.querySelector(".image").src;

  const product = {
    name: productName,
    info: productInfo,
    price: productPrice,
    imageSrc: productImageSrc,
  };

  cartItems.push(product);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const addToCartButton = productElement.querySelector(".add-to-cart-btn");
  addToCartButton.classList.add("btn", "btn-success");
  addToCartButton.textContent = "Added to Cart";
}

document.querySelectorAll(".add-to-cart-btn").forEach(function (button, index) {
  button.addEventListener("click", function () {
    addToCart(index);
    renderCartItems();
  });
});

renderCartItems();
