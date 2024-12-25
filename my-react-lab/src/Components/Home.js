import React from "react";

function Home() {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Elevate</h1> 
           <h1> Your Style ✨</h1>
          <p>
            Experience the perfect blend of comfort and fashion with cutting-edge, padded leather jackets designed for unmatched style and ease.
          </p>
          <button className="shop-button">Quick Shop Access</button>
        </div>
        <div className="product-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Luxurious Puffer"
            className="product-image"
          />
          <div className="product-info">
            <h2>Luxurious Puffer</h2>
            <p>Urban Collection</p>
            <p className="price">$675.00</p>
            <div className="sizes">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section">
        <div className="product-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Cozy Coat Black"
            className="product-image"
          />
          <div className="product-info">
            <h2>Cozy Coat Black</h2>
            <p>Dark Night Collection</p>
            <p className="price">$550.00</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>

        <div className="product-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Cush Coat"
            className="product-image"
          />
          <div className="product-info">
            <h2>Cush Coat</h2>
            <p>Urban Collection</p>
            <p className="price">$325.00</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Jacket"
            className="product-image"
          />
          <div className="product-info">
            <h2>Jacket</h2>
            <p>Dark Night Collection</p>
            <p className="price">$110.00</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
