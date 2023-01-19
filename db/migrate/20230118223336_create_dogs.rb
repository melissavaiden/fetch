class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.integer :user_id
      t.string :picture_url
      t.string :name
      t.string :age
      t.string :favs
      t.string :hates
      t.timestamps
    end
  end
end
