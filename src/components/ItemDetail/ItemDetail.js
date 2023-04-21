import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, price, img, stock, description}) => {
    const [quantity, setQuantity] = useState (0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const serviceToAdd = {
            id, name, price, quantity
        }
        addItem(serviceToAdd)

        setQuantity(quantity)

    }
        return (
            <div style={{background: '#DEB992', margin: 10}}>
                <h2>{name}</h2>
                <img src={img} alt={name} style={{ width: 500}}/>
                <h3>Price: {price}</h3>
                <p>Description: {description}</p>
                <p>Stock: {stock}</p>
                <footer>
                    {
                        quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                        ) : (
                            <Link to='/cart'>Check Out</Link>
                        )
                    }
                </footer>
                

            </div>
        )
    }

export default ItemDetail