class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, status: :ok
    end
end
