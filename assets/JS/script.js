// Save search history to local storage
var search_history = [];
var plantName = ''

// Element Variables
var searchButton = document.querySelector("#search-button");
var searchBox = document.querySelector("#place-search-input");
var cardContainer = document.querySelector("#card-container");


// save search to history
function saveSearch(global_history) {
    if (localStorage.setItem('search-history', global_history)) {
        console.log('HISTORY SAVED SUCCESSFULLY');

    }
}

// add search input to search history and append element
function generateCards(plant_name) { // fetchNationParkAPI(plant_name)
    search_history.push(plant_name);
    var plant = document.createElement("p")
    plant.className = "button is-light is-warning is-fullwidth is-size-5"
    plant.innerHTML = plant_name
    cardContainer.appendChild(plant);
    return plantName;

}

// fetch to national park api and get park name and state, then return them
function fetchNationParkAPI(keyword) {
    var API_URL = `https://developer.nps.gov/api/v1/parks?q=${keyword}&limit=10&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`
    var url = new URL(API_URL)
    var state = ''
    var parkName = ''
    fetch(url).then(response => response.json()).then(data => {
        for (var i = 0; i < data.data.length; i++) {
            console.log('DATA: ', data.data[i].states);
            console.log('Data ', data.data[i].fullName);
        }

        // state = data.data[0].parks[0].states;
        // parkName = data.data[0].parks[0].fullName;
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
searchBox.addEventListener('keydown', function (event) { // event.preventDefault();
    var inputEl = event.target;
    plantName = inputEl.value;
    console.log(plantName);
})

// Keyup event listener
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
        generateCards(event.target.value);
        saveSearch(search_history);
        fetchNationParkAPI(plantName);
        console.log('::KEYBOARD:: City Saved To History: ', plantName);
        // searchBox.value = ''

    }

})


// click event listener for search button
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.target;
    // addToHistory(cityName);
    saveSearch(search_history);
    generateCards(plantName);
    console.log('City Saved To History: ', plantName);
    searchBox.value = ''


});


// TODO: in the future include accesibility and other park specific info

// TODO: send state data to trefle api for all plants
// TODO: convert state string to TDWG code
// TODO: fetch plants with TDWG code
// TODO: return all plants

// TODO: on page load
// TODO: check memory for any saved locations
// TODO: display modal
// TODO: include input field
// TODO: include search button
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

//
// *** NOTES AREA - REFERENCE ONLY IGNORE ***
//
// var test_search = `zion national park`
// fetchNationParkAPI(test_search);
// fetchMapData(test_search);
// sic      label   count
// =======================
// 799951 	Parks 	51,424
// https://www.mapquestapi.com/search/v4/place?location=-122.419291%2C37.761076&sort=distance&feedback=false&key=ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP&pageSize=20&q=Zion%20National%20Park


// https://www.mapquestapi.com/search/v4/place?q=Miami&category=sic%799951&sort=distance&feedback=false&key=ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP&pageSize=20

// Auto Complete directly from MapQuest API
// placeSearch({key: 'ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP', container: document.querySelector("#place-search-input")});
