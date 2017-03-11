function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Playlist.prototype.overallRating = function() {
  let count = 0;
  this.tracks.forEach((track) => {
    count += track.rating;
  });
  return count / this.tracks.length;
};

Playlist.prototype.totalDuration = function() {
  let count = 0;
  this.tracks.forEach((track) => {
    count += track.length;
  });
  return count;
};

const library = new Library('library', 'David');
const p01 = new Playlist('Coding Music');
const p02 = new Playlist('Other Playlist');
const t01 = new Track('Code Monkey', 4, 240);
const t02 = new Track('Model View Controller', 5, 300);
const t03 = new Track('Four Thirty-Three', 3, 433);
library.playlists.push(p01, p02);
p01.tracks.push(t01, t02);
p02.tracks.push(t03);

Library.prototype.printPlaylists = function() {
  this.playlists.forEach((playlist, i) => {
    console.log(`p0${i + 1}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  });
};

Playlist.prototype.printTracks = function() {
  this.tracks.forEach((track, i) => {
    console.log(`t0${i + 1}: ${track.title}`);
  });
};

Library.prototype.printPlaylist = function(playlistName) {
  this.playlists.forEach((playlist, i) => {
    if (playlist.name === playlistName) {
      console.log(`p0${i + 1}: ${playlist.name} - ${playlist.tracks.length} tracks`);
      playlist.tracks.forEach((track, j) => {
        console.log(`t0${j + 1}: ${track.title}`);
      });
    }
  });
};

Library.prototype.addTrackToPlaylist = function(track, playlist) {
  playlist.tracks.push(track);
};

Library.prototype.addPlaylist = function(playlist) {
  library.playlists.push(playlist);
}

Library.prototype.searchTracks = function(query) {
  results = [];
  this.playlists.forEach((playlist) => {
    playlist.tracks.forEach((track) => {
      if (track.title.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        results.push(track.title);
      }
    });
  });
  console.log(results);
}

library.searchTracks('o');
