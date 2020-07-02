class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :nickname
      t.text :title
      t.text :content
      t.text :image
      t.timestamps
    end
  end
end
