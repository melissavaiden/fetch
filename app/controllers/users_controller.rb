class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def index
        users = User.all
        render json: users, include: :dogs
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, include: :dogs
    end

    def create
        user = User.create(user_params)
        if user.valid? 
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def authorize
        return render json: "Unauthorized", status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:username, :password)
    end
end
