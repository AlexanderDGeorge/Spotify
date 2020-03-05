class Api::AlbumsController < ApplicationController
    def index
        if search_term
            @albums = Album.where('lower(name) LIKE ?', "%#{search_term.downcase}%")
            render :index
        else
            @albums = Album.all 
            render :index
        end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end
    
    private

    def search_term
        if params[:props]
            params[:props][:search_term]
        else
            return nil
        end
    end
end