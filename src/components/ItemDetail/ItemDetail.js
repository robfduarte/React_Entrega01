import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, price, img, stock, description}) => {
    const [quantity, setQuantity] = useState (0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const serviceToAdd = {
            id, name, price, quantity
        }
        setQuantity(quantity)
        addItem(serviceToAdd)
        setNotification('success' , `Added correctly ${quantity} ${name}`, 1)

    }
        return (
            <div style={{background: '#DEB992', margin: 10}}>
                <h2>{name}</h2>
                <img src={img} alt={name} style={{ width: 500}}/>
                <h3>Price: {price}</h3>
                <p>Description: {description}</p>
                <p>Stock: {stock}</p>
                <footer>
                      {stock > 0 ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <div><h4 style={{color: 'red'}}>Service out of stock</h4></div>}
                </footer>
                

            </div>
        )
    }

export default ItemDetail