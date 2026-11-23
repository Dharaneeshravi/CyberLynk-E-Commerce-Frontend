import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // UPDATE CART QUANTITY
  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("mehrae-cart")) || [];

      const totalQuantity = cart.reduce(
        (total, item) => total + Math.max(0, Number(item.quantity) || 0),
        0,
      );

      setCartCount(totalQuantity);
    } catch (error) {
      setCartCount(0);
    }
  };

  // LISTEN FOR CART UPDATES
  useEffect(() => {
    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  // SEARCH PRODUCTS
  const handleSearch = (e) => {
    e.preventDefault();

    const term = searchTerm.trim();

    if (!term) return;

    navigate("/ladies-dresses", {
      state: {
        searchTerm: term,
      },
    });

    setSearchTerm("");
  };

  return (
    <nav className="navbar navbar-expand-lg couture-navbar">
      <div className="container-fluid px-4">
        {/* BRAND LOGO */}
        <Link className="navbar-brand couture-logo" to="/">
          MEHRAE
          <span>COUTURE</span>
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto">
            {/* SAREES */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/sarees"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sarees
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sarees">
                    All Sarees
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/kanjivaram-sarees">
                    Kanjivaram Sarees
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/banarasi-sarees">
                    Banarasi Sarees
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/chiffon-sarees">
                    Chiffon Sarees
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/organza-sarees">
                    Organza Sarees
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/cotton-sarees">
                    Cotton Sarees
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/party-wear-sarees">
                    Party Wear Sarees
                  </Link>
                </li>
              </ul>
            </li>

            {/* LADIES DRESSES */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/ladies-dresses"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ladies Dresses
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ladies-dresses">
                    All Dresses
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/anarkali-dresses">
                    Anarkali Dresses
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/kurti-kurtas">
                    Kurti &amp; Kurtas
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ethnic-suits">
                    Ethnic Suits
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/party-wear-dresses">
                    Party Wear Dresses
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/casual-dresses">
                    Casual Dresses
                  </Link>
                </li>
              </ul>
            </li>

            {/* NEW ARRIVALS */}
            <li className="nav-item">
              <Link className="nav-link" to="/#new-arrivals">
                New Arrivals
              </Link>
            </li>

            {/* COLLECTIONS */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/#new-arrivals"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collections
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sarees">
                    Festive Collection
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/party-wear-sarees">
                    Wedding Collection
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/kanjivaram-sarees">
                    Traditional Collection
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ladies-dresses">
                    Designer Collection
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/party-wear-dresses">
                    Party Wear Collection
                  </Link>
                </li>
              </ul>
            </li>

            {/* SALE */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle sale-link"
                to="/ladies-dresses"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sale
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sarees">
                    All Offers
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/sarees">
                    Sarees Under ₹999
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ladies-dresses">
                    Dresses Under ₹999
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ladies-dresses">
                    Clearance Sale
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="navbar-actions">
            {/* SEARCH */}
            <form
              className="d-flex navbar-search"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search sarees, dresses..."
                aria-label="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button className="btn search-btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {/* CART */}
            <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
              <i className="bi bi-cart3"></i>

              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>

            {/* LOGIN */}
            <Link to="/login" className="login-btn">
              <i className="bi bi-person"></i>
              <span>Login / Signup</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
