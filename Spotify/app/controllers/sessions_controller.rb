class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid username and/or password!'], status: 401
    else
      login!(@user)
      redirect_to user_url(@user)
    end
  end

  def destroy
    if current_user
      logout!
      redirect_to new_session_url
    else
      render json: ['Not signed in!'], status: 404
    end
  end
end
