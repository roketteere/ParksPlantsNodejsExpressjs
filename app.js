const express = require('express');
const https = require('https'); // Use the https module instead of http
const path = require('path');
const trefleData = []
const app = express();
const port = process.env.PORT || 3000;

const fetchTrefle = https.request('https://trefle.io/api/v1/distributions/ala/plants?token=CDgScJ83lB1EMvnCVzxGDNghxmPU2IgFoqc_McmRAIc', response => {
    const data = [];
    response.on('data', _ => data.push(_));
    response.on('end', () => console.log(data.join()));
    trefleData.push(data);
    fetchTrefle.end()

});

// static files needed
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (request, response) => { 
    response.render('index')
})


app.listen(port, () => {
    console.info(`Listening: ${port}`);

})
