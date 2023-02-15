import { useEffect, useState } from "react"
import Cards from "../cards/Cards"
import "./body.css"
import { filterRestaurant } from '../../utilities/filterFunction'
import Shimmer from "../shimmer/Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    const [searchData, setSearchData] = useState("")
    const [allrestaurants, setAllrestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    
    useEffect((() => {
        getData()
    }), [])

    async function getData() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.933524&lng=76.9311761&page_type=DESKTOP_WEB_LISTING")
        let json = await data.json()
        // console.log(">>>>>>>>>>>>>>>",json)
        let array = json?.data?.cards[2]?.data?.data?.cards
        setAllrestaurants(array)
        setFilteredRestaurants(array)
    }

//    console.log(allrestaurants)

   if(!allrestaurants) return null; //here the component will not render..It is early returning

    return (allrestaurants.length ==0)?<Shimmer/>: (
        <>
            <div className="body">
                <div className="topBody">
                    <input placeholder="Search..." className="search" value={searchData} onChange={(event) => setSearchData(event.target.value)} />
                    <button className="search-button" onClick={() => {
                        let data = filterRestaurant(searchData, allrestaurants)
                        setFilteredRestaurants(data)
                        setSearchData("")
                    }}>Click</button>
                </div>
                <div className="map">
                    {/* {console.log(">>>>>>>>>>>>>>>>>>>>>>",allrestaurants)} */}
                    {(filteredRestaurants.length===0)?  <h1>No Match Found</h1> :
                    filteredRestaurants.map((item) => {
                        // console.log(item.data.id)
                        return (                            
                           <Link key={item.data.id} to={"/restaurant/" + item.data.id}> <Cards item={item}  /></Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Body