import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // LOAD CART
  const loadCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("mehrae-cart")) || [];

      const normalizedCart = savedCart.map((item) => ({
        ...item,
        quantity: Math.max(1, Number(item.quantity) || 1),
      }));

      setCartItems(normalizedCart);
    } catch (error) {
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();

    window.addEventListener("cartUpdated", loadCart);
    window.addEventListener("storage", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
      window.removeEventListener("storage", loadCart);
    };
  }, []);

  // SAVE CART AND SYNC NAVBAR
  const saveCart = (updatedCart) => {
    localStorage.setItem("mehrae-cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id, size) => {
    const updatedCart = cartItems.map((item) =>
      String(item.id) === String(id) && item.selectedSize === size
        ? { ...item, quantity: Number(item.quantity) + 1 }
        : item,
    );

    saveCart(updatedCart);
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id, size) => {
    const updatedCart = cartItems.map((item) =>
      String(item.id) === String(id) && item.selectedSize === size
        ? {
            ...item,
            quantity: Math.max(1, Number(item.quantity) - 1),
          }
        : item,
    );

    saveCart(updatedCart);
  };

  // REMOVE ITEM
  const removeItem = (id, size) => {
    const updatedCart = cartItems.filter(
      (item) => !(String(item.id) === String(id) && item.selectedSize === size),
    );

    saveCart(updatedCart);
  };

  // CLEAR CART
  const clearCart = () => {
    saveCart([]);
  };

  // TOTAL QUANTITY
  const totalQuantity = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0,
  );

  // PRICE FORMAT
  const formatPrice = (price) => Number(price || 0).toLocaleString("en-IN");

  return (
    <section className="mehrae-cart-page">
      <div className="container cart-container">
        {/* HEADER */}
        <div className="cart-header">
          <h1>My Shopping Bag</h1>
          <p>
            {totalQuantity} {totalQuantity === 1 ? "item" : "items"} in your bag
          </p>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="bi bi-bag"></i>

            <h2>Your bag is empty</h2>

            <p>
              Discover elegant styles and add your favourite pieces to your
              shopping bag.
            </p>

            <Link to="/sarees" className="cart-shop-btn">
              Explore Sarees
            </Link>

            <Link to="/ladies-dresses" className="cart-shop-btn">
              Explore Dresses
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {/* CART ITEMS */}
            <div className="col-lg-8">
              <div className="cart-items-wrapper">
                {cartItems.map((item) => (
                  <div
                    className="cart-item"
                    key={`${item.id}-${item.selectedSize || "FreeSize"}`}
                  >
                    {/* IMAGE */}
                    <div className="cart-item-image">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/400x500?text=MEHRAE";
                          }}
                        />
                      </Link>
                    </div>

                    {/* DETAILS */}
                    <div className="cart-item-details">
                      <h3>
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>

                      <p className="cart-item-category">
                        {item.category || "Fashion"}
                      </p>

                      <p className="cart-item-size">
                        Size: {item.selectedSize || "Free Size"}
                      </p>

                      <p className="cart-item-price">
                        ₹{formatPrice(item.price)}
                      </p>

                      {/* QUANTITY */}
                      <div className="cart-quantity-control">
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id, item.selectedSize)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id, item.selectedSize)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* TOTAL */}
                      <p className="cart-line-total">
                        Item Total: ₹
                        {formatPrice(
                          Number(item.price || 0) * Number(item.quantity || 1),
                        )}
                      </p>

                      {/* REMOVE */}
                      <button
                        className="cart-remove-btn"
                        type="button"
                        onClick={() => removeItem(item.id, item.selectedSize)}
                      >
                        <i className="bi bi-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* ACTIONS */}
                <div className="cart-actions">
                  <Link to="/ladies-dresses" className="continue-shopping">
                    <i className="bi bi-arrow-left"></i>
                    Continue Shopping
                  </Link>

                  <button
                    type="button"
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="col-lg-4">
              <div className="cart-summary">
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Total Items</span>
                  <span>{totalQuantity}</span>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{formatPrice(subtotal)}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span>Total</span>
                  <strong>₹{formatPrice(subtotal)}</strong>
                </div>

                <button
                  type="button"
                  className="checkout-btn"
                  onClick={() => alert("Checkout will be available soon!")}
                >
                  Proceed to Checkout
                  <i className="bi bi-arrow-right"></i>
                </button>

                <div className="cart-benefits">
                  <p>
                    <i className="bi bi-shield-check"></i>
                    Secure shopping experience
                  </p>

                  <p>
                    <i className="bi bi-truck"></i>
                    Free shipping
                  </p>

                  <p>
                    <i className="bi bi-arrow-repeat"></i>
                    Easy returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
