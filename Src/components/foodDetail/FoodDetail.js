import React from 'react'
import './foddDetail.css'
import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
let menu_img = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../utilities/slice'

function FoodDetail({ cartItem }) {
    const words = cartItem.name.split(" ");
    const name = words.slice(0, 3).join(" ");

    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    function handleAddItem(cartItem) {
        dispatch(addItem(cartItem))
    }

    function handleMinus(cartItem) {
        dispatch(removeItem(cartItem.id))
    }
    return (
        <div className='menu-card'>
            {cartItem.cloudinaryImageId && <img src={menu_img + cartItem.cloudinaryImageId} alt="ResataurantImage" className='menuImage' />}
            {!cartItem.cloudinaryImageId && <img src={defaultMenu} alt="ResataurantImage" className='menuImage' />}
            <div className='menu-name'>{name}</div>
            <div className="menu-desc">{cartItem.category}</div>
            <div className='price-details'>
                <div>₹ {cartItem.price / 100}</div>
                <div>{cartItem.isVeg ? <img src={veg} className="vegIcon1" /> : <img src={nonveg} className="vegIcon1" />}</div>
                <button className='countDis'><div onClick={() => handleMinus(cartItem)} className='minus'>-</div><span className='count'>{cartItem.quantity}</span><div onClick={() => handleAddItem(cartItem)} className='minus'>+</div></button>
            </div>
        </div>
    )
}

export default FoodDetail