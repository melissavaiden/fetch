class RemoveColumnFromDogTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :dogs, :favs, :string
  end
end
