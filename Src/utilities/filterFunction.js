export function filterRestaurant(searchdata, allrestaurants) {
    let data = allrestaurants.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchdata.toLowerCase())
    });
    return data
}

