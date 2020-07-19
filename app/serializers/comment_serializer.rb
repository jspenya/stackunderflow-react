class CommentSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :post
  attributes :id, :body, :post_id, :created_at

  has_many :replies, dependent: :destroy
end
