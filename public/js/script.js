// import trefle fetch
// var trefleData = [];
// get json

// var data = fetch('json/data.json').then(response => response.json()).then(data => { // ds = JSON.stringify(data);
//     console.log(data.data[0]);

// });

let banana = [{
    id: 109482,
    common_name: 'Common nettle',
    slug: 'urtica-dioica',
    scientific_name: 'Urtica dioica',
    year: 1753,
    bibliography: 'Sp. Pl.: 984 (1753)',
    author: 'L.',
    status: 'accepted',
    rank: 'species',
    family_common_name: null,
    genus_id: 5550,
    image_url: 'https://bs.plantnet.org/image/o/9db58cbb3538a6b77384f972971d51869228e545',
    synonyms: [Array],
    genus: 'Urtica',
    family: 'Urticaceae',
    links: [Object]
  },
  {
    id: 227114,
    common_name: 'Barnyard grass',
    slug: 'dactylis-glomerata',
    scientific_name: 'Dactylis glomerata',
    year: 1753,
    bibliography: 'Sp. Pl.: 71 (1753)',
    author: 'L.',
    status: 'accepted',
    rank: 'species',
    family_common_name: null,
    genus_id: 10915,
    image_url: 'https://bs.plantnet.org/image/o/f84a7d4fc2e627ccd451f568479b1932c2b2d900',
    synonyms: [Array],
    genus: 'Dactylis',
    family: 'Poaceae',
    links: [Object]
  },]



  class Plant{
    constructor(commonName, scientificName, plantImage, year, genus, family, synonyms){
        this.commonName=commonName
        this.scientificName=scientificName;
        this.plantImage = plantImage
        this.year = year
        this.genus = genus
        this.family = family
        this.synonyms = synonyms
    }
}
function sortTrefleAreaSearch(array){
    let plantArray = []
    for (let i = 0; i < array.length; i++) {
        let commonName = array[i].common_name;
        let scientificName = array[i].scientific_name
        let plantImage = array[i].image_url
        let year = array[i].year
        let genus = array[i].genus
        let family = array[i].family
        let synonyms = array[i].synonyms
        let plant = new Plant(commonName, scientificName, plantImage, year, genus, family, synonyms)
        plantArray.push(plant)
    }
return plantArray}

// Save search history to local storage
var search_history = [];
// var plants = [];


// Element Variables
var searchButton = document.querySelector("#search-button");
var searchBox = document.querySelector("#place-search-input");
var cardContainer = document.querySelector("#card-container");
var searchContainer = document.querySelector(".find-plants-container")
var resultsPage = document.getElementById("results-page")
var card = document.getElementsByClassName("plant-card")

// Hide/Unhide Plant Cards
function findPlants() {
    searchContainer.classList.add('hide')
    resultsPage.classList.remove('hide')
    modalSearchButton.classList.remove('hide')
    searchModal.classList.add('hide')
}

let plantBanana = sortTrefleAreaSearch(banana)
// create and append plant information
function displayPlantInfo(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(i)
        var plantCard = document.createElement("div")
        plantCard.classList.add("col", "s6", "m4", "xl2", "plant-card");
        var card = document.createElement("div")
        card.classList.add("card", "hoverable", "rounded")
        var cardImage = document.createElement("div")
        cardImage.classList.add("card-image", "overflow", "plant-image")
        var plantImage = document.createElement("img")
        plantImage.classList.add("plant-image")
        var cardContent = document.createElement("div")
        cardContent.classList.add("card-content")
        var cardTitle = document.createElement("span") 
        cardTitle.classList.add("card-title", "truncate")
        var scienceName = document.createElement("p")
        scienceName.classList.add("scientific-name", "truncate")

        // hidden
        var plantYear = document.createElement('p')
        plantYear.classList.add('hide')
        var plantGenus = document.createElement('p')
        plantGenus.classList.add('hide')
        var plantFamily = document.createElement('p')
        plantFamily = document.createElement('hide')
        var plantSynonyms = document.createElement('p')
        plantSynonyms.classList.add('hide')


        // append data
        resultsPage.appendChild(plantCard)
        plantCard.appendChild(card)
        card.appendChild(cardImage)
        cardImage.appendChild(plantImage)
        card.appendChild(cardContent)
        cardContent.appendChild(cardTitle)
        cardContent.appendChild(scienceName)

        // fill each section with plant data
        plantImage.setAttribute("src", data[i].plantImage)
        cardTitle.textContent = data[i].commonName
        scienceName.textContent = data[i].scientificName
    }
}
displayPlantInfo(plantBanana)
// modal elements

    // plant info modal
    var modalButton = document.getElementById("modal-button")
    var closeButton = document.querySelector("#close-button")
    var modal = document.querySelector(".qmodal")
    var searchModal = document.querySelector("#search-modal")

    // search modal
    var modalSearchButton = document.querySelector(".modal-search-button")


