import {useEffect, useState} from 'react';
import './School.css';
import Schoolbags from './Schoolbags/Schoolbags';


const bagListStyle ={
    // direction: 'ltr',
    // width: '100vw',
    fontSize: '1.5vw',
    width: 'calc(100vw - 17%)',
    // marginLeft:'17%',
    transition:'width 1s ease-in'
}

function School(){
    
    const [toggle, setToggle] = useState(true);
    const [sidebarStyle, setSideBarStyle] = useState({
        width: '17%',
        position: 'fixed',
        top: "9.4%",
        display: 'flex',
        height: '100vh',
        
    });

    const controlSideBar = ()=>{
     
     setToggle(!toggle)
    }
 return(
    <>
    {/* <section style={toggle? sidebarStyle:{}} className="sidebar-style">

             <button
           
                className="arrow-style"
                onClick={()=>controlSideBar()}
              >{'=>'}
              
              </button>
              <div
                style={toggle? {display: "block"}:{}}
               className="sidebar-content">
                 <section>Age range</section>
                 <section>Grade</section>
                 <section>price</section>
              </div>
         
        </section> */}
   
    <main className="school-main-container">
        
       
        <section style={toggle? bagListStyle:{}} className="bags-list-style">
               <Schoolbags />
            </section>
    </main>
    </>
 )
}

export default School;