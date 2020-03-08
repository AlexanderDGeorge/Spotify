class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.messages, status: 401
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: {
      playlist_id: @playlist.id,
    }
  end

  def index
    if search_term
      @playlists = Playlist.where('lower(name) LIKE ?', "%#{search_term.downcase}%")
      render 'api/playlists/index'
    else
      @playlists = Playlist.all
      render 'api/playlists/index'
    end
  end

  def show
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist
      render 'api/playlists/show'
    else
      render json: @playlists.errors.messages, status: 422
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name, :description, :user_id)
  end

  def search_term
    if params[:props]
      params[:props][:search_term]
    else
      return nil
    end
  end
end