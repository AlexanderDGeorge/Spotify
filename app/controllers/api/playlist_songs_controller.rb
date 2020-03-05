class Api::PlaylistSongsController < ApplicationController

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        if @playlist_song.save
            render 'api/playlist_songs/show'
        else
            render json: ["Could not process request"], status: 401
        end

    end

    def destroy
        @playlist_song = PlaylistSong.find_by(
            playlist_id: params[:playlist_songs][:playlist_id], 
            song_id: params[:playlist_songs][:song_id])
        @playlist_song.destroy
        render json: {
            playlist_id: @playlist_song.playlist_id,
            song_id: @playlist_song.song_id
        }
    end

    private

    def playlist_song_params
        params.require(:playlist_songs).permit(:playlist_id, :song_id)
    end
end