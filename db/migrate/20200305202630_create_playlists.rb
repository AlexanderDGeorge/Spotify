class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.string :description
      t.integer :user_id, null: false
      t.integer :song_id, null: false
    end
    add_index :playlists, [:name, :user_id], unique: true
  end
end
