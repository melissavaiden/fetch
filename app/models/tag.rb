class Tag < ApplicationRecord
    has_many :dog_tags
    has_many :dogs, through: :dog_tags
end
