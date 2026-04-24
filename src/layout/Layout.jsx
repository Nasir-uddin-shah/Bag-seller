import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SidebarMain from "../sidebar/SidebarMain";
import './layout.css'
function Layout(){
    return(
        <main className="layout-container">
         <Navbar />
         
         
         <div className="layout-subcontainer">
            <section className="sidebar-layout">
              <SidebarMain />
            </section>
            
            <section className="outlet-style">
                <Outlet />
            </section>
        </div>
        </main>
    )
}

export default Layout;