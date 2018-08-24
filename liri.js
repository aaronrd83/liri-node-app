require("dotenv").config();
var request = require('request');
var moment = require("moment");
moment().format();
var Keys = require("./keys.js");
var Spotify = require('node-spotify-api');
//var search = process.argv[2]




// var artist = process.argv.slice(2).join(" ");

// var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


// request(queryURL, function (error, response, body) {

//     var data = JSON.parse(body)

//     console.log(artist + " next 5 Events are:")
//     for (var i = 0; i < 5; i++) {
//         console.log("Venue: " + data[i].venue.name)
//         console.log("City: " + data[i].venue.city)
//         console.log("State: " + data[i].venue.region)
//         var eventDateTime = data[i].datetime;
//         console.log("Date/Time: " + moment(eventDateTime).format("MM/DD/YYYY hh:mm:ss"));
//         console.log("--------------------------------------------------")


//     }
// });



var spotify = new Spotify(Keys.spotify)
var songName = process.argv.slice(2).join(" ")

spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items);
    // var songData = data.tracks.items

    // for (var i = 0; i < 5; i++) {
    //     console.log(songdData)
    // }

});


