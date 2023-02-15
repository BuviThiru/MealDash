import "./cards.css"
import {imgURL} from '../../utilities/constants'

const Cards = ({item})=>{
    // console.log(item)
  let arr = item.data.cuisines
    return(
        <div className ="cards">
            <div className="individual-card .shadow-button ">
            <img src={imgURL+item.data.cloudinaryImageId} alt="restaurantImages" />
            <div className="details">
            <h3 className="restName">{item.data.name}</h3>
            <div className="cuisins">{arr.map((key)=> {return <h3 className="cusinItems">•{key}</h3>})}</div>
            <h3 className="place">{item.data.area}</h3>
            </div>
            <div className="bottomline">
            <button className="star">{item.data.avgRating}✰</button>
            <h5>{item.data.slaString}</h5>
            <h5>{item.data.costForTwoString}</h5> 
            
            </div>
            </div>
        </div>
    )
}

export default Cards


{/* <ul>
{Object.values(restaurantDetails?.menu?.items).map((item) => (
  <li key={item.id}>{item.name}</li>
))}
</ul> */}
    