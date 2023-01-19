class AddColumnToDogsTable < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :tags, :string
  end
end
