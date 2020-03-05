export const fetchAlbum = albumId => (
    $.ajax({
        url: `api/albums/${albumId}`,
        method: "GET"
    })
);

export const fetchAlbums = props => (
    $.ajax({
        url: 'api/albums',
        method: "GET",
        data: { props }
    })
);