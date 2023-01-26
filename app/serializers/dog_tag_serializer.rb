class DogTagSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :dog
  belongs_to :tag
end
