import {useState} from 'react'
import { Favorite, ShoppingCart, Stars} from '../icons/Icons'
import './product-card-style.css'

function ProductCard({bag}){
    
    const [rating, setRating] = useState(0)
    const handleReview =(stars)=>{    
     setRating(stars)   

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
            </section>            
        </main>
    )
}

export default ProductCard;