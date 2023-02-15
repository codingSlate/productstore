import { createContext, useContext, useState } from "react";

const initialState = {
    cart:{},
    cartItemCount: ()=>0,
    addToCart: ()=>null,
    removeFromCart:()=>null,
    incQuentity: ()=>null, 
    decQuentity: ()=>null
}

const CartContext = createContext(initialState);

const useCart= ()=>useContext(CartContext)

// provider 
const CartProvider = ({childern}) =>{
    const [cart, setCart] = useState(initialState.cart)
   
}