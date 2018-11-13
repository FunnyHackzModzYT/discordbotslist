const request = require('request');

class Client {
constructor(token) {
        if (typeof token !== 'string') throw new TypeError("The bot's API key must be a string!");
        this._baseURL = 'http://discordbotslist.com/api/';
        this._token = token;
    }
postServerCount(serverCount) {
if (typeof serverCount !== 'number' && !(serverCount instanceof Array)) throw new TypeError('The server count used is NaN');
request({
        url: "http://discordbotslist.com/api/post_gc.php?auth=" + this._token + "&gc=" + serverCount,
        json: true
    }, function (error, response, body) {
    console.log("Updated server count on Discord Bots to " + serverCount)
    })
}

}

module.exports = Client;