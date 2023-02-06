class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :updated_at
  has_many :dogs, serializer: DogSerializer

end
