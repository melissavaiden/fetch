class CreateDogTags < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_tags do |t|
      t.belongs_to :dog_id, null: false, foreign_key: true
      t.belongs_to :tag_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
