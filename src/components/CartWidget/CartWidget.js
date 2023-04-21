import cartLogo from './Assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <img src={cartLogo} alt="cart widget" />
            {totalQuantity}
        </div>
        
    )
}

export default CartWidget