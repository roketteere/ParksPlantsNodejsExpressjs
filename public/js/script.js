// import trefle fetch
// var trefleData = [];
// get json
var dataItems = []
var searchFilter = []

// var dummyArray = fetch('https://dummyjson.com/products/').then(res => res.json()).then(json => console.log(json))

function getData() {
    fetch('json/ari.json').then(response => response.json()).then(data => { // ds = JSON.stringify(data);
        for (var i = 0; i < data.length; i++) { // console.log('Common Name:', data[i].common_name);
            dataItems.push(data[i])

        }

    })
};

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

// function openSearch
function openSearch() {
    searchModal.classList.remove("hide")
}
function closeModal() {
    modal.classList.add("hide")
}

// hide/unhide search modal
// modalSearchButton.addEventListener("click", openSearch)
// closeButton.addEventListener("click", closeModal)

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
// searchBox.addEventListener('keydown', function (event) { // event.preventDefault();
//     var inputEl = event.target;
//     plantName = inputEl.value;
//     console.log(plantName);
// })

// Smart Search Feature
//
// event = event.target (in this case the input box)
// searchable_data = array of data we want to make "smartSearch"
// filtered_data = data we want to show up in our search query
// search_filter = items passed to the filter so they can be added to the fi
function smartSearchAlpha(event, searchable_data =[], search_filter =[]) {
    //
    // prevent the page from refreshing
    event.preventDefault();
    // log each key as it is typed (on keyup so we can account for 'backspace')
    var search_input = event.target.value;
    // saved the filtered items
    var searched_data = searchable_data.filter((data) => {
        //
        // holds filter parameters
        var search_filter_items = "";
        // iterate forEach filter item and then add them to filter.
        search_filter.forEach((arguments) => {
            //
            // before adding them, convert to lowercase and trim them
            search_filter_items += data.hasOwnProperty(arguments) && data[arguments].toLowerCase().trim() + " "
        });

        // use (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
        // use Object.keys(object_to_search).some(index_enumerable_value ex obj[idx_enum_val])
        // Will return the <value> at that <key> or index [key:value]
        return Object.keys(data).some((key) => {
            // return the first successful search value  matched
            // before the values are return, strigify, trim, and filter using the input values
            // that the user has just currently keyed/typed/pressed, etc (on keyup)
            // now using the or || operator, we can search mutiple items with matching names not just one
            return((data[key]) !== undefined && data[key] !== null && JSON.stringify(data[key]).toLowerCase().trim().includes(search_input)) || search_filter_items.includes(search_input)
        })
    })
    // finally return the smartSearch filtered results (Should use function to act on data as it comes in)
    return console.log('Matched: ', searched_data);

};

function smartSearchBeta(event, searchable_data =[], search_filter =[]) { // prevent the page from reloading
    event.preventDefault();
    // get the search input and convert it to lowercase, then trim it
    var search_input = event.target.value.toLowerCase().trim();
    // create variable expression to filter data based on the search input and the search filter
    var searched_data = searchable_data.filter((data) => { // create a string with concatenated values for the type of search filters we need
        var search_filter_items = search_filter.filter((property) => data.hasOwnProperty(property)).map((property) => data[property].toLowerCase().trim().join(' '));
        // Now we check to see if the properties inside the data match our search input
        return Object.keys(data).some((key) => {
            return((data[key]) !== undefined && data[key] !== null && JSON.stringify(data[key]).toLowerCase().trim().includes(search_input))

        }) || search_filter_items.includes(search_input)


    })
    return console.log('Smart Search Results: ', searched_data)

};


// Keyup event listener
// add event listener to search box
searchBox.addEventListener('keyup', function (event) { // event.preventDefault();
    var inputEl = event.target;
    smartSearchBeta(event, dataItems, filter = ['common']);
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
getData()
