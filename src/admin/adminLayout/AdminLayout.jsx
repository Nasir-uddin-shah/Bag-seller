import { Outlet } from "react-router-dom";
import AdminSidebar from "../adminsidebar/AdminSidebar";
import './adminlayout.css';
function AdminLayout(){
    return(
        <main className="admin-layout-container">
            <div className="admin-sidebar">
                <AdminSidebar />
            </div>
            <div className="admin-outlet">
              <Outlet />
            </div>
        </main>
    )
}

export default AdminLayout;