function smartSearch(event, searchable_data =[], search_filter =[]) { // prevent the page from reloading
    event.preventDefault();
    // get the search input and convert it to lowercase, then trim it
    var search_input = event.target.value.toLowerCase().trim();
    // create variable expression to filter data based on the search input and the search filter
    var searched_data = searchable_data.filter((data) => { // create a string with concatenated values for the type of search filters we need
        var search_filter_items = search_filter.filter((property) => data.hasOwnProperty(property)).map((property) => data[property].toLowerCase().trim().join(' '));
        // Now we check to see if the properties inside the data match our search input
        return Object.keys(data).some((key) => {
            return((data[key]) !== undefined && data[key] !== null && JSON.stringify(data[key]).toLowerCase().trim().includes(search_input)) || search_filter_items.trim().includes(search_input)

        })

    })
    return console.log('Smart Search Results: ', searched_data)

};
