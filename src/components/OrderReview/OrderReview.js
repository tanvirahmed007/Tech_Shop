import {React} from 'react';
import './OrderReview.css';
import UseCart from '../../Hooks/UseCart/UseCart';
import UseProducts from '../../Hooks/UseProducts/UseProducts';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import {useNavigate} from 'react-router-dom';





const OrderReview = () => {
    const [products] = UseProducts();
    const [cart, setCart] = UseCart(products);
    const history = useNavigate();

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    };

    const handlePlaceOrder = () => {
        history('/placeorder');
        
        setCart([]);
        clearTheCart();
    }


  return (
    <div className='cart-review'>
        <div className="cart-details">
          {
            cart.map(product => <ReviewItems 
              key={product.key}
              product={product}
              handleRemove={handleRemove}
              
              />)
          }
        </div>
        <div className="side-cart">
          <Cart cart={cart}>
            <button onClick={handlePlaceOrder}>Checkout</button>
          </Cart>
        </div>
    </div>
  )
}

export default OrderReview