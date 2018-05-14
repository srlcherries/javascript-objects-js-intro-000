var playlist = {nsync: "it's gonna be me"};
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist,{artistName: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist; 
}
