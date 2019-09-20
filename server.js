var express = require('express');
var app = express();
 
 
app.get('/', function(request, response) {
 
    response.send('Welcome to Passport with Sequelize');
 
});
 
 
app.listen(5000, function(error) {
 
    if (!error)
        console.log("Green light- Server hot");
    else console.log(error)
 
});