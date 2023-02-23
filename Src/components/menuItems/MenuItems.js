import { imgURL,menu_img } from '../../utilities/constants'

import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
import './menuItems.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../utilities/slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'




const MenuItems = ({ item }) => {

     const cartItems = useSelector(store => store.cart.items) 
    //  console.log(item.id)  
     
 
    const dispatch = useDispatch()


    function handleAddItem(item) {  
       dispatch(addItem(item))     
    }

    function handleMinus(){                   
            dispatch(removeItem(item.id))      
         }
  
    let price = item.price
    return (
        <div className='eachItem-container'>
            <div className = "right-menulist">
                <div className='menuName'>{item.name}</div>
                <div className='menu-category'>Category:{item.category}</div>
                <div className='menu-price'>
                    <div>₹ {price / 100}</div>
                    <div>{item.isVeg ? <img src={veg} className="vegIcon" /> : <img src={nonveg} className="vegIcon" />}</div>
                </div>
            </div> 
            <div className='right-menuitems'>
                {item.cloudinaryImageId && <img src={menu_img + item.cloudinaryImageId} alt="ResataurantImage" className='menuImage' />}
                {!item.cloudinaryImageId && <img src={defaultMenu} alt="ResataurantImage" className='menuImage' />}
                {cartItems?.filter((x) => x.id == item.id).length == 0 && <button className='addBtn' onClick={()=>handleAddItem(item)}>ADD</button>}
                {cartItems?.filter((x) => x.id == item.id).length != 0 && <button className='countDis'><div  onClick ={()=>handleMinus(item)} className='minus'>-</div><span className='count'>{cartItems?.filter((x) => x.id == item.id).length}</span><div onClick = {()=>handleAddItem(item)} className='minus'>+</div></button>}
        </div>
        </div >
    )
}
export default MenuItems