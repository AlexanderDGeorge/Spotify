json.extract! song, :id, :name, :artist_id, :album_id, :duration
json.artist song.artist.name
json.album song.album.name
