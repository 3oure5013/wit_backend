
const express = require('express')
const app = express()
const MY_TOKEN = "abc12345";




 
app.get('/', function (req, res) {

    res.send(MY_TOKEN);

});
   


app.listen(3000, ()=>console.log("Serveur running on 3000"))

