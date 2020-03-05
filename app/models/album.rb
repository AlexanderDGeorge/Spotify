class Album < ApplicationRecord
    validates :name, :year, :artist_id, presence: true
    
    belongs_to :artist
    has_many :songs
end