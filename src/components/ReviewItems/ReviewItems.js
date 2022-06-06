import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const {name, price, quantity, img, key} = props.product;
    const {handleRemove} = props;
  return (
    <div className='cart-info'>
      <img className='cart-img' src={img} alt="" />
        <div className="cart-container">
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{quantity}</p>
          <button onClick={()=>handleRemove(key)}>Remove</button>
        </div>
        
    </div>
    
  )
}

export default ReviewItems