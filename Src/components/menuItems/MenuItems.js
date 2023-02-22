import { imgURL,menu_img } from '../../utilities/constants'

import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
import './menuItems.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../utilities/slice'

import { useEffect } from 'react'




const MenuItems = ({ item }) => {

      
    let [count, setCount] = useState(0)
    const dispatch = useDispatch()

    function handlePlus(){
        dispatch(addItem(item))
        setCount(count+1)
    }

    function handleAddItem(item) {
    //    console.log("Clicked" ,count)
       dispatch(addItem(item))
       setCount(count+1)
    }

    function handleMinus(){
          if(count>0){           
            dispatch(removeItem(item.id))
            setCount(count-1)
          }
         
    }
    // console.log(item)
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
                {count ==0 && <button className='addBtn' onClick={()=>handleAddItem(item)}>ADD</button>}
                {count>0 && <button className='countDis'><div  onClick ={()=>handleMinus(item)} className='minus'>-</div><span className='count'>{count}</span><div onClick = {()=>handlePlus(item)} className='minus'>+</div></button>}
        </div>
        </div >
    )
}
export default MenuItems