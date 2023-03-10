import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar ">
            <h1>Professional Services</h1>
            <div>
                <button className='btn btn-dark'>Web Design</button>
                <button className='btn btn-dark'>Digital Marketing</button>
                <button className='btn btn-dark'>Web Development</button>
                <button className='btn btn-dark'>Website Maintance</button>
                <button className='btn btn-dark'>Security Auditing</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar