import {NavLink} from 'react-router-dom';
import './Navigation.css'
function Navigation(){
    return(
        <nav className="navlinks-main-container">
            <NavLink to='/school' className="navlink">School</NavLink>
            <NavLink to='/college' className="navlink">College</NavLink>
            <NavLink to='/university' className="navlink">University</NavLink>
            <NavLink className="navlink">Travel</NavLink>
            <NavLink to='/cart' className="navlink">Cart</NavLink>
        </nav>
    )
}

export default Navigation;