import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Restaurant_Details_URl, imgURL } from '../../utilities/constants'
import useRestaurant from "../../utilities/useRestaurant"
import './restaurantDetails.css'
import MenuItems from "../menuItems/MenuItems"
import Shimmer2 from "../shimmer/Shimmer2"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../utilities/slice'
import Shimmer from "../shimmer/Shimmer"


const RestaurantDetail = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    let { id } = useParams()

    function handleAddItem(cartItem) {
        dispatch(addItem(cartItem))
    }

    function handleMinus(cartItem) {
        dispatch(removeItem(cartItem.id))
    }
    let restaurantDetails = useRestaurant(id)


    let total = 0;

    if (!restaurantDetails) return null

    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (!restaurantDetails ? <Shimmer /> :
        <div className="restaurantDetails">
            <div className="top">
                <img className="rest-image" src={imgURL + restaurantDetails?.cloudinaryImageId} alt="ResataurantImage" />
                <div className="restaDetails">
                    <div className="restaName">{restaurantDetails?.name}</div>
                    <div className="minorDetails">
                        <div className="area">{restaurantDetails?.areaSlug} </div>
                        <div className="area">||</div>
                        <div className="area">{restaurantDetails?.city}</div>
                        <div className="area">||</div>
                        <button className="starBtn">{restaurantDetails?.avgRating} ✰</button>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="restdetails-left">

                    <ul className="menu-card-details">
                        {Object.values(restaurantDetails?.menu?.items).map((item) => (
                            <li key={item.id} className="listMenu"><MenuItems item={item} /></li>
                        ))}
                    </ul>
                </div>
                <div className="reatdetails-right">
                    {!cartItems.length > 0 ? <h2 > Add Items to the Cart </h2> : <div>
                        <h2 className="rest-cart-heading">Items in Cart - {totalQuantity}</h2>
                        {cartItems.map(function (cartItem, index) { total = total + (cartItem.price) / 100 * cartItem.quantity })}
                        <div className="rest-cart-container">{cartItems.map((cartItem) => <>
                            <h3 className="rest-cart-itemname">{cartItem.name}</h3>
                            <h4 className="rest-cart-price">Price : ₹{cartItem.price / 100} each</h4>
                            <div className="rest-cart-itemdetails">
                                <button className='countDis btn-cart'><div onClick={() => handleMinus(cartItem)} className='minus'>-</div><div className='count'>{cartItem.quantity}</div><div onClick={() => handleAddItem(cartItem)} className='minus'>+</div></button>
                                <div>₹{cartItem.price * cartItem.quantity / 100}</div>

                            </div>
                            <hr style={{ borderTop: '1px solid black', width: '100%' }} />

                        </>)}
                        </div>
                        <div className="rest-cart-total">Total : {total}</div>
                        <Link to="/cart"><button className="go-to-cart">Go to Cart</button></Link>

                    </div>}
                </div>
            </div>
        </div>
    )
}
export default RestaurantDetail 