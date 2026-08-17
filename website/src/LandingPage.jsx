import { Link } from 'react-router-dom'
import Header from './Header'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />

      <main className="landing-main">
        <div className="hero-section">
          <h1>Millions of products for your inventory needs</h1>
          <div className="hero-features">
            <div className="feature">✓ Top retail B2B marketplaces</div>
            <div className="feature">✓ Thousands of liquidation auctions</div>
            <div className="feature">✓ Hundred of product categories</div>
            <div className="feature">✓ All lot sizes and conditions</div>
          </div>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">SHOP ALL AUCTIONS</Link>
            <Link to="/marketplaces" className="btn btn-outline">BROWSE MARKETPLACES</Link>
          </div>
        </div>

        <div className="info-section">
          <h2>Search auctions via the largest network of B2B liquidation marketplaces</h2>
          <div className="info-boxes">
            <div className="info-box">No Middleman</div>
            <div className="info-box">All Lot Sizes</div>
            <div className="info-box">Attractive Prices</div>
          </div>
          <button className="btn btn-primary mt-4">REGISTER AS A BUYER</button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-logo footer-logo" role="img" aria-label="wholelot traders">
            <span className="brand-text">wholelot</span>
            <span className="brand-text-second">traders</span>
          </div>
        </div>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-links">
          <a href="#">Terms of Purchase</a>
          <a href="#">Items Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-contact">
          <p>📞 1800-419-0431</p>
          <p>✉ support@wholelottraders.com</p>
        </div>
      </footer>
    </div>
  )
}
