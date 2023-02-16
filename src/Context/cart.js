import { createContext, useContext, useState } from "react";

const initialState = {
    cart:[],
    cartItemCount: ()=>0,
    addToCart: ()=>null,
    removeFromCart:()=>null,
    incQuantity: ()=>null, 
    decQuantity: ()=>null
}

const CartContext = createContext(initialState);

const useCart= ()=>useContext(CartContext)

// provider 
const CartProvider = ({children}) =>{
    const [cart, setCart] = useState(initialState.cart)

    const cartItemCount =()=>{
        return cart.reduce((acc,item)=> acc + item.quantity, 0)
    }

    const addToCart = (product)=>{
        const productId = cart.findIndex(item=>item.product.id === product.id)
        if(productId !== -1){
            incQuantity(product.id)
        }else{
            setCart([...cart, {product, quantity:1}])
        }
    }

    const removeFromCart=(productId)=>{
        setCart(cart.filter(item=>item.product.id !== productId))
    }

    const incQuantity = (productId) =>{
        const copy = cart.slice()
        const prodId = copy.findIndex(item=>item.product.id === productId)
        if(prodId !== -1){
            copy[prodId].quantity += 1
            setCart(copy)
        }
    }
    const decQuantity = (productId) =>{
        const copy = cart.slice()
        const prodId = copy.findIndex(item=>item.product.id === productId)
        if(prodId !== -1){
            copy[prodId].quantity -= 1
            setCart(copy)
        }
    }

    return(
        <CartContext.Provider value={{cart,cartItemCount, addToCart, removeFromCart, incQuantity, decQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export {useCart, CartProvider}