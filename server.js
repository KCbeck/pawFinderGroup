const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var axios = require('axios');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// const routes = require("./routes");
// app.use(routes);


// var router = express.Router();

// var petRoutes = require("./routes/petRoutes");
// router.get('/api/test', petRoutes);
// var request = require('request');

app.get('/api/test', function(req, res) {
   console.log("made it into pet routes")
   // return res.json({name:"Ron"})
   axios.request({
       url: 'https://api.petfinder.com/v2/oauth2/token',
       method: 'POST',
       // baseURL:
       // auth: {
       //     client_id: 'H1ZpbNLeSji2435bgp93XcbCSQbDDrvkatXKwJbnOAcJMWQ85l',
       //     client_secret: '0NAH1iocrlCYsq8NFIC2gbxzb5mCs9AFSGUzBDI1',
       //     grant_type: 'client_credentials',
       // },
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
           console.log(response.data)
           res.json(response.data);
       })
       // axios.get({
       //     url:"https://api.petfinder.com/v2/animals",
       //     method: 'GET',
       //     headers: {
       //         Authorization: 'Bearer ' + response.data.access_token
       //     }
       // }).then((response) =>
       // // res.json(response.data)
       // console.log(response)
       //  )
   })
   .catch(error => {
       console.log(error);
   })
})
// module.e

// var apiRoutes = require('./routes/api-routes')
// app.use(apiRoutes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(request, response) {
  response.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});