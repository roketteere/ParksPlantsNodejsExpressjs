
var searchBtn = document.getElementById("search-btn")
var searchContainer = document.querySelector(".find-plants-container")
var resultsPage = document.getElementById("results-page")
var cardd = document.getElementsByClassName("plant-card")

var plants = []

function findPlants(e){
    e.preventDefault()
    searchContainer.classList.add('hide')
    resultsPage.classList.remove('hide')
}

searchBtn.addEventListener("click", findPlants)

function displayPlantInfo(e){
    e.preventDefault()
    plants.forEach(function(plants){
        var plantCard = document.createElement("div")
        plantCard.classList.add("col", "s6", "m4", "xl2", "plant-card");
        var card = document.createElement("div")
        card.classList.add("card", "hoverable", "rounded")
        var cardImage = document.createElement("div")
        cardImage.classList.add("card-image")
        var plantImage = document.createElement("img")
        plantImage.setAttribute("src", plants[i].imageUrl)
        var cardContent = document.createElement("div")
        cardContent.classList.add("card-content")
        var cardTitle = document.createElement("span")
        cardTitle.classList.add("card-title", truncate)
        var scientificName = document.createElement("p")
        scientificName.classList.add("scientific-name", "truncate")

        resultsPage.appendChild(plantCard)
          plantCard.appendChild(card)
            card.appendChild(cardImage)
              cardImage.appendChild(plantImage)
            card.appendChild(cardContent)
              cardContent.appendChild(cardTitle)
              cardContent.appendChild(scientificName)
    })
}



// TODO: fetch to national park api
    // TODO: run fetch with park name
    // TODO: return state location
        // TODO: in the future include accesibility and other park specific info

// TODO: send state data to trefle api for all plants
    // TODO: convert state string to TDWG code
    // TODO: fetch plants with TDWG code
    // TODO: return all plants

// TODO: on page load
    // TODO: check memory for any saved locations
    // TODO: display modal
        // TODO: include input field 
        // TODO: incude search button
            // TODO: on button press
                // TODO: clear input search box
                // TODO: save location to memory
                // TODO: hide modal
                // TODO: append plant cards to page

// TODO: build plant cards
    // TODO: take in an array of data from trefle API
    // TODO: create a plant card container
    // TODO: display plant name as h2 and image
    // TODO: addEventListener for clicks on card
        // TODO: onClick display modal with plant information
            // TODO: add icons for edible (Edible: skull or thumbs up)
            // TODO: add taxonimy
            // TODO: habitat
            // TODO: other locations

let string = 'zion national park'
let test = fetch(`https://developer.nps.gov/api/v1/passportstamplocations?q=${string}&limit=5&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`).then(function(response){
    console.log("response.json():", response)
    response.json().then(function (data){
    console.log("data:", data)
})})
