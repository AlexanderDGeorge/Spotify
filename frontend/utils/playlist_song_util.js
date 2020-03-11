export const createPlaylistSong = playlist_songs => (
    $.ajax({
        url: 'api/playlist_songs',
        method: "POST",
        data: { playlist_songs }
    })
);

export const deletePlaylistSong = playlistSongId => (
    $.ajax({
        url: `api/playlist_songs/${playlistSongId}`,
        method: "DELETE"
    })
);