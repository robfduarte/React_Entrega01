import './CartWidget.css'
import cartLogo from './Assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity, total } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cartLogo} alt="cart widget" />
            {totalQuantity} Total ${total}
        </div>
        
    )
}

export default CartWidget