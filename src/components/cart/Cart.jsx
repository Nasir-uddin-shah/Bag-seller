import {useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../../contextApis/CartContext';

import './cart.css';
function Cart(){
    const {cartItems, dispatch, total} = useContext(CartContext);
    console.log("what is inisde cartItems: ", cartItems)
    return(
       <main> 
            <div>
            {cartItems.map(product => 
                <main className="cart-main-container">
                    <div className="cart-image-container">
                    <img src={product.path} alt="bag" className="cart-image" />
                    </div>
                    <div className="cart-product-detail">
                        <p>{product.title}</p>
                        <p>Rs{product.price}</p>
                        <p>Rs:{product.subtotal}</p>
                    </div>
                    <div>
                    <p>quatity:{product.quantity}</p>
                    {<button onClick={()=>dispatch({type:'INCREASE', payload:product.id})}>+</button>}
                    </div>
                </main>
            )}
            <p>total: {total}</p>
            </div>

            <div>
                checkout
            </div>
      </main>
    )

    
}

export default Cart;