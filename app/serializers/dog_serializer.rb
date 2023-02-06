class DogSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :picture_url, :name, :age, :tags
  belongs_to :user
  has_many :tags


end
