import {useState} from 'react'
import ProductCard from "../../components/product/ProductCard";
import './college-bags.css'

import {Data} from '../../dataPoint/DataPoint'

function CollegeBags(){
    console.log("what is inside data: ",Data)
    const [productlist, setProductlist] = useState(Data)
 return(
    <main className="college-bags-container">
        {
            productlist.map((bag)=>{
                return(
                    <section>
                        <ProductCard bag={bag}  />
                    </section>
                )
            })
        }
        
    </main>
 )
}

export default CollegeBags;