import React from 'react';
import './ProductCard.css';

function ProductCard(props: {
  src: string;
  title: string;
  price: number;
  description: string;
}) {
  const { src, title, price, description } = props;
  return (
    <div className="product__card">
      <h2 className="product__head">{title}</h2>
      <div className="image__container">
        <img src={src} alt="" className="product__image" />
      </div>
      <p className="price">Price ₹{price}</p>
      <p className="product__description">{description}</p>
    </div>
  );
}

export default ProductCard;
