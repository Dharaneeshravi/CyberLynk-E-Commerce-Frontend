import { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "../App.css";

// LADIES DRESSES
import { products as anarkaliProducts } from "./ladiesdress/AnarkaliDresses";
import { products as kurtiProducts } from "./ladiesdress/KurtiKurtas";
import { products as suitProducts } from "./ladiesdress/EthnicSuits";
import { products as partyDressProducts } from "./ladiesdress/PartyWearDresses";
import { products as casualProducts } from "./ladiesdress/CasualDresses";

// SAREES
import { products as kanjivaramProducts } from "./sarees/KanjivaramSarees";
import { products as banarasiProducts } from "./sarees/BanarasiSarees";
import { products as chiffonProducts } from "./sarees/ChiffonSarees";
import { products as organzaProducts } from "./sarees/OrganzaSarees";
import { products as cottonProducts } from "./sarees/CottonSarees";
import { products as partySareeProducts } from "./sarees/PartyWearSarees";

const allProducts = [
  ...anarkaliProducts,
  ...kurtiProducts,
  ...suitProducts,
  ...partyDressProducts,
  ...casualProducts,
  ...kanjivaramProducts,
  ...banarasiProducts,
  ...chiffonProducts,
  ...organzaProducts,
  ...cottonProducts,
  ...partySareeProducts,
];

const DRESS_SIZES = ["S", "M", "L", "XL", "XXL"];
const SAREE_SIZES = ["Free Size"];

const getLocalStorageData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const product = allProducts.find((item) => String(item.id) === String(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [wishlist, setWishlist] = useState(() =>
    getLocalStorageData("mehrae-wishlist"),
  );
  const [toast, setToast] = useState("");

  if (!product) {
    return (
      <section className="product-not-found">
        <i className="bi bi-exclamation-circle"></i>

        <h2>Product Not Found</h2>

        <p>This product may no longer be available.</p>

        <Link to="/sarees" className="product-back-button">
          Explore Collections
        </Link>
      </section>
    );
  }

  const productImages = product.images?.length
    ? product.images
    : [product.image];

  const isSaree = product.category?.toLowerCase().includes("saree");

  const availableSizes = isSaree ? SAREE_SIZES : DRESS_SIZES;

  const isWishlisted = wishlist.some(
    (item) => String(item.id) === String(product.id),
  );

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const toggleWishlist = () => {
    let updatedWishlist;

    if (isWishlisted) {
      updatedWishlist = wishlist.filter(
        (item) => String(item.id) !== String(product.id),
      );

      showToast("Removed from wishlist");
    } else {
      updatedWishlist = [...wishlist, product];

      showToast("Added to wishlist");
    }

    setWishlist(updatedWishlist);

    localStorage.setItem("mehrae-wishlist", JSON.stringify(updatedWishlist));
  };

  const addToCart = () => {
    if (!selectedSize) {
      showToast("Please select a size");
      return;
    }

    let cart = getLocalStorageData("mehrae-cart");

    const cartItem = {
      ...product,
      selectedSize,
      quantity,
    };

    const existingItem = cart.find(
      (item) =>
        String(item.id) === String(product.id) &&
        item.selectedSize === selectedSize,
    );

    if (existingItem) {
      cart = cart.map((item) =>
        String(item.id) === String(product.id) &&
        item.selectedSize === selectedSize
          ? {
              ...item,
              quantity: (Number(item.quantity) || 0) + quantity,
            }
          : item,
      );
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("mehrae-cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    showToast("Added to your shopping bag");
  };

  const relatedProducts = allProducts
    .filter(
      (item) =>
        item.category === product.category &&
        String(item.id) !== String(product.id),
    )
    .slice(0, 4);

  return (
    <section className="product-details-page">
      {/* BREADCRUMB */}

      <div className="product-breadcrumb">
        <Link to="/">Home</Link>

        <span>/</span>

        <Link to={isSaree ? "/sarees" : "/ladies-dresses"}>
          {isSaree ? "Sarees" : "Ladies Dresses"}
        </Link>

        <span>/</span>

        <span className="breadcrumb-current">{product.name}</span>
      </div>

      {/* PRODUCT */}

      <div className="product-details-container">
        {/* IMAGE GALLERY */}

        <div className="product-gallery">
          <div className="product-main-image">
            <img
              src={productImages[activeImage] || product.image}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x800?text=MEHRAE+COUTURE";
              }}
            />

            {product.badge && (
              <span className="product-detail-badge">{product.badge}</span>
            )}

            <button
              className={`product-detail-wishlist ${
                isWishlisted ? "active" : ""
              }`}
              onClick={toggleWishlist}
              aria-label="Toggle wishlist"
            >
              <i
                className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}
              ></i>
            </button>
          </div>

          {productImages.length > 1 && (
            <div className="product-thumbnail-list">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  className={`product-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PRODUCT INFORMATION */}

        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>

          <h1>{product.name}</h1>

          {/* RATING */}

          <div className="product-detail-rating">
            <span className="rating-stars">
              <i className="bi bi-star-fill"></i>
            </span>

            <span>{product.rating || "4.5"}</span>

            <span className="rating-divider">|</span>

            <span>Customer Reviews</span>
          </div>

          {/* PRICE */}

          <div className="product-detail-pricing">
            <span className="product-detail-price">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>

            {product.originalPrice && (
              <>
                <span className="product-detail-original-price">
                  ₹{Number(product.originalPrice).toLocaleString("en-IN")}
                </span>

                {Number(product.originalPrice) > Number(product.price) && (
                  <span className="product-detail-discount">
                    {Math.round(
                      ((Number(product.originalPrice) - Number(product.price)) /
                        Number(product.originalPrice)) *
                        100,
                    )}
                    % OFF
                  </span>
                )}
              </>
            )}
          </div>

          <p className="product-tax-note">Inclusive of all taxes</p>

          <div className="product-detail-divider"></div>

          {/* DESCRIPTION */}

          <div className="product-description-section">
            <h3>Product Description</h3>

            <p>
              {product.description ||
                "Discover timeless elegance with this beautifully designed piece from MEHRAE COUTURE."}
            </p>
          </div>

          {/* SIZE */}

          <div className="product-size-section">
            <div className="size-heading">
              <h3>Select Size</h3>

              {!isSaree && <span className="size-guide">Size Guide</span>}
            </div>

            <div className="product-size-options">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`product-size-button ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}

          <div className="product-quantity-section">
            <h3>Quantity</h3>

            <div className="quantity-control">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <i className="bi bi-dash"></i>
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}

          <div className="product-detail-actions">
            <button className="product-add-to-bag" onClick={addToCart}>
              <i className="bi bi-bag"></i>
              ADD TO BAG
            </button>

            <button
              className={`product-detail-save ${isWishlisted ? "saved" : ""}`}
              onClick={toggleWishlist}
              aria-label="Add to wishlist"
            >
              <i
                className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}
              ></i>
            </button>
          </div>

          {/* DELIVERY */}

          <div className="product-service-details">
            <div className="service-detail-item">
              <i className="bi bi-truck"></i>

              <div>
                <strong>Delivery</strong>
                <p>Delivery available across India</p>
              </div>
            </div>

            <div className="service-detail-item">
              <i className="bi bi-arrow-repeat"></i>

              <div>
                <strong>Easy Returns</strong>
                <p>Return policy subject to product terms</p>
              </div>
            </div>

            <div className="service-detail-item">
              <i className="bi bi-shield-check"></i>

              <div>
                <strong>Quality Assurance</strong>
                <p>Quality checked before dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}

      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <div className="related-products-heading">
            <span>YOU MAY ALSO LIKE</span>

            <h2>Explore Similar Styles</h2>
          </div>

          <div className="related-products-grid">
            {relatedProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                className="related-product-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x500?text=MEHRAE";
                  }}
                />

                <div className="related-product-info">
                  <h4>{item.name}</h4>

                  <p>₹{Number(item.price).toLocaleString("en-IN")}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* TOAST */}

      {toast && (
        <div className="product-detail-toast">
          <i className="bi bi-check-circle"></i>
          {toast}
        </div>
      )}

      {/* CONTINUE SHOPPING */}

      <div className="product-continue-shopping">
        <button onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left"></i>
          CONTINUE SHOPPING
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
