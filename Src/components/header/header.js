import { Link } from "react-router-dom"
import logo from "../../utilities/images/logo1.png"
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux"

function Header() {
    const cartItems = useSelector(store =>store.cart.items)
    console.log(cartItems)
    return (
        <section className="header">
            <div>
            <img src={logo} alt="logo" className='logo' />
            </div>
            <div className='rightHeader'>
                <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <div className="cart-container">
                    <li > <Link to='/cart' ><FontAwesomeIcon icon={faShoppingCart} /><span className="cart-value">{cartItems.length}</span></Link></li>
                    </div>
                </ul>
            </div>
        </section>
    )

}
export default Header