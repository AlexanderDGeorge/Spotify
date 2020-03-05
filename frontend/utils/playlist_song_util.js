export const createPlaylistSong = playlistSong => (
    $.ajax({
        url: 'api/playlist_songs',
        method: "POST",
        data: { playlistSong }
    })
);

export const deletePlaylistSong = playlistSongId => (
    $.ajax({
        url: `api/playlist_songs/${playlistSongId}`,
        method: "DELETE"
    })
);