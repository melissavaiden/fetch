class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, include: :users
    end

    def show
        dog = dog_params
        render json: dog
    end

    private

    def dog_params
        Dog.find(params[:id])
    end
end
