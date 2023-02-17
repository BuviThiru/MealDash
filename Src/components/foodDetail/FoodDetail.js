import React from 'react'
import './foddDetail.css'
import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
let menu_img = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

function FoodDetail({cartItem}) {
    return (
        <div className='menu-card'>
            {cartItem.cloudinaryImageId && <img src={menu_img + cartItem.cloudinaryImageId} alt="ResataurantImage" className='menuImage' />}
            {!cartItem.cloudinaryImageId && <img src={defaultMenu} alt="ResataurantImage" className='menuImage' />}
            <div className='menu-name'>{cartItem.name}</div>
            <div className ="menu-desc">{cartItem.description}</div>
             <div className='price details'>         
            <div>₹ {cartItem.price / 100}</div>
            <div>{cartItem.isVeg ? <img src={veg} className="vegIcon1" /> : <img src={nonveg} className="vegIcon1" />}</div>
            </div> 
        </div>
    )
}

export default FoodDetail