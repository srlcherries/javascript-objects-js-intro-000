var playlist = {nsync: "it's gonna be me"};
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
}
