var express = require('express');
var router = express.Router();
// var request = require('request');
var axios = require('axios')

router.get('/', function(req, res) {

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
            console.log(response.data);
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

module.exports = router;