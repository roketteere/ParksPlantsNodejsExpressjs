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


