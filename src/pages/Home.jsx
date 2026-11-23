import React from "react";

// Image fallback if an image URL fails to load
const handleImageError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src =
    "https://placehold.co/700x900/0c1422/c9a76c?text=Mehrae+Couture";
};

const categories = [
  {
    name: "Designer Sarees",
    description: "Elegant designs for every special occasion.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
    link: "#new-arrivals",
  },
  {
    name: "Ladies Dresses",
    description: "Beautiful styles for every woman.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
    link: "#new-arrivals",
  },
  {
    name: "Traditional Wear",
    description: "Celebrate tradition with timeless elegance.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=800",
    link: "#new-arrivals",
  },
];

const products = [
  {
    name: "Designer Silk Saree",
    price: "₹2,499",
    oldPrice: "₹3,499",
    discount: "29% OFF",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700",
    tag: "NEW ARRIVAL",
  },
  {
    name: "Floral Anarkali Dress",
    price: "₹1,899",
    oldPrice: "₹2,499",
    discount: "24% OFF",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700",
    tag: "TRENDING",
  },
  {
    name: "Traditional Ethnic Suit",
    price: "₹2,199",
    oldPrice: "₹2,999",
    discount: "27% OFF",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=700",
    tag: "POPULAR",
  },
  {
    name: "Party Wear Saree",
    price: "₹3,499",
    oldPrice: "₹4,499",
    discount: "22% OFF",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=700",
    tag: "BEST SELLER",
  },
  {
    name: "Elegant Floral Dress",
    price: "₹1,599",
    oldPrice: "₹2,099",
    discount: "24% OFF",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=700",
    tag: "NEW",
  },
];

function Home() {
  return (
    <main className="couture-home">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container hero-content">
            <span className="hero-label">THE BEAUTY OF INDIAN FASHION</span>

            <h1>
              Elegance in
              <span>Every Drape</span>
            </h1>

            <p>
              Discover exquisite sarees and beautiful ladies dresses, designed
              to make every moment special.
            </p>

            <a href="#new-arrivals" className="gold-btn">
              Explore Collection
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="service-section">
        <div className="container">
          <div className="service-grid">
            <div className="service-item">
              <i className="bi bi-truck"></i>
              <div>
                <h5>Free Shipping</h5>
                <p>On orders above ₹999</p>
              </div>
            </div>

            <div className="service-item">
              <i className="bi bi-arrow-repeat"></i>
              <div>
                <h5>Easy Returns</h5>
                <p>Hassle-free 7 day returns</p>
              </div>
            </div>

            <div className="service-item">
              <i className="bi bi-shield-check"></i>
              <div>
                <h5>Secure Payments</h5>
                <p>Safe and secure checkout</p>
              </div>
            </div>

            <div className="service-item">
              <i className="bi bi-headset"></i>
              <div>
                <h5>Customer Support</h5>
                <p>Mon – Sat, 10 AM – 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="category-section container" id="categories">
        <div className="section-heading">
          <span>EXPLORE OUR COLLECTIONS</span>
          <h2>Shop By Category</h2>
          <p>Traditional beauty meets modern elegance.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              href={category.link}
              className="category-card"
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                onError={handleImageError}
              />

              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>

                <span className="category-btn">
                  Explore Collection
                  <i className="bi bi-arrow-right"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="products-section container" id="new-arrivals">
        <div className="section-heading">
          <span>FRESH FROM OUR COLLECTION</span>
          <h2>New Arrivals</h2>
          <p>Discover your favourite sarees and ladies dresses.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={handleImageError}
                />

                <span className="product-tag">{product.tag}</span>

                <button
                  className="wishlist-btn"
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  onClick={() => alert(`${product.name} added to wishlist`)}
                >
                  <i className="bi bi-heart"></i>
                </button>

                <button
                  className="quick-add-btn"
                  type="button"
                  onClick={() => alert(`${product.name} selected`)}
                >
                  Quick Add
                </button>
              </div>

              <div className="product-info">
                <h4>{product.name}</h4>

                <div className="product-price">
                  <strong>{product.price}</strong>
                  <del>{product.oldPrice}</del>
                  <span>{product.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="#categories" className="outline-btn">
            View All Collections
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* FESTIVE PROMOTION */}
      <section className="summer-banner container">
        <div className="summer-content">
          <span>CELEBRATE EVERY OCCASION</span>

          <h2>
            Festive <span>Collection</span>
          </h2>

          <p>
            Beautiful sarees, elegant dresses and timeless styles for every
            celebration.
          </p>

          <a href="#new-arrivals" className="gold-btn">
            Shop the Collection
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="summer-discount">
          <span>UP TO</span>
          <strong>40%</strong>
          <span>OFF</span>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="brand-message">
        <div className="container">
          <span>THE MEHRAE PROMISE</span>

          <h2>Every Saree Tells a Story. Every Dress Defines Elegance.</h2>

          <p>
            At Mehrae Couture, we celebrate the beauty of Indian fashion through
            elegant sarees and beautiful ladies dresses. Our collections bring
            together tradition, style and sophistication to make every occasion
            memorable.
          </p>

          <a href="#new-arrivals" className="gold-btn">
            Explore Collections
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-section" id="about-us">
        <div className="about-container">
          {/* LEFT SIDE - TEXT */}
          <div className="about-content">
            <span className="about-subtitle">OUR STORY</span>

            <h2>
              About <span>Mehrae Couture</span>
            </h2>

            <p>
              Mehrae Couture is dedicated to celebrating the elegance and beauty
              of women's fashion. We bring you a beautiful collection of sarees
              and ladies dresses designed to complement every occasion.
            </p>

            <p>
              From traditional silk sarees and designer collections to stylish
              ethnic wear and elegant dresses, our aim is to bring together
              timeless Indian traditions and contemporary fashion.
            </p>

            <p>
              We believe every woman deserves to feel beautiful, confident and
              special. At Mehrae Couture, every outfit is an opportunity to
              express your unique style.
            </p>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
              alt="Women's fashion collection"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
