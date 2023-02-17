import { imgURL } from '../../utilities/constants'
let menu_img = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
import './menuItems.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../utilities/slice'


const MenuItems = ({ item }) => {
    let [count, setCount] = useState(0)
    const dispatch = useDispatch()

    function handleClick(item) {
       dispatch(addItem(item))
    }
    function handleMinus(){
        setCount((prev)=> prev--)
    }
    function handlePlus(){
        setCount((prev)=> prev++)
    }
    // console.log(item);
    let price = item.price
    return (
        <div className='eachItem-container'>
            <div classname = "right-menulist">
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
                <button className='addBtn' onClick={()=>handleClick(item)}>ADD</button>
                {/* <button className='countDis' style={{ display: { count } == 0 ? "none" : "block" }}><button onClick={console.log(" clicked -")} className='minus'>-</button><span className='count'>{count}</span><button className='minus' onClick={handlePlus}>+</button></button> */}
        </div>
        </div >
    )
}
export default MenuItems