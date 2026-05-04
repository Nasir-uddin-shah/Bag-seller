import { NavLink } from "react-router-dom";
import './adminsidebar.css'
function AdminSidebar(){
    return(
        <main className="admin-sidebar-container">
           <NavLink to='schoolbags' className='admin-sidebar-navlink' >School Bags</NavLink>
           <NavLink to='collegebags' className='admin-sidebar-navlink' >College Bags</NavLink>
           <NavLink to='travelbags' className='admin-sidebar-navlink' >Travel Bags</NavLink>
           <NavLink to='universitybags' className='admin-sidebar-navlink' >University bags</NavLink>
        </main>
    )
}

export default AdminSidebar;