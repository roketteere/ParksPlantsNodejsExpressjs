// take a location and plant of interest string as a user input
// use google maps to query the location and return a latitude and longitude
// take the latitude and longitude from google and give it to breezometer for list
    // of allergens in that area
// return allergen information to user
    // add 


fetch('https://api.openaq.org/v2/cities?country_id=US').then(function (response){
console.log("response.json:", response.json())})