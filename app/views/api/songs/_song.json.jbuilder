json.extract! song, :id, :name, :artist_id, :album_id, :duration, :song_url
json.artist song.artist.name
json.album song.album.name
