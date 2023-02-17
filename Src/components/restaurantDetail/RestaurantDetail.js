import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Restaurant_Details_URl, imgURL } from '../../utilities/constants'
import useRestaurant from "../../utilities/useRestaurant"
import './restaurantDetails.css'
import MenuItems from "../menuItems/MenuItems"


const RestaurantDetail = () => {
    let { id } = useParams()

    let restaurantDetails = useRestaurant(id)
    // console.log(restaurantDetails)

    if (!restaurantDetails) return null

    return (
        <div className="restaurantDetails">
            <div className="top">
                <img src={imgURL + restaurantDetails?.cloudinaryImageId} alt="ResataurantImage" />
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
                <h2 className="rest-heading">Menu</h2>
                <ul>
                    {Object.values(restaurantDetails?.menu?.items).map((item) => (
                        <li key={item.id} className="listMenu"><MenuItems item ={item} /></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default RestaurantDetail