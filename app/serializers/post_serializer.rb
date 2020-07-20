class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :id, :created_at, :tags

  has_many :comments, dependent: :destroy
  has_many :tags, dependent: :destroy

end
