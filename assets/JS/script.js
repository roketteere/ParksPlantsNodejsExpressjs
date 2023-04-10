// National Park Services API Key: bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea
// TODO when I search for a state, I get back state name, state longitude and latitude
// https://developer.nps.gov/api/v1/passportstamplocations?q=Zion%20National%20Park&limit=5&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea

var testURLHold = `zion national park`
var park = `https://developer.nps.gov/api/v1/passportstamplocations?q=${testURLHold}&limit=5&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`


// TODO slice input into array of words

// TODO for each word of the input array, url ("http://...passportstamplocations?q=" + ${})

var url = new URL(park)

fetch(url).then(response => response.json()).then(data => console.log('DATA ZERO: ', data.data[0].parks[0].fullName));
