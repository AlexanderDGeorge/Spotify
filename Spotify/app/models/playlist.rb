class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :description, allow_nil: true

  belongs_to :user


end