import { useState, useEffect } from "react"
import { Restaurant_Details_URl } from './constants'

const useRestaurant = (id) => {

    const [restaurantDetails, setRestaurentDetails] = useState(null)

    useEffect((() => {
        fetchData()

    }), [])

    async function fetchData() {    
    
        let data = await fetch(`${Restaurant_Details_URl}${id}`)   
        let json = await data.json()       
        setRestaurentDetails(json.data.cards)
    }
    // console.log(restaurantDetails)

    return restaurantDetails

}
export default useRestaurant;

