export function filterRestaurant(searchdata, allrestaurants){
    let data = allrestaurants.filter((restaurant)=>{
    //  console.log(restaurant.data.name)
     return restaurant.data.name. toLowerCase().includes(searchdata.toLowerCase())
  
    });
 return data
}

