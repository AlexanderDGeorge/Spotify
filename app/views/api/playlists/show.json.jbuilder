json.extract! @playlist, :id, :title, :description
json.user @playlist.user, :id, :username