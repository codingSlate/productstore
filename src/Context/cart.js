import { createContext, useContext, useState } from "react";

const initialState = {
    cart:{},
    cartItemCount: ()=>0,
    addToCart: ()=>null,
    removeFromCart:()=>null,
    incQuantity: ()=>null, 
    decQuantity: ()=>null
}

const CartContext = createContext(initialState);

const useCart= ()=>useContext(CartContext)

// provider 
const CartProvider = ({childern}) =>{
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

    const removeFromCart=()=>{
        setCart(cart.filter(item=>item.product.id !== product.id))
    }

    const incQuantity = () =>{
        const copy = cart.slice()
        const productId = copy.findIndex(item=>item.product.id === product.id)
        if(productId !== -1){
            copy[productId].quantity += 1
            setCart(copy)
        }
    }
    const decQuantity = () =>{
        const copy = cart.slice()
        const productId = copy.findIndex(item=>item.product.id === product.id)
        if(productId !== -1){
            copy[productId].quantity -= 1
            setCart(copy)
        }
    }

    return(
        <CartContext.Provider value={{cart,cartItemCount, addToCart, removeFromCart, incQuantity, decQuantity}}>
            {childern}
        </CartContext.Provider>
    )
}