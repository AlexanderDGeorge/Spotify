export const fetchSong = songId => (
    $.ajax({
        url: `api/songs/${songId}`,
        method: "GET"
    })
);

export const fetchSongs = props => (
    $.ajax({
        url: 'api/songs',
        method: "GET",
        data: { props }
    })
);