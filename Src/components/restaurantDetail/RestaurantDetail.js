import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Restaurant_Details_URl, imgURL } from '../../utilities/constants'
import useRestaurant from "../../utilities/useRestaurant"
import './restaurantDetails.css'
import MenuItems from "../menuItems/MenuItems"
import Shimmer2 from "../shimmer/Shimmer2"


const RestaurantDetail = () => {

    let { id } = useParams()
    let loading = true
    let [restaurantDetails ,isLoading ]= useRestaurant(id)
     loading = isLoading
    if (!restaurantDetails) return null

    return ( !restaurantDetails? <Shimmer2 />:
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