class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, include: :user
    end

    def show
        dog = dog_params
        render json: dog
    end

    def create
        dog = Dog.create(dog_params)
        if dog.valid?   
            render json: dog
        else
            render json: { error: "This dog ain't right! Try again!"}, status: :unprocessable_entity
        end
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
        params.permit(:name, :picture_url, :age, :user_id)
    end
end
