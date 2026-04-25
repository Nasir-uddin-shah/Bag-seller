import {useContext} from 'react';
import {CartContext} from '../../contextApis/CartContext'
import {NavLink} from 'react-router-dom';
import { FaSearch,FaShoppingCart as ShoppingCart, FaHeart } from "react-icons/fa";
import './Navigation.css'
function Navigation(){
    const {cartItems} = useContext(CartContext);
    return(
        <nav className="navlinks-main-container">
            <NavLink to='/school' className="navlink">School</NavLink>
            <NavLink to='/college' className="navlink">College</NavLink>
            <NavLink to='/university' className="navlink">University </NavLink>
            <NavLink className="navlink">Travel</NavLink>
            <NavLink to='/cart' className="navlink shoppingcart"><ShoppingCart  /><span className="shoppingcart-icon">{cartItems.length}</span></NavLink>
        </nav>
    )
}

export default Navigation;