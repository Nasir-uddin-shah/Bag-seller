import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Navbar/Navbar';
import School from './School/School';
import CollegeBags from './pages/college/CollegeBags';
import Sidebar from './sidebar/SidebarMain';
import './App.css'
import Layout from './layout/Layout';
import Cart from './components/cart/Cart';
import University from './pages/university/University';
import CheckOut from './checkout/CheckOut';
import Orders from './orders/Orders';
import AdminLayout from './admin/adminLayout/AdminLayout';
import Dashboard from './admin/Dashboard';
import SchoolProduct from './admin/products-category/school/SchoolProduct';
import CollegeProduct from './admin/products-category/college/CollegProduct';
// import './App.css'

function App() {
  

  return (
   <>
    <Routes>
       <Route path='/' element={<Layout />}>
          <Route path='/school' element={<School />} />
          <Route path='/college' element={<CollegeBags />} />
          <Route path="university" element={<University />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Orders />} />
       </Route>
       <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="schoolbags" element={<SchoolProduct />} />
          <Route path='collegebags' element={<CollegeProduct />} />
       </Route>
    </Routes>
    </>
   
  )
}

export default App;


