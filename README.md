# liri-node-app

# Liri-Node-App

## Function
Liri-Node-App is a Node JS app that will return data from three APIs: Spotify, Bands in Town, and Open Movie Database.

## User
From the command line type the following commands

* To get Spotify songs
    * CLI: node liri spotify-this-song [song name]
    * Example: node liri spotify-this-song Billie Jean
* To get movie data
    * CLI: node liri movie-this [Movie name]
    * Example: node liri movie-this Anchorman
* To get a bands latest tour dates
    * CLI: node liri concert-this [Artist/Band name]
    * Example: node liri concert-this [Artist/Band Name]

### If multiple songs exist then Spotify will return them and Liri will display all of them.
### "concert-this" will return the next 5 concert dates for the artist.
### The Open Movie Database will only return the most recenct movie based on the name submitted
