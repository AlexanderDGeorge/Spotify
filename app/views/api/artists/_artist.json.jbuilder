json.extract! artist, :id, :name, :img_url
json.albumIds artist.albums.pluck(:id)
json.songIds artist.songs.pluck(:id)
