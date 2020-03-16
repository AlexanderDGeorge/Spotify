json.extract! album, :id, :name, :year, :img_url
json.artist album.artist.name
json.songIds album.songs.pluck(:id)
json.artistId album.artist.id
