import {useContext} from 'react';
import {useState} from 'react';
import { FaSearch,FaShoppingCart, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CartContext } from '../../contextApis/CartContext';


export function ShoppingCart({bag}){  
     
    const {cartItems, dispatch, total, isInCart} = useContext(CartContext);    
    return(
        <div>
            <FaShoppingCart
             color={isInCart(bag.id)? 'red':'green'}
            onClick= {
              
                ()=>{
                    
                    dispatch({type: 'ADD',payload: bag})
                   
                }
            }
            />
        </div>
    )
}

export function Favorite(){
    const [colr, setColr] = useState('')

     const addToFavorate = ()=>{
        setColr('red');
      }
    return(
        <div>
           
            <FaHeart color={colr} onClick={()=>addToFavorate()}/>
        </div>
    )
}

export function Search(){
    return(
        <div>
            <FaSearch />
        </div>
    )
}

export function Stars({color,handleReview,star}){

    return(
        <div>
            <FaStar color={color}
            onClick={
                
                ()=>{
                   
                    handleReview(star)
                    }
                    }
            />
        </div>
    )
}