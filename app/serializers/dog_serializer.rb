class DogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :picture_url, :name, :age
  belongs_to :user
  has_many :tags, through: :dog_tags


end
