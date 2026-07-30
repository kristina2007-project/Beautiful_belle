// ================= CART =================

let cart = [];

// ================= ADD TO CART =================

function addToCart(productName, productPrice) {

// Check if product already exists in cart
const existingProduct = cart.find(
    product => product.name === productName
);
if (existingProduct) {
    // Increase quantity
    existingProduct.quantity++;
} else {
    // Add new product
    cart.push({
        name: productName,
        price: productPrice,
        quantity: 1
    });
}
// Update cart
updateCart();
// Show message
alert(productName + " added to your cart!");

}

// ================= UPDATE CART =================

function updateCart() {

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
// Clear current cart
cartItems.innerHTML = "";
// If cart is empty
if (cart.length === 0) {
    cartItems.innerHTML = `
        <p class="empty-cart">
            Your cart is empty.
        </p>
    `;
    cartCount.textContent = "0";
    cartTotal.textContent = "0";
    return;
}
// Total price
let total = 0;
// Total number of products
let totalItems = 0;
// Display products
cart.forEach((product, index) => {
    // Calculate product total
    const productTotal =
        product.price * product.quantity;
    // Calculate cart total
    total += productTotal;
    // Calculate number of items
    totalItems += product.quantity;
    // Add product to cart
    cartItems.innerHTML += `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${product.name}</h4>
                <p>
                    $${product.price}
                    ×
                    ${product.quantity}
                </p>
            </div>
            <div>
                <strong>
                    $${productTotal}
                </strong>
                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>
            </div>
        </div>
    `;
});
// Update cart count
cartCount.textContent = totalItems;
// Update total price
cartTotal.textContent = total;

}

// ================= REMOVE FROM CART =================

function removeFromCart(index) {

// Remove product
cart.splice(index, 1);
// Update cart
updateCart();

}

// ================= PLACE ORDER =================

document.getElementById(order-form).addEventListener(submit, function(event) {

    // Prevent page refresh
    event.preventDefault();
    // Check if cart is empty
    if (cart.length === 0) {
        alert(
            "Your cart is empty. Please add some products first."
        );
        return;
    }
    // Get customer information
    const customerName =
        document.getElementById("customer-name").value;
    const customerPhone =
        document.getElementById("customer-phone").value;
    const customerAddress =
        document.getElementById("customer-address").value;
    // Create order message
    let message =
        "Hello Beautiful Belle! 💗%0A%0A";
    message +=
        "🛍️ *New Order*%0A%0A";
    // Customer information
    message +=
        "👤 Name: " +
        customerName +
        "%0A";
    message +=
        "📱 Phone: " +
        customerPhone +
        "%0A";
    message +=
        "📍 Address: " +
        customerAddress +
        "%0A%0A";
    // Products
    message +=
        "🛒 *Products:*%0A";
    let total = 0;
    cart.forEach(product => {
        const productTotal =
            product.price * product.quantity;
        total += productTotal;
        message +=
            "• " +
            product.name +
            " x" +
            product.quantity +
            " — $" +
            productTotal +
            "%0A";
    });
    // Total
    message +=
        "%0A💰 *Total: $" +
        total +
        "*";
    // Your WhatsApp number
    // Replace this number with your actual WhatsApp number
    const whatsappNumber =
        "+96170017523";
    // Create WhatsApp URL
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;
    // Open WhatsApp
    window.open(
        whatsappURL,
        "_blank"
    );
});

// ================= INITIAL CART =================

// Make sure cart is displayed correctly
updateCart();