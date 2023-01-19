class CreateDogTags < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_tags do |t|
      t.belongs_to :dog
      t.belongs_to :tag
      t.timestamps
    end
  end
end
