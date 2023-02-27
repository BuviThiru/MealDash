import './cart.css'

let menu_img = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

import { useDispatch, useSelector } from 'react-redux'
import FoodDetail from '../foodDetail/FoodDetail'
import emptyCart from './../../utilities/images/emptyCart.png'
import { Link } from 'react-router-dom'
import { clearCart } from '../../utilities/slice'



const Cart = () => {


    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()


    function handleClick() {
        dispatch(clearCart())
    }
    // console.log(cartItems)
    let length = cartItems.length
    let total = 0;
    if (!length) return (<div className='empty-cart-container'><img src={emptyCart} className="empty-cart" />
        <div className='go-home'>Add your favourite food items 🡆 <Link to="/"><span className='home1 blink'>HOME</span></Link></div>
    </div>)
    return (

        <div className='cartItem-container'>
            <div className='cart-left'>
              
                {cartItems.map(function (cartItem, index) { total = total + (cartItem.price) / 100*cartItem.quantity; return <FoodDetail key={index} cartItem={cartItem} /> })}
            
                </div>
            <div className='cart-right'>
                <button className='total'>Total : {total}</button>
                <button className='total' onClick={handleClick}> Clear Cart</button>
            </div>
        </div>


    )
}

export default Cart