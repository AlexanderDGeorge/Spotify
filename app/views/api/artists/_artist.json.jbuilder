json.extract! artist, :id, :name, :bio
json.albumIds artist.albums.pluck(:id)
json.songIds artist.songs.pluck(:id)
