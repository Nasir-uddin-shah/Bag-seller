import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contextApis/CartContext';
import { Favorite, ShoppingCart, Stars} from '../icons/Icons'
import './product-card-style.css'
import Modal from '../modal/Modal';

function ProductCard({bag}){
    const {cartItems} = useContext(CartContext);
     const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [showModal, setShowModal] = useState();
    const [productExistInCart, setProductExistInCart] = useState();
    const handleReview =(stars)=>{    
     setRating(stars)   
    }

    const handleBuy = ()=>{
      if(cartItems.length > 0){
        setShowModal(true)
      }else{
        navigate('/checkout',{state:{bag}})
      }
    }

    const confirmBoth = (product)=>{
          console.log('yes confirm both')
          const existInCart = cartItems.some(item => item.id === product.id);
          if(existInCart){
            setProductExistInCart(true)
          }
          else{
            
            navigate("/checkout",{state:{cartItems}})
          }
    }
    
    return(
        <main className="product-card-container">
            <section>
                <div className="image-container">
                  <img src={bag.path} alt={`${bag.title} ${bag.color}`} />
                </div>
                <div className="product-details-container">
                       <p>{bag.title}</p>
                    <div className="product-price-info">
                        <p> {bag.price}</p>  
                        <div className="product-icons-container">
                            <ShoppingCart bag={bag}  />
                            <Favorite />
                     </div>                      
                        
                    </div>
                    <div className="review-stars-container">
                            {
                                [1,2,3,4,5].map((star)=>{
                                    console.log(star)
                                    return(
                                       <Stars
                                         color={                                           
                                            star <= rating ? "gold" : "lightgray"                                        
                                        }
                                         star={star}
                                         handleReview = {handleReview}
                                         
                                       />
                                    )
                                })
                            }
                           
                        </div>
                </div>      
                <button onClick={()=>handleBuy()}>Order</button>  
                <div>{
                    showModal && (
                        <Modal
                        onConfirmSingle={()=>navigate('/checkout',{state:{bag}})}
                        onComfirmBoth={()=>confirmBoth(bag)}
                        />
                    )
                    }</div>     
                    <div>
                        {
                            productExistInCart && (
                                <>
                                <div>product already exist in cart</div>
                                <button onClick={()=>navigate('/cart')}>go to cart</button>
                                </>
                            )
                        }
                    </div>
            </section>            
        </main>
    )
}

export default ProductCard;