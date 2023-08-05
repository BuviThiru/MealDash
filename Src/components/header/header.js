import { Link } from "react-router-dom"
import logo from "../../utilities/images/logo1.png"
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux"
import { useState } from "react"
import { motion } from "framer-motion"

function Header() {
    const [isopen,setIsopen] = useState(false)
    function handleClick(){
        setIsopen(!isopen)
    }
    const cartItems = useSelector(store => store.cart.items)
 
    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    // console.log(isopen)
    return (
        <section className="header">
            <div>
                <img src={logo} alt="logo" className='logo' />
            </div>
            
            <div className="hamburger" onClick={()=>handleClick()} >
                
                <span></span>
                <span></span>
                <span></span>                
                </div>
            {isopen?<ul className="list1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <div className="cart-container">
                        <li > <Link to='/cart' ><FontAwesomeIcon icon={faShoppingCart} /><span className="cart-value1">{totalQuantity}</span></Link></li>
                    </div>
                </ul>:""}

               
             
            <div className='rightHeader'>
                <ul className="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <div className="cart-container">
                        <li > <Link to='/cart' ><FontAwesomeIcon icon={faShoppingCart} /><span className="cart-value">{totalQuantity}</span></Link></li>
                    </div>
                </ul>
            </div>
        </section>
    )

}
export default Header