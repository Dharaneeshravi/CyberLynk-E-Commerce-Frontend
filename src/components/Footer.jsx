function Footer() {
  return (
    <footer className="couture-footer">
      {/* NEWSLETTER SECTION */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div>
              <span className="footer-subtitle">STAY IN STYLE</span>
              <h2>Join the Mehrae Family</h2>
              <p>
                Subscribe to receive exclusive offers, new saree collections,
                latest dresses and fashion updates.
              </p>
            </div>

            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to Mehrae Couture!");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                required
              />

              <button type="submit">
                Subscribe
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container">
        <div className="footer-main">
          {/* BRAND INFORMATION */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              MEHRAE
              <span>COUTURE</span>
            </a>

            <p>
              Discover the beauty of Indian fashion with Mehrae Couture. Explore
              our elegant sarees, designer collections and beautiful ladies
              dresses, crafted to celebrate your style and individuality.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* SHOP */}
          <div className="footer-links">
            <h5>SHOP</h5>

            <ul>
              <li>
                <a href="/#new-arrivals">All Collections</a>
              </li>
              <li>
                <a href="/#new-arrivals">Designer Sarees</a>
              </li>
              <li>
                <a href="/#new-arrivals">Silk Sarees</a>
              </li>
              <li>
                <a href="/#new-arrivals">Cotton Sarees</a>
              </li>
              <li>
                <a href="/#new-arrivals">Ladies Dresses</a>
              </li>
              <li>
                <a href="/#new-arrivals">Ethnic Wear</a>
              </li>
            </ul>
          </div>

          {/* CUSTOMER SUPPORT */}
          <div className="footer-links">
            <h5>CUSTOMER CARE</h5>

            <ul>
              <li>
                <a href="mailto:support@mehraecouture.com">Contact Us</a>
              </li>
              <li>
                <a href="/#footer-contact">FAQs</a>
              </li>
              <li>
                <a href="/#footer-contact">Shipping Information</a>
              </li>
              <li>
                <a href="/#footer-contact">Returns & Exchanges</a>
              </li>
              <li>
                <a href="/#footer-contact">Track Your Order</a>
              </li>
              <li>
                <a href="/#footer-contact">Size Guide</a>
              </li>
            </ul>
          </div>

          {/* ABOUT MEHRAE */}
          <div className="footer-links">
            <h5>ABOUT MEHRAE</h5>

            <ul>
              <li>
                <a href="/#about-us">Our Story</a>
              </li>
              <li>
                <a href="/#new-arrivals">Our Collections</a>
              </li>
              <li>
                <a href="/#about-us">Our Mission</a>
              </li>
              <li>
                <a href="/#about-us">Our Vision</a>
              </li>
              <li>
                <a href="/#footer-contact">Contact Information</a>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-contact" id="footer-contact">
          <div>
            <i className="bi bi-envelope"></i>
            <span>support@mehraecouture.com</span>
          </div>

          <div>
            <i className="bi bi-telephone"></i>
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div>
            <i className="bi bi-clock"></i>
            <span>Monday - Saturday | 10 AM - 6 PM</span>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mehrae Couture. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/#footer-contact">Privacy</a>
            <a href="/#footer-contact">Terms</a>
            <a href="/#footer-contact">Cookies</a>
          </div>

          <div className="footer-payment">
            <i className="bi bi-credit-card"></i>
            <i className="bi bi-wallet2"></i>
            <i className="bi bi-cash-coin"></i>
            <span>Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
