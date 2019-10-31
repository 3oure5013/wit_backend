'use strict'

const request = require('./requestPromise')

module.exports = class methods{
    constructor(access_token){
        this.ACCESS_TOKEN = access_token;
    }

    //This method is use for sending message
    async sendText(text, id){
        const json = {
            recipient : { id },
            message : { text }
        }
        const res = await request({
            url : 'https://graph.facebook.com/v2.11/me/messages',
            qs : {
                access_token : this.ACCESS_TOKEN
            },
            json,
            method: 'POST'
        });

        //In res, we get the response that the user send from facebook
        console.log("Facebook says ", res);
    }


    //We get the message and the user id when he send his message from facebook
    getMessageObject(json){
        const message = json.entry[0].messaging[0].message.text;
        const id = json.entry[0].messaging[0].sender.id;
        return {
            message, 
            id
        }
    }
}