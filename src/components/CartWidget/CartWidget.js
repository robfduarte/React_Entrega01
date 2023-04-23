import cartLogo from './Assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity, total } = useContext(CartContext)

    return (
        <div>
            <img src={cartLogo} alt="cart widget" />
            {totalQuantity} total ${total}
        </div>
        
    )
}

export default CartWidget