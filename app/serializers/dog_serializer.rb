class DogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :picture_url, :name, :age, :favs, :hates, :owner_id
end