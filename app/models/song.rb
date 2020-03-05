class Song < ApplicationRecord
    validates :title, presence: true

    belongs_to :artist
    belongs_to :album
    has_many :playlists_songs, dependent: :destroy
    has_many :playlists, through: :playlists_songs, source: :playlist
    has_many :likes, dependent: :destroy
end