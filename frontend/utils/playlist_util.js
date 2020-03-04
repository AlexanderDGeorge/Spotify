export const createPlaylist = playlist => (
    $.ajax({
        method: "POST",
        url: '/api/playlist',
        data: { playlist }
    })
)