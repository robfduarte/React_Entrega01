import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)

    const { totalQuantity, total } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            <div>
            {
                cart.map(serv => {
                    return (
                        <div key={serv.id}>
                            <p>Service added: {serv.name} </p>
                            <p>Quantity: {serv.quantity} </p>
                            <p>Total: {total} </p>
                        </div>
                    )
                })
            }
            </div>
            <Link to='/checkout'>Proceed checkout</Link>
        </div>
    )
}

export default Cart