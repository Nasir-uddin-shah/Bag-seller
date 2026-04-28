import { useContext, useState } from 'react';
import { CartContext } from '../contextApis/CartContext';
import './checkout.css'
import { useLocation } from 'react-router-dom';


function CheckOut(){
    const {cartItems,total} = useContext(CartContext);
    const {state} = useLocation();
   const [checkOutItems, setCheckOutItems] = useState();
  // const {state:{cartItems}}=useLocation();
    
    const cartProducts = state?.cartItems
    const singleOrderItem = [state?.bag]

    
    // const cartCheckOutItems = cartItems;
    return(
        <main className="checkout-main-style">
          {/* <div className="spinner"></div> */}
            <form className="checkout-form-style">
                <input
                  placeholder="enter your name"
                  name="name"
                  className="checkout-form-input" />
                <input
                  placeholder="enter you address"
                  name="address"
                  className="checkout-form-input" />
                <input
                  placeholder="phone number"
                  name="phone"
                  className="checkout-form-input" />
                  <select>
                    <option>COD</option>
                  </select>
            </form>
             {/* <p>you have total of {items.length}</p>
            <p>total: </p> */}
            <div className='checkout-date-time-style'>
               <p>{
                  new Date().toLocaleDateString()
                
                }</p>
                <p>{new Date().toLocaleTimeString()}</p>
              </div>

        </main>
    )
}

export default CheckOut;