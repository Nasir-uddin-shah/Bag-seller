import {createContext, useReducer} from 'react';

export const CartContext = createContext();

const initialState = [];

function cartReducer(state, action){
   
    switch(action.type){
        case 'ADD':{
         const existingItem = state.find(item => item.id === action.payload.id);

         if(existingItem){
            return state.map(item =>
                item.id === action.payload.id
                ? {...item, quantity: item.quantity + 1}
                : item
            );
         }

         return [...state, {...action.payload, quantity: 1}];
        }

        case 'INCREASE':
            return state.map(item =>
                item.id === action.payload
                ? {...item, quantity: item.quantity + 1,
                     subtotal: item.price * ( item.quantity + 1)}
                : item
            );

        case 'DECREASE':
            return state.map(item =>
                item.id === action.payload
                ? {...item, quantity:item.quantity -1}
                :item
            )
            .filter(item => item.quantity > 0);

        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);
        case 'CLEAR':
            return [];
        
            default:
                return state;
    }
}


export const CartProvider =({children}) =>{
    const [cartItems, dispatch]= useReducer(cartReducer, initialState);

    const total = cartItems.reduce((sum, item )=> sum + item.price * item.quantity,0);
    const cartIds = new Set(cartItems.map(item => item.id));

    const isInCart = (id) => cartIds.has(id);

    return <CartContext.Provider value={{cartItems, dispatch, total,isInCart}}>
        {children}
    </CartContext.Provider>
}