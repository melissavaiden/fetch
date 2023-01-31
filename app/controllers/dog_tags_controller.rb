class DogTagsController < ApplicationController

    def index
        dogtags = DogTag.all
        render json: dogtags
    end

    def create
        dogtag = DogTag.create(dogtag_params)
        render json: dogtag, status: :created
    end

    private

    def dogtag_params
        params.permit(:dog_id, :tag_id)
    end
end
