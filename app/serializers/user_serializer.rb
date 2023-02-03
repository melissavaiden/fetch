class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :updated_at
  has_many :dogs
  # has_many :tags, through: :dog_tags

end
