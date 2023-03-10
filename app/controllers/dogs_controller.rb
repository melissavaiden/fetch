class DogsController < ApplicationController

    def index
        dogs = Dog.all
        render json: dogs, include: [:user, :tags]
    end

    def show
        dog = Dog.find_by(id: params[:id])
        render json: dog
    end

    def create
        dog = Dog.create(dog_params)
        if dog.valid?   
            render json: dog, status: :created
        else
            render json: { error: "This dog ain't right! Try again!"} , status: :unprocessable_entity
        end
    end

    def destroy
        dog = Dog.find_by(id: params[:id])
        dog.destroy
        render json: dog, status: :no_content
    end

    def my_pups
        dogs = Dog.find_by(user_id: session[:user_id])
        if dogs
            render json: dogs, status: :ok
        else
            render json: { error: 'Oh No, You have no pups :('} , status: :not_found
        end
    end

    def update
        dog = Dog.find_by(id: params[:id])
        if dog
            dog.update(dog_params)
            render json: dog, status: :created
        else 
            render json: { error: 'Please try again' }, status: :unprocessable_entity
        end
    end

    private

    def dog_params
        params.permit(:name, :picture_url, :age, :user_id, tag_ids:[])
    end
end
