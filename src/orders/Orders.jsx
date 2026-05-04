import { useContext } from "react";
import { CheckOutContext } from "../contextApis/checkoutContext";

function Orders(){
       const {checkOutItem, dispatch} = useContext(CheckOutContext)
       console.log("what values are we getting in check out: ", checkOutItem)
    return(
        <main>
            {
                checkOutItem.length === 0?
                <p>You haven't anything yet</p>
                : checkOutItem.map((product)=>{
                    console.log("also what are the products in map: ",product)
                    return(
                       <p>{product.id}</p>
                    )
                })
            }
        </main>
    )
}

export default Orders;