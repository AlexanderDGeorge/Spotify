export const fetchArtist = artistId => (
    $.ajax({
        url: `api/artists/${artistId}`,
        method: "GET"
    })
);

export const fetchArtists = props => (
    $.ajax({
        url: 'api/artists',
        method: "GET",
        data: { props }
    })
);