const express = require('express');
const https = require('https'); // Use the https module instead of http
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const FS = require('fs');
const exp = require('constants');

// Create Express App
const app = express();


// Trefle API call and save
const trefleData = []


fetch(`https://trefle.io/api/v1/distributions/WAS/plants?token=CDgScJ83lB1EMvnCVzxGDNghxmPU2IgFoqc_McmRAIc`).then(response => response.json()).then(data => {
    FS.writeFileSync('public/json/data.json', JSON.stringify(data));

    console.log('Data::', data);

})

// create and set routes to serve static files to front end
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/json', express.static(__filename + 'public/json'))
app.use('./', express.static(__dirname + '/app.js'))
app.set('views', './views')
app.set('view engine', 'ejs')

//
app.get('', (request, response) => {
    response.render('index')
})


app.listen(port, () => {
    console.info(`Listening: ${port}`);

})
