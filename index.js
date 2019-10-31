//BISMILAHI RAHMANI RAHIM
//ALAHOUMA SOLI ALA MOUHAMADIN WA ALA ALI MOUHAMADIN WA SALIM

'use strict'

const Restify = require('restify');
const app = Restify.createServer({
    name : 'backend wit'
})


//MIDDLEWARES
app.use(Restify.plugins.jsonp());
app.use(Restify.plugins.bodyParser());

//Variables
var port = process.env.PORT || 3000;
const methods = require('./methods');

//Bot configuration
const MY_TOKEN = "abc12345";

//Token d'accès : Générez un token d’accès de Page pour commencer à utiliser les API de plate-form
const tokenAccessFromFacebook = "EAAOH6EDjtcsBAOU48tyMV5wlta4JTLwhD7lIGfELCVoeeiRoKhXuyfqGVTNqiTbLyGI1ZCMUR7oSg7tusiDoJdd9bxgttbLdCKYqwDsKkT2g80dlwZCVjAujI8dk0MA16SJZCS71tDGqSJKqKUyPMqlc60zZA0yqAW6GMKxRtgZDZD";
const bot = new methods(tokenAccessFromFacebook);



//We initialise our webhook
app.get('/', function (req, res) {
    if(req.query["hub.mode"] == "subscribe" && req.query["hub.verify_token"] == MY_TOKEN){
        res.end(req.query["hub.challenge"])
    }else{
        res.end('out of facebook');
    }

});


//We get the post, we analyse and format response to send to user
app.post('/', (req,res,next)=>{

    const response = req.body
    if(response.object == "page"){
        const messageObj = bot.getMessageObject(response);
        bot.sendText('You said ' + messageObj.message, messageObj.id);
    }
    res.send(200);
});

app.listen(port, ()=>console.log("Serveur running on 3000"))

