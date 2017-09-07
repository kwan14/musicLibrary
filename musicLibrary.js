var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
              },
  printPlaylists : function () {
    for (var list in library.playlists) {
      console.log(list + ": " + library.playlists[list].name + " - " + library.playlists[list].tracks.length + " tracks");
    }
  },
  printTracks : function () {
    for (var list in library.tracks) {
      console.log(list + ": " + library.tracks[list].name + " by " + library.tracks[list].artist + " (" + library.tracks[list].album + ")");
    }
  },
  printPlaylist : function (playlistId) {
    //console.log(library.playlists[playlistId].tracks);
    console.log(playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
    for (var i = 0; i < library.playlists[playlistId].tracks.length; i++) {
      console.log(library.playlists[playlistId].tracks[i] + ": " + library.tracks[library.playlists[playlistId].tracks[i]].name + " by " + library.tracks[library.playlists[playlistId].tracks[i]].artist + " (" + library.tracks[library.playlists[playlistId].tracks[i]].album + ")");
    }
  },
  addTrackToPlaylist : function (trackId, playlistId) {
    library.playlists[playlistId].tracks.push(trackId);
  },
  addTrack : function (name, artist, album) {
    var identifier = uid();
    library.tracks[identifier] = { id: identifier, name: name, artist: artist, album: album} ;
    //console.log(library.tracks);
  },
  addPlaylist : function (name) {
    var identifier = uid();
    library.playlists[identifier] = { id: identifier, name : name, tracks : []};
    console.log(library.playlists);
  }
}


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//library.printPlaylists();
//library.printTracks();
//library.printPlaylist("p01");
//library.addTrackToPlaylist("t01", "p02");
//console.log(library.playlists);
//library.addTrack("Thunderstruck", "AC/DC", "The Razor\'s Edge");
//console.log(library.tracks);
//library.addPlaylist("Best Songs Ever");
//console.log(library.playlists);

