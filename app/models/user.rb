class User < ApplicationRecord
    has_many :dogs
    # validates :username, presence

    has_secure_password
end
