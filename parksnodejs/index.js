const express = require('express');
const https = require('https'); // Use the https module instead of http
const path = require('path');
const app = express();
const port = process.env.PORT || 5555;

const fetchTrefle = https.request('https://trefle.io/api/v1/distributions/ala/plants?token=CDgScJ83lB1EMvnCVzxGDNghxmPU2IgFoqc_McmRAIc', response => {
    const data = [];

    response.on('data', _ => data.push(_));
    response.on('end', () => console.log(data.join()));
});
fetchTrefle.end();

app.get('/public', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// app.use(express.static(path.join("assets", 'css')));
// app.use('/html', (req, res, next) => {
//     res.sendFile(path.join("./index.html", './', 'index.html'))
// })
// app.use(express.static('public'));
// app.listen(port, () => {
//     console.log(`App Listening at http://localhost:${port}`)
// })
