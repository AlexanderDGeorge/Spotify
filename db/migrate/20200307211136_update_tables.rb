class UpdateTables < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :img_url, :string
    add_column :artists, :img_url, :string
    add_column :playlists, :img_url, :string
    remove_column :songs, :song_url
    add_column :songs, :song_url, :string
  end
end
