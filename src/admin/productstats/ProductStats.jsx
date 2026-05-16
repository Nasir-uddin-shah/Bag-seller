import { useState, useEffect } from "react";
import { getAllProducts } from "../services/productServices";
import './productstats.css'

export default function ProductStats(){
    const [allCollegeBags, setAllCollegeBags] = useState([]);
     console.log("the state is: ", allCollegeBags);
    useEffect(()=>{
        (async()=>{
            try{

            //    const result = await axios.get('http://localhost:3000/v1/getAllCollegeBags');
            //    console.log("what do we get in result: ", result)

               const data = await getAllProducts();
               console.log("what do we get in data: ", data);
                setAllCollegeBags(data);
            }catch(error){
              console.log("what is Error response: ",error);
              
            }
            
        })()
      
    },[])
    return(
        <main>
            
            {
                allCollegeBags.length === 0 ?
                  <div className="spinner-div"></div> :
                  <div className="college-bags-container-style">
                    <div className="college-bag-style">
                        <p className="flex-1 head-p">Title</p>
                        <p className="flex-1 head-p">Brand</p>
                        <p className="flex-1 head-p">Category_name</p>
                         <p className="flex-1 head-p">Price</p>
                          <p className="flex-1 head-p">Stock</p>
                           <p className="flex-1 head-p">Color</p>
                           <p className="flex-1 head-p">Image</p>
                    </div>
                     {
                        allCollegeBags.map((bag)=>{
                            return(
                                <div className="college-bag-style ">
                                    
                                        <p className="flex-1">{bag.title}</p>
                                        <p className="flex-1">{bag.brand}</p>
                                        <p className="flex-1">{bag.category_name}</p>
                                        <p className="flex-1">{bag.price}</p>
                                        <p className="flex-1">{bag.stock}</p>
                                        <p className="flex-1">{bag.color}</p>
                                    
                                    <div className="w-[15px] h-[15px] flex border">
                                      <img className="w-[100%] h-[100%]" src={`http://localhost:3000/${bag.imagespath[0]}`} />
                                    </div>
                                </div>
                            )
                        })
                     }
                  </div>
            }
        </main>
    )
}