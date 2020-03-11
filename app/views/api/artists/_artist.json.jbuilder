json.extract! artist, :id, :name
json.albumIds artist.albums.pluck(:id)
json.songIds artist.songs.pluck(:id)