// modal functions

    // open search modal
    function openSearch() {
        searchModal.classList.remove("hide")
    }

    // close current modal
    function closeModal() {
        modal.classList.add("hide")
    }

        // event listeners
        modalSearchButton.addEventListener("click", openSearch)
        closeButton.addEventListener("click", closeModal)





// save search to history
function saveSearch(global_history) {
    if (localStorage.setItem('search-history', global_history)) {
        console.log('HISTORY SAVED SUCCESSFULLY');

    }
}

// add search input to search history and append element
function addToHistory(plant_name) { // fetchNationParkAPI(plant_name)
    search_history.push(plant_name);
    var plant = document.createElement("p")
    plant.className = "button is-light is-warning is-fullwidth is-size-5"
    plant.innerHTML = plant_name
    // cardContainer.appendChild(plant);
    return plantName;

}

// fetch to national park api and get park name and state, then return them
function fetchNationParkAPI(keyword) {
    var oth = `https://www.mapquestapi.com/search/v2/search?q=${keyword}&key=ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP&maxMatches=10&shapePoints=40.099998,-76.305603&hostedData=mqap.ntpois`


    var API_URL = `https://developer.nps.gov/api/v1/parks?q=${keyword}&limit=10&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`
    var url = new URL(oth)
    var state = ''
    var parkName = ''
    fetch(url).then(response => response.json()).then(data => {
        for (var i = 0; i < data.length; i++) {
            // console.log('DATA: ', data.data[i].states);
            // console.log('Data ', data.data[i].fullName);
            console.log('Data:', data);

        }

        // state = data.data[0].states;
        // parkName = data.data[0].fullName;
        // console.log('Park Information: \n', state, "\n", parkName);
    })
}


// Function that calls the trefle API
function fetchTrefleAPI(keyword) {
    fetch(`http://URL=>>>>${keyword}`).then(promise => promise.json()).then(data => {
        console.log(data.results)
    })
};

// add event listener to search box
searchBox.addEventListener('keyup', function (event) { // event.preventDefault();
    var inputEl = event.target;
    plantName = inputEl.value;
    console.log(plantName);
})

// on keyboard enter, search
searchBox.addEventListener('keypress', function (event) { // event.preventDefault();
    event.target
    if (event.key === "Enter") {
        event.preventDefault();
        addToHistory(event.target.value);
        saveSearch(search_history);
        fetchNationParkAPI(plantName);
        console.log('::KEYBOARD:: City Saved To History: ', plantName);
        searchBox.value = ''
        findPlants()
        fetchTrefle();
        console.log('Fetch Data:\n', trefleData);

    }

})

// click event listener for search button
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.target;
    saveSearch(search_history);
    addToHistory(plantName);
    fetchNationParkAPI(plantName);
    console.log('City Saved To History: ', plantName);
    searchBox.value = ''
    findPlants()


});

// Auto Complete directly from MapQuest API
function placeSearchCall() {
    placeSearch({key: 'ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP', container: document.querySelector("#place-search-input")});

}
placeSearchCall()
