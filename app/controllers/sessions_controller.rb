class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok 
    else
      render json: { errors: 'Sorry, this user does not exist! Please try again.' } , status: :unauthorized
    end
  end


  def destroy
    session.delete :user_id
    render json: 'No Content', status: :no_content
  end
end
