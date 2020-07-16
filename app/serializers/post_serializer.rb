class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :id

  has_many :comments
end
