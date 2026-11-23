import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SIZES = ["S", "M", "L", "XL", "XXL"];

const FALLBACK_IMAGE =
  "https://placehold.co/600x800/0c111c/c8a96b?text=MEHRAE+COUTURE";

function DressCategoryLayout({ title, subtitle, banner, products = [] }) {
  const navigate = useNavigate();

  const [selectedSizes, setSelectedSizes] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);
  const [toast, setToast] = useState("");

  // Load wishlist
  useEffect(() => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("mehrae-wishlist") || "[]",
      );

      setWishlist(savedWishlist);
    } catch {
      setWishlist([]);
    }
  }, []);

  // Toast message
  const showMessage = (message) => {
    setToast(message);

    window.clearTimeout(window.mehraeToastTimer);

    window.mehraeToastTimer = window.setTimeout(() => {
      setToast("");
    }, 2500);
  };

  // Convert price to number
  const getPrice = (price) => {
    return Number(String(price).replace(/[₹,\s]/g, "")) || 0;
  };

  // Select size
  const selectSize = (productId, size) => {
    setSelectedSizes((previous) => ({
      ...previous,
      [productId]: size,
    }));
  };

  // Open product details
  const openProductDetails = (product) => {
    navigate(`/product/${product.id}`, {
      state: { product },
    });
  };

  // Wishlist
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    const updatedWishlist = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);

    localStorage.setItem("mehrae-wishlist", JSON.stringify(updatedWishlist));

    showMessage(exists ? "Removed from wishlist" : "Added to wishlist");
  };

  // Add to cart
  const addToCart = (product) => {
    const size = selectedSizes[product.id];

    if (!size) {
      showMessage("Please select a size");
      return;
    }

    let currentCart = [];

    try {
      currentCart = JSON.parse(localStorage.getItem("mehrae-cart") || "[]");
    } catch {
      currentCart = [];
    }

    const existingItem = currentCart.find(
      (item) => item.id === product.id && item.size === size,
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = currentCart.map((item) =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      );
    } else {
      updatedCart = [
        ...currentCart,
        {
          ...product,
          size,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("mehrae-cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    showMessage("Added to shopping bag");
  };

  // Filter products
  const filteredProducts = products
    .filter((product) => getPrice(product.price) <= maxPrice)
    .filter((product) =>
      showWishlistOnly ? wishlist.some((item) => item.id === product.id) : true,
    );

  // Sort products
  const sortedProducts = [...filteredProducts];

  if (sortBy === "price-low") {
    sortedProducts.sort((a, b) => getPrice(a.price) - getPrice(b.price));
  }

  if (sortBy === "price-high") {
    sortedProducts.sort((a, b) => getPrice(b.price) - getPrice(a.price));
  }

  return (
    <main className="dress-store">
      {/* HERO BANNER */}
      <section
        className="dress-category-banner"
        style={banner ? { backgroundImage: `url("${banner}")` } : undefined}
      >
        <div className="dress-banner-overlay"></div>

        <div className="dress-banner-content">
          <span className="dress-banner-tag">MEHRAE COUTURE</span>

          <h1>{title}</h1>

          <p>{subtitle}</p>

          <a href="#products" className="dress-banner-button">
            EXPLORE COLLECTION
          </a>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section className="dress-service-strip">
        <div className="dress-service-item">
          <i className="bi bi-truck"></i>
          <span>Free Shipping Above ₹2,000</span>
        </div>

        <div className="dress-service-item">
          <i className="bi bi-shield-check"></i>
          <span>Secure Shopping</span>
        </div>

        <div className="dress-service-item">
          <i className="bi bi-stars"></i>
          <span>Elegant Fashion</span>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="dress-shop-section" id="products">
        {/* HEADING */}
        <div className="dress-shop-heading">
          <span className="dress-shop-eyebrow">CURATED FOR YOU</span>

          <h2>{title}</h2>

          <p>
            Discover timeless elegance and beautiful designs from our exclusive
            collection.
          </p>
        </div>

        {/* FILTER TOOLBAR */}
        <div className="dress-shop-toolbar">
          {/* PRICE FILTER */}
          <div className="dress-filter-price">
            <label htmlFor="dress-price-range">
              Maximum Price: ₹{maxPrice.toLocaleString("en-IN")}
            </label>

            <input
              id="dress-price-range"
              type="range"
              min="500"
              max="5000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          {/* WISHLIST FILTER */}
          <button
            type="button"
            className={`dress-wishlist-filter ${
              showWishlistOnly ? "active" : ""
            }`}
            onClick={() => setShowWishlistOnly((previous) => !previous)}
          >
            <i
              className={showWishlistOnly ? "bi bi-heart-fill" : "bi bi-heart"}
            ></i>

            {showWishlistOnly ? "Showing Wishlist" : "Wishlist"}
          </button>

          {/* SORT */}
          <select
            className="dress-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCT COUNT */}
        <div className="dress-product-count">
          Showing {sortedProducts.length} products
        </div>

        {/* PRODUCT GRID */}
        <div className="dress-product-grid">
          {sortedProducts.map((product) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === product.id,
            );

            return (
              <article className="dress-product-card" key={product.id}>
                {/* PRODUCT IMAGE */}
                <div
                  className="dress-product-image-wrapper product-details-clickable"
                  onClick={() => openProductDetails(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      openProductDetails(product);
                    }
                  }}
                  aria-label={`View ${product.name}`}
                >
                  <img
                    src={product.image || FALLBACK_IMAGE}
                    alt={product.name}
                    className="dress-product-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />

                  {product.badge && (
                    <span className="dress-product-badge">{product.badge}</span>
                  )}

                  {/* WISHLIST BUTTON */}
                  <button
                    type="button"
                    className={`dress-wishlist-button ${
                      isWishlisted ? "wishlisted" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    aria-label={
                      isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                    }
                  >
                    <i
                      className={
                        isWishlisted ? "bi bi-heart-fill" : "bi bi-heart"
                      }
                    ></i>
                  </button>

                  {/* QUICK VIEW */}
                  <span className="dress-quick-view">
                    <i className="bi bi-eye"></i>
                    VIEW DETAILS
                  </span>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="dress-product-details">
                  <h3
                    className="product-details-clickable"
                    onClick={() => openProductDetails(product)}
                  >
                    {product.name}
                  </h3>

                  <p className="dress-product-description">
                    {product.description}
                  </p>

                  {/* RATING */}
                  {product.rating && (
                    <div className="dress-product-rating">
                      <i className="bi bi-star-fill"></i>
                      <span>{product.rating}</span>
                    </div>
                  )}

                  {/* PRICE */}
                  <div className="dress-product-price">
                    <span className="dress-current-price">{product.price}</span>

                    {product.originalPrice && (
                      <span className="dress-original-price">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* SIZE SELECTOR */}
                  <div className="dress-size-section">
                    <span className="dress-size-label">Select Size</span>

                    <div className="dress-size-buttons">
                      {SIZES.map((size) => (
                        <button
                          type="button"
                          key={size}
                          className={
                            selectedSizes[product.id] === size ? "selected" : ""
                          }
                          onClick={() => selectSize(product.id, size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ADD TO CART */}
                  <button
                    type="button"
                    className="dress-add-cart-button"
                    onClick={() => addToCart(product)}
                  >
                    <i className="bi bi-bag"></i>
                    ADD TO BAG
                  </button>

                  {/* DETAILS LINK */}
                  <button
                    type="button"
                    className="dress-view-details-button"
                    onClick={() => openProductDetails(product)}
                  >
                    VIEW PRODUCT DETAILS
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {sortedProducts.length === 0 && (
          <div className="dress-empty-state">
            <i className="bi bi-search"></i>

            <h3>No Products Found</h3>

            <p>Try adjusting the price filter or wishlist filter.</p>

            <button
              type="button"
              onClick={() => {
                setMaxPrice(5000);
                setShowWishlistOnly(false);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* TOAST */}
      {toast && (
        <div className="dress-toast">
          <i className="bi bi-check-circle-fill"></i>
          <span>{toast}</span>
        </div>
      )}
    </main>
  );
}

export default DressCategoryLayout;
