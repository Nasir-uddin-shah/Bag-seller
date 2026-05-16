import { useState } from "react";

import AddProduct from "../../component/AddProduct";
import ProductStats from "../../productstats/ProductStats";

export default function CollegeProduct(){
    const [activeTab, setActiveTab] = useState("stats");
    return(
        <main>
            <nav>
                <button onClick={()=>setActiveTab("stats")}>Product stats</button>
                <button onClick={()=>setActiveTab("add")}>Add product</button>
                
            </nav>
            {
                activeTab === 'add'?                   
                    
                     <div>
                       <AddProduct />
                    </div> :

                    <div>
                       <ProductStats />
                    </div> 

               

            }
           
        </main>
    )
}