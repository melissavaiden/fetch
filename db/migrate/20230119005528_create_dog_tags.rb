class CreateDogTags < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_tags do |t|
      t.belongs_to :dog_id
      t.belongs_to :tag_id
      t.timestamps
    end
  end
end
