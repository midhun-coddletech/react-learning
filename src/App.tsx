import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import ProductCard from './components/ProductCard';

const App = function () {
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="head">LOGIN</h1>
        <LoginForm />
        <div className="or-bar-container">
          <div className="horizontal-bar" />
          <span className="or-text">OR</span>
        </div>
      </div>
      <h2 className="product__page">Products</h2>
      <div className="products__container">
        <ProductCard
          title="5 star"
          src="productimg/5Star.jpg"
          price={95}
          description="This smooth milk chocolate bar is packed with crunchy biscuit bits and a chewy caramel centre"
        />
        <ProductCard
          title="Candyman"
          src="productimg/candyman.jpg"
          price={95}
          description="The Candyman Eclairs includes an outer shell of butterscotch and is filled with a mixture of vanilla"
        />
        <ProductCard
          title="Kaccha"
          src="productimg/kacha.jpg"
          price={95}
          description="Candy with the perfect taste of raw-mango, giving you a nostalgic feel about the olden days."
        />
        <ProductCard
          title="Little Hearts"
          src="productimg/little-hearts.jpg"
          price={95}
          description="Little Hearts. Crunchy, sugar-glazed and oh-so-tempting, this heart-shaped biscuit is the perfect snack."
        />
        <ProductCard
          title="Mango Bite"
          src="productimg/mango-bite.jpg"
          price={95}
          description="Made with the goodness of real, juicy mangoes, Mango Bite has been brightening days since 1989"
        />
        <ProductCard
          title="Melody"
          src="productimg/melody.jpg"
          price={95}
          description="Melody comes with an irresistible layer of caramel on the outside and a delightful chocolate filling within"
        />
        <ProductCard
          title="Parles"
          src="productimg/parles.jpg"
          price={95}
          description="Crafted with handpicked potatoes, Parles wafers are delightfully crunchy and light."
        />
      </div>
    </div>
  );
};

export default App;
