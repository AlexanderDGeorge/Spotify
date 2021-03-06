# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_07_211136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.string "name", null: false
    t.integer "year", null: false
    t.integer "artist_id", null: false
    t.string "img_url"
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "img_url"
    t.index ["name"], name: "index_artists_on_name", unique: true
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "song_id", null: false
    t.index ["user_id", "song_id"], name: "index_likes_on_user_id_and_song_id", unique: true
  end

  create_table "playlist_songs", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "song_id", null: false
    t.index ["playlist_id", "song_id"], name: "index_playlist_songs_on_playlist_id_and_song_id", unique: true
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.integer "user_id", null: false
    t.string "img_url"
    t.index ["name", "user_id"], name: "index_playlists_on_name_and_user_id", unique: true
  end

  create_table "songs", force: :cascade do |t|
    t.string "name", null: false
    t.string "duration", null: false
    t.integer "artist_id", null: false
    t.integer "album_id", null: false
    t.string "song_url"
    t.index ["album_id"], name: "index_songs_on_album_id"
    t.index ["artist_id"], name: "index_songs_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
