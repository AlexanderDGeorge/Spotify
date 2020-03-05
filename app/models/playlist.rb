class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user
  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs

end