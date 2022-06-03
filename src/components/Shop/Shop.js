import React, { useEffect, useState } from 'react';
import './Shop.css';

import Product from '../Product/Product.js';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
const [displaySearchProducts, setDisplaySearchProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setDisplaySearchProducts(data);
      } 
        
      )
  }, []);



  // store in local Storage

  useEffect(() => {
    
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for(const key in savedCart){
        const addedProduct = products.find(product => product.key === key);
        if(addedProduct){
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
      
    }
  }, [products]);

  const clickHandleToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

const searchHandle = (event) => {
  const searchValue = event.target.value;
  const searchedProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
  setDisplaySearchProducts(searchedProducts);
  
};


  return (
    <div>
      <div className="search-product">
          <input onChange={searchHandle} type="text" placeholder="Search for products" />
      </div>
      <div className='product-details'>

        
          
          <div className="products">
            {
              displaySearchProducts.map(product => <Product 
                product={product} 
                key={product.key}
                clickHandleToCart={clickHandleToCart}
                />)
            }
          </div>

          <div className="side-pannel">
            <Cart cart={cart} />
          </div>
      </div>
    </div>
  )
}



export default Shop