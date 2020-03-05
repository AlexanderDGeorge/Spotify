export const createPlaylist = playlist => (
    $.ajax({
        method: "POST",
        url: '/api/playlists',
        data: { playlist }
    })
);

export const fetchPlaylist = playlistId => (
    $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}`
    })
);

export const fetchPlaylists = props => (
    $.ajax({
        method: "GET",
        url: `/api/playlists`,
        data: { props }
    })
);

export const deletePlaylist = playlistId => (
    $.ajax({
        method: "DELETE",
        url: `/api/playlists/${playlistId}`
    })
);