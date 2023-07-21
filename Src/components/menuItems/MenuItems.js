import { menu_img } from '../../utilities/constants'
import veg from '../../utilities/images/veg.png'
import nonveg from '../../utilities/images/nonveg.png'
import defaultMenu from '../../utilities/images/menu1.jpg'
import './menuItems.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../utilities/slice'
import { useSelector } from 'react-redux'


const MenuItems = ({ item }) => {
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>ITEM",item)
    const dispatch = useDispatch()
    const cartItems = useSelector(store => store.cart.items)
    function handleAddItem(item) {
        dispatch(addItem(item.card.info))
    }

    function handleMinus() {
        dispatch(removeItem(item.card.info.id))
    }
    function getQuantityById(id) {
        const item = cartItems.find((item) => item.id === id);
        return item ? item.quantity : "Add";
    }

    let price = item.card.info.price


    return (
        <div className='eachItem-container'>
            <div className="left-menulist">
                <div className='menuName'>{item.card.info.name}</div>
                <div className='menu-category'>Category:{item.card.info.category}</div>
                <div className='menu-price'>
                    <div>₹ {price / 100}</div>
                    <div>{item.card.info.isVeg ? <img src={veg} className="vegIcon" /> : <img src={nonveg} className="vegIcon" />}</div>
                </div>
            </div>
            <div className='right-menuitems'>
                {item.card.info.imageId && <img src={menu_img + item.card.info.imageId} alt="ResataurantImage" className='menuImage' />}
                {!item.card.info.imageId && <img src={defaultMenu} alt="ResataurantImage" className='menuImage' />}
                {<button className='countDis menuAdd'><div onClick={() => handleMinus(item.card.info)} className='minus'>-</div><span className='count'>{getQuantityById(item.card.info.id)}</span><div onClick={() => handleAddItem(item)} className='minus'>+</div></button>}
            </div>
        </div >
    )
}
export default MenuItems