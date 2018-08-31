require("dotenv").config();
var request = require('request');
var moment = require("moment");
moment().format();
var Keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var omdb = require('omdb');

var search = process.argv[2]

if (search === "concert-this") {
    artistConcert()
}
else if (search === "spotify-this-song") {
    songSpotify()
}
else if (search === "movie-this") {
    findMovie()
}


// //Bands-In-Town API function to access concerts for artists
function artistConcert() {
    var artist = process.argv.slice(3).join(" ");
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


    request(queryURL, function (error, response, body) {

        var data = JSON.parse(body)

        console.log(artist + " next 5 Events are:")
        for (var i = 0; i < 5; i++) {
            console.log("Venue: " + data[i].venue.name)
            console.log("City: " + data[i].venue.city)
            console.log("State: " + data[i].venue.region)
            var eventDateTime = data[i].datetime;
            console.log("Date/Time: " + moment(eventDateTime).format("MM/DD/YYYY hh:mm:ss"));
            console.log("--------------------------------------------------")


        }
    });

}

// //Spotify API function to get song info via track names
function songSpotify() {
    var spotify = new Spotify(Keys.spotify)
    var songName = process.argv.slice(3).join(" ")

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        for (var i = 0; i < data.tracks.items.length; i++) {
            data.tracks.items[i].artists.forEach(element => {
                console.log("Artist Name: " + element.name)
            });

            console.log("Song Name: " + data.tracks.items[i].name)
            if (data.tracks.items[i].preview_url) {
                console.log("Preview URL: " + data.tracks.items[i].preview_url)
            } else {
                console.log("No Preview URL Available")
            }
            console.log("Album Name: " + data.tracks.items[i].album.name)
            console.log("**********************************")
        }

    });
}

function findMovie() {
var movieTitle = process.argv.slice(3).join(" ")
var movieQuery = "http://www.omdbapi.com/apikey=trilogy?s=" + movieTitle

request('http://www.omdbapi.com/?t=' + movieTitle + '&page=5&plot=short&apikey=trilogy', function(error, response, body) {

    var movieData = JSON.parse(body);

    if (!error && response.statusCode === 200) {
        console.log('Title: ' + movieData.Title);
        console.log('Year: ' + movieData.Year);
        console.log('IMDB: ' + movieData.imdbRating);
        console.log('Rotten Tomatoes: ' + movieData.Ratings[1].Value);
        console.log('Languages: ' + movieData.Language);
        console.log('Plot: ' + movieData.Plot);
        console.log('Actors: ' + movieData.Actors);

        // fs.appendFile('server.log', '\n' + now + '\n' + body, function(err) {
        //     // console.log("Response written to file");
        // });
    }
});

}


