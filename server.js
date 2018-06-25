
//Install express server
const express = require('express');


const app = express();

// Serve only the static files form the dist directory


const path = require('path');
app.get('/*all', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);