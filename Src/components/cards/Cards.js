import "./cards.css"
import {imgURL} from '../../utilities/constants'

const Cards = ({item})=>{
    console.log(item)
  let arr = item.cuisines
    return(
        <div className ="cards">
            <div className="individual-card .shadow-button ">
            <img src={imgURL+item.cloudinaryImageId} alt="restaurantImages" />
            <div className="details">
            <h3 className="restName">{item.name}</h3>
            <div className="cuisins">{arr.map((keys,index)=> {return <h3 key ={index} className="cusinItems">•{keys}</h3>})}</div>
            <h3 className="place">{item.areaName}</h3>
            </div>
            <div className="bottomline">
            <button className="star">{item.avgRating}✰</button>
            <h5>{item.sla.slaString}</h5>
            <h5>{item.costForTwo}</h5> 
            
            </div>
            </div>
        </div>
    )
}

export default Cards



    