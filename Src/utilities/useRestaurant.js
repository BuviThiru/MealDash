import { useState,useEffect } from "react"
import {Restaurant_Details_URl} from './constants'

const useRestaurant =(id)=>{
  
    const [restaurantDetails, setRestaurentDetails] = useState (null) 
    const [isLoading, setIsloading] = useState(true)
     
    
    useEffect((() => {
        fetchData()
        setIsloading(false)
    }), [])

    async function fetchData() {
        let data = await fetch(Restaurant_Details_URl + id)
        let json = await data.json()
        
        setRestaurentDetails(json.data)
    }
    return [restaurantDetails ,isLoading]

}
export default useRestaurant

