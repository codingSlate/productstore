import { createContext, useContext } from "react";

const initialState = {
    cart:{},
    cartItemCount: ()=>0,
    addToCart: ()=>null,
    removeFromCart:()=>null,
    incQuentity: ()=>null, 
    decQuentity: ()=>null
}