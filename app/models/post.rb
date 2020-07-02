class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  validates_presence_of :nickname, :title, :content, :image
end
