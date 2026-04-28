import './modal.css';

export default function Modal({
    title, message, onConfirmCart, onConfirmSingle, onComfirmBoth, onClose
}){
    return(
        <main className="overlay">
            <div className="modal">
               <h2>{title}</h2>
               <p>{message}</p>
               <button onClick={()=>onConfirmSingle()}>Buy this one item</button>
               <button onClick={()=>onConfirmCart()}>Continue with card</button>
               <button onClick={()=>onComfirmBoth()}>Continue with both</button>
               <button onClick={()=>onClose()}>cancel</button>
            </div>
        </main>
    )
}