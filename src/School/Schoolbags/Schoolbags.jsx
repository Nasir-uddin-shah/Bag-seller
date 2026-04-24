import {useState} from 'react';
import { FaSearch,FaShoppingCart, FaHeart } from "react-icons/fa";
import './Schoolbags.css';
import singleBag from '../../../public/singlebag.png'


const productDetailStyle ={
    position: 'fixed',
    top:'0',
    left:'0',
    zIndex: '999',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgb(0,0,0,0.3)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // display: 'block'
}

function Schoolbags(){
    const [totalbags, setTotalBags] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

    const [showDetails, setShowDetails] = useState(false);
    const [fav, setFav] = useState(false);
    const [favorites ,setFavorites]= useState([]);

    const toggleFav = (index) => {
        setFavorites((prev) =>
            prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
        );
        };

    const expandTheCard = (index)=>{
        console.log("show details: ",showDetails)
        if(showDetails === false){
            setShowDetails(true)
        }else{
            setShowDetails(false)
        }
    }
    return(
        <>
        <div style={showDetails?
         productDetailStyle
        :
        {}} 
        className="product-details-style" 
         onClick={
                    (index)=>{
                        
                        expandTheCard(index);
                    }
                }
        >
            <div 
            onClick={(e) => e.stopPropagation()}
            >
               this is School bag details
            </div>
            
            </div>
        <div className="input-container-div">
           <div className="input-container-inner"> 
            <FaSearch size={19} className="search-icon"/>
            <input
            type='text'
            className="searchBar-style"
            />
            </div>
          </div>
        <main className='school-bags-main-container'>
           
           {
            totalbags.map((bag,index)=>{
                return(
                <div  className="school-bags-card"
                 
                >
                    <img src={singleBag} alt='singlebag'
                      className="singlebagImg"
                      onClick={
                    (index)=>{
                        
                        expandTheCard(index);
                    }
                }
                    />
                    <article className="card-articles">
                        <p>title</p>
                        <p>price</p>
                        <div className="order-icons-container">
                            <div>
                                <FaShoppingCart
                                 size={18} />
                                <FaHeart size={18}
                                
                            color={favorites.includes(index) ? "red" : ""}
                            onClick={(e) => {
                                e.stopPropagation(); 
                                toggleFav(index);
                            }}
                               
                                />
                            </div>
                            <button>order</button>
                        </div>
                    </article>
                </div>)
            })
           }
        </main>
        </>
    )
}

export default Schoolbags;