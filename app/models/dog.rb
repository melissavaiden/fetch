class Dog < ApplicationRecord
    belongs_to :user
    # has_many :dog_tags
    # has_many :tags, through: :dog_tags
end
