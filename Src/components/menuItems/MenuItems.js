import { menu_img } from '../../utilities/constants'
import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
import './menuItems.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../utilities/slice'
import { useSelector } from 'react-redux'


const MenuItems = ({ item }) => {

    const dispatch = useDispatch()
    const cartItems = useSelector(store => store.cart.items)
    function handleAddItem(item) {
        dispatch(addItem(item))
    }

    function handleMinus() {
        dispatch(removeItem(item.id))
    }
    function getQuantityById(id) {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : "Add";
    }

    let price = item.price


    return (
        <div className='eachItem-container'>
            <div className="left-menulist">
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
                {<button className='countDis menuAdd'><div onClick={() => handleMinus(item)} className='minus'>-</div><span className='count'>{getQuantityById(item.id)}</span><div onClick={() => handleAddItem(item)} className='minus'>+</div></button>}
            </div>
        </div >
    )
}
export default MenuItems