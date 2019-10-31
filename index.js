
const express = require('express')
const app = express()
const MY_TOKEN = "abc12345";
var port = process.env.PORT || 3000;



 
app.get('/', function (req, res) {
    if(req.query["hub.mode"] == "subscribe"){
        res.end()
    }

});
   


app.listen(port, ()=>console.log("Serveur running on 3000"))

