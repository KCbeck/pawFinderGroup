var express = require('express');
var router = express.Router();
// var request = require('request');
var axios = require('axios');


router.get('/', function(req, res) {
   console.log("made it into pet routes")
   // return res.json({name:"Ron"})
   axios.request({
       url: 'https://api.petfinder.com/v2/oauth2/token',
       method: 'POST',
       withCredentials: true,
       data: {
           client_id: 'H1ZpbNLeSji2435bgp93XcbCSQbDDrvkatXKwJbnOAcJMWQ85l',
           client_secret: '0NAH1iocrlCYsq8NFIC2gbxzb5mCs9AFSGUzBDI1',
           grant_type: 'client_credentials',
         },
         headers: {
         }
   })
   .then(response => {
       console.log(response.data.access_token)
       axios.get("https://api.petfinder.com/v2/animals", { headers: { Authorization: 'Bearer ' + response.data.access_token} })
       .then(response => {
           // If request is good...
           res.send("hello");
       })
   })
   .catch(error => {
       console.log(error);
   })
})
module.exports = router;