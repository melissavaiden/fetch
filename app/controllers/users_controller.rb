class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :dogs
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:id, :username, :password)
    end
end
