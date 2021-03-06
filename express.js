const express = require('express');

const path = require('path');

const app = express();

// Define the port to run on
app.set('port', 8080);

app.use(express.static(path.join(__dirname, 'dist')));

// Listen for requests
const server = app.listen(app.get('port'), function() {
    const port = server.address().port;
    console.log('Magic happens on port ' + port);
});
