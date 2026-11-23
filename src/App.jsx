import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import AllDresses from "./pages/ladiesdress/AllDresses";
import AnarkaliDresses from "./pages/ladiesdress/AnarkaliDresses";
import KurtiKurtas from "./pages/ladiesdress/KurtiKurtas";
import EthnicSuits from "./pages/ladiesdress/EthnicSuits";
import PartyWearDresses from "./pages/ladiesdress/PartyWearDresses";
import CasualDresses from "./pages/ladiesdress/CasualDresses";
import AllSarees from "./pages/sarees/AllSarees";
import KanjivaramSarees from "./pages/sarees/KanjivaramSarees";
import BanarasiSarees from "./pages/sarees/BanarasiSarees";
import ChiffonSarees from "./pages/sarees/ChiffonSarees";
import OrganzaSarees from "./pages/sarees/OrganzaSarees";
import CottonSarees from "./pages/sarees/CottonSarees";
import PartyWearSarees from "./pages/sarees/PartyWearSarees";
import "./App.css";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="app-main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-brand">MEHRAE COUTURE</span>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className="not-found-home-button">
          <i className="bi bi-house"></i>
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* HOME */}

          <Route path="/" element={<Home />} />

          {/* LOGIN */}

          <Route path="/login" element={<Login />} />

          {/* CART */}

          <Route path="/cart" element={<Cart />} />

          <Route path="/ladies-dresses" element={<AllDresses />} />

          <Route path="/anarkali-dresses" element={<AnarkaliDresses />} />

          <Route path="/kurti-kurtas" element={<KurtiKurtas />} />

          <Route path="/ethnic-suits" element={<EthnicSuits />} />

          <Route path="/party-wear-dresses" element={<PartyWearDresses />} />

          <Route path="/casual-dresses" element={<CasualDresses />} />

          <Route path="/sarees" element={<AllSarees />} />

          <Route path="/kanjivaram-sarees" element={<KanjivaramSarees />} />

          <Route path="/banarasi-sarees" element={<BanarasiSarees />} />

          <Route path="/chiffon-sarees" element={<ChiffonSarees />} />

          <Route path="/organza-sarees" element={<OrganzaSarees />} />

          <Route path="/cotton-sarees" element={<CottonSarees />} />

          <Route path="/party-wear-sarees" element={<PartyWearSarees />} />

          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
