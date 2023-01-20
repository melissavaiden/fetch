class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :dogs
    end

    def show
        user = user_params
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
