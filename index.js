
const express = require('express')
const app = express()
const MY_TOKEN = "abc12345";
var port = process.env.PORT || 3000;



 
app.get('/', function (req, res) {
    if(req.query["hub.mode"] == "subscribe" && req.query["hub.verify_token"] == MY_TOKEN){
        res.end(req.query["hub.challenge"])
    }else{
        next();
    }

});
   


app.listen(port, ()=>console.log("Serveur running on 3000"))

