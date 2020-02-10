class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: @user.error.full_messages, status: 404
    end
  end

  def index
    @users = User.all
    render :index
  end

  def edit
    #implement later
  end

  def update
    
    #implement later

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_url
  end

  def search

    #implement later

  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
