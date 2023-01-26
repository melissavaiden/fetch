class Dog < ApplicationRecord
    belongs_to :user
    has_many :dog_tags
    has_many :tags, through: :dog_tags
    validates :name, :picture_url, :user_id, :age,  presence: true
    validates :picture_url, inclusion: { in: ".jpg" }
end
