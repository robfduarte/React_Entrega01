import { useState } from "react"

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    return (
        <div>
            <h4>{quantity}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(quantity)} disabled={ stock === 0}>Add to cart</button>
        </div>
    )
}

export default ItemCount