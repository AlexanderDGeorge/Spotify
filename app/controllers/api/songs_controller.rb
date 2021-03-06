class Api::SongsController < ApplicationController
    def index
        if search_term
            @songs = Song.where('lower(name) LIKE ?', "%#{search_term.downcase}%")
            render :index
        else
            @songs = Song.all
            render :index
        end
    end

    def show
        @song = Song.find(params[:id])
        if @song
            render :show
        else
            render json: @song.errors.full_messages, status: 422
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