class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, include: :users
    end

    def show
        dog = dog_params
        render json: dog
    end

    def my_pups
        dogs = Dog.find_by(user_id: session[:user_id])
        if dogs
            render json: dogs, status: :ok
        else
            render json: 'Oh No, You have no pups :(', status: :not_found
        end
    end

    private

    def dog_params
        Dog.find(params[:id])
    end
end
