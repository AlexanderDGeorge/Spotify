json.extract! @playlist, :id, :name, :song_ids, :img_url
json.user @playlist.user, :id, :username

json.set! :song do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.partial! "/api/songs/song", song: song
    end
  end
end