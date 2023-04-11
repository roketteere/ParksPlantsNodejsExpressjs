// fetch to national park api and get park name and state, then return them
function fetchNationParkAPI(keyword) {
    var API_URL = `https://developer.nps.gov/api/v1/passportstamplocations?q=${keyword}&limit=5&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`

    var url = new URL(API_URL)
    var state = ''
    var parkName = ''
    fetch(url).then(response => response.json()).then(data => {
        state = data.data[0].parks[0].states;
        parkName = data.data[0].parks[0].fullName;
        console.log('Park Information: \n', state, "\n", parkName);
    })
}

// TODO
// Function that calls the trefle API
function fetchMapData(keyword) {
    fetch(`https://www.mapquestapi.com/search/v3/prediction?key=ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP&limit=5&collection=address,city&q=${keyword}`).then(promise => promise.json()).then(data => { // JSON.stringify(data);
        console.log(data.results)
        for (var i = 0; i < data.results.length; i++) {
            var listCity = data.results[i].name;
            var city = data.results[i].name;
            var state = data.results[i].place.properties.state;
            var longitude = data.results[i].place.geometry.coordinates[0];
            var latitude = data.results[i].place.geometry.coordinates[1];
            var resultList = document.createElement("p");
            // resultList.text = listCity;
            // resultList.value = listCity;
            // resultBlock.appendChild(resultList);
            // resultContainer.setAttribute("style", "display:block;");
            // cities.push([city, state, longitude, latitude]);
            // console.log('Last Log: \n' + cities[i]);
            console.log(`City: ${city}\nState: ${state}\nLongitude: ${longitude}\nLatitude: ${latitude}`)


        }


    });
}
// sic      label   count
// =======================
// 799951 	Parks 	51,424
// https://www.mapquestapi.com/search/v4/place?location=-122.419291%2C37.761076&sort=distance&feedback=false&key=ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP&pageSize=20&q=Zion%20National%20Park


// https://www.mapquestapi.com/search/v4/place?q=Miami&category=sic%799951&sort=distance&feedback=false&key=ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP&pageSize=20


placeSearch({key: 'ceiWumpWrG5aqAOi4bsRb8BIkjPl3vtP', container: document.querySelector("#place-search-input")});


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

// var test_search = `zion national park`
// fetchNationParkAPI(test_search);
// fetchMapData(test_search);
