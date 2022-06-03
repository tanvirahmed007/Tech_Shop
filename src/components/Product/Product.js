import React from 'react';
import './Product.css';

const Product = (props) => {
  // console.log(props);
  const {name, price, img, seller, stock, ratings} = props.product;
  return (
    <div className='productData'>
      <div className="product-info">
        <img className='product-img' src={img} alt=""/>
        <div className="product-info-text">
          <h3>{name}</h3>
          <p>{seller}</p>
          <p>{stock} in stock</p>
          <p>{ratings} ratings</p>
          <p>${price}</p>
          <button 
          
          onClick={() => props.clickHandleToCart(props.product)}
          className='purchase-btn'
          
          >Add to Cart</button>
        </div>
      </div>
      
    </div>
  )
}

export default Product