import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (serviceToAdd) => {
        if (!isInCart(serviceToAdd.id)) {
            setCart(prev => [...prev, serviceToAdd])
        } else {
            console.log('Service already in cart')
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(serv => serv.id !== id)
        setCart(cartUpdated)

    }

    const isInCart = (id) => {
        return cart.some(serv => serv.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(serv => {
            totalQuantity += serv.quantity
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    return ( 
        <CartContext.Provider value = {{cart, addItem, removeItem, totalQuantity}} > 
        {children} 
        </CartContext.Provider>

    )
}