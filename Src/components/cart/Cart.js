import './cart.css'

let menu_img = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

import { useSelector } from 'react-redux'
import FoodDetail from '../foodDetail/FoodDetail'



const Cart = () => {
    const cartItems = useSelector(store  => store.cart.items)
    console.log(">>>>>>>>>>>>>",cartItems[1])
   
    return (
        <div className='cartItem-container'>
            {cartItems.map((cartItem)=> <FoodDetail cartItem={cartItem}/>)}
        </div>
    )
}
export default Cart