class Api::LikesController < ApplicationController

    def create
      @like = Like.new(like_params)
      if @like.save
        render 'api/likes/show'
      else
        render json: ["Could not process request"], status: 401
      end
    end
  
    def destroy
      @like = Like.find_by( user_id: like_params[:user_id], song_id: like_params[:song_id])
      if @like
        copy_like = @like.dup
        @like.destroy
        render json: copy_like
      else
        render json: ["Could not process request"], status: 401
      end
    end
  
    private

    def like_params
      params.require(:like).permit(:user_id, :song_id)
    end
end