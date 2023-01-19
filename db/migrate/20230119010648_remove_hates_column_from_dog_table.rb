class RemoveHatesColumnFromDogTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :dogs, :hates, :string
  end
end
