import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (serviceToAdd) => {
        if (!isInCart(serviceToAdd.id)) {
            setCart(prev => [...prev, serviceToAdd])
        } else {
            const updatedCart = cart.map(serv => {
                if(serv.id == serviceToAdd.id) {
                    return { ...serv, quantity: serviceToAdd.quantity}
                } else {
                    return serv
                }
            })
            setCart(updatedCart)
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


    const getTotal = () => {
        let total = 0
        cart.forEach(serv => {
            total += serv.quantity * serv.price
        })
        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return ( 
        <CartContext.Provider value = {{cart, addItem, removeItem, totalQuantity, total, clearCart}} > 
        {children} 
        </CartContext.Provider>

    )
}