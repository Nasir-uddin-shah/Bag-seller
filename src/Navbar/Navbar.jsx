import {NavLink} from 'react-router-dom';
import Navigation from './Navigation/Navigation'
import './Navbar.css';
import pic from '../../public/nasir.png'
function Navbar(){
    return(
        <main id="main-navbar-style">
            
            <a className="logo-style">Bagify</a>
           
            <section className='nav-section'>
                <Navigation />
            </section>
            <section className="navbar-image">
                <img src={pic} alt="" className="navbar-image" />
            </section>
        </main>
    )
}

export default Navbar;