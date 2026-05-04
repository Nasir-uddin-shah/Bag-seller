import { createContext,useReducer } from "react";

export const CheckOutContext = createContext();
const initialState =[];

function CheckOutReducer(state, action){
  console.log("In reducer action.payload is: ", action.payload)
  console.log("what is in state: ", state);
    switch(action.type){
       case 'ADD ORDERS':
        {
            return [...state, ...action.payload]
        }
    }
}

export const CheckOutProvider = ({children})=>{
  const [checkOutItem, dispatch] = useReducer(CheckOutReducer, initialState);

  return <CheckOutContext.Provider value={{checkOutItem, dispatch}}>
    {children}
  </CheckOutContext.Provider>
}