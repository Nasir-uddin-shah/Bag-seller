import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contextApis/CartContext';
import { CheckOutContext } from '../contextApis/checkoutContext';
import './checkout.css'
import { useLocation } from 'react-router-dom';


function CheckOut(){
    const {cartItems,total} = useContext(CartContext);
    const {dispatch}= useContext(CheckOutContext)
    const {state} = useLocation();
    const from = state?.from;
   const [checkOutItems, setCheckOutItems] = useState([]);
   const [grandTotal, setGrandTotal] = useState([]);
   const [grandTotalQuantity, setGrandTotalQuantity] = useState(0);
   
  // const {state:{cartItems}}=useLocation();    
    // const cartProducts = state?.cartItems
    // const singleOrderItem = [state?.bag]
       console.log("check out times: ", checkOutItems);
    useEffect(()=>{
      let item = [];
      switch(from){
      case 'cart':
            item = state.cartItems;
            break;
      case 'both':
           item = [...cartItems, state.bag];
           break;
       case 'single':
           item = [{...state.bag, quantity:1}];     
           break;
       default:  
          item= []      
    } 
      setCheckOutItems(item.filter(item => item?.price !== undefined));
    },[cartItems,state,from])
    
    useEffect(()=>{
      const total = checkOutItems.reduce((sum, item)=>{
        return (sum + (parseInt(item?.subtotal) || 0))
      },0);
      const totalquantity = checkOutItems.reduce((sum,item)=>{
        return (sum + parseInt(item?.quantity)|| 0)
      },0)
      setGrandTotal(total);
      setGrandTotalQuantity(totalquantity);
    },[checkOutItems])
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
             <p>you have total of {grandTotalQuantity}</p>
            <p>Grand total:{grandTotal} </p>
            <div className='checkout-date-time-style'>
               <p>{
                  new Date().toLocaleDateString()
                
                }</p>
                <p>{new Date().toLocaleTimeString()}</p>
              </div>
             <button onClick={()=>dispatch({type:'ADD ORDERS',payload:checkOutItems})} >Order</button>
        </main>
    )
}

export default CheckOut;