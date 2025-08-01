import React from 'react';
import './FeaturedProducts.css';

import minimalDeskImage from '../../assets/img1.jpg';
import beautifulLampsImage from '../../assets/img2.jpg';
import goldenOalaSofaImage from '../../assets/ing3.jpg';
import chairSofaImage from '../../assets/img4.jpg';
import accessoriesImage from '../../assets/img4.jpg';

const products = [
  { id: 1, name: 'Minimal Desk', price: '$600', image: minimalDeskImage },
  { id: 2, name: 'Beautiful Lamps', price: '$150', image: beautifulLampsImage },
  { id: 3, name: 'Golden Oala Sofa', price: '$250', image: goldenOalaSofaImage },
  { id: 4, name: 'Chair & Sofa', price: '$400', image: chairSofaImage },
  { id: 5, name: 'Accessories', price: '$50', image: accessoriesImage },
];

const FeaturedProducts = () => {
  return (
    <div className="featured-products-container">
      <h2>Featured Products</h2>
      <p className="featured-products-description">
        A fusion of comfort, style and quality without compromise. An investment in unrivalled craftsmanship and design to make your home a very special place.
      </p>

      <div className="product-grid">
        <div className="main-product-card">
          <img src={products[0].image} alt={products[0].name} />
          <div className="product-info">
            <h3>{products[0].name}</h3>
            <p>{products[0].price}</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>

        <div className="sub-product-grid">
          {products.slice(1).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="shop-now-btn">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;