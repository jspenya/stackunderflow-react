class ReplySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :body, :comment_id, :created_at
  
  belongs_to :comment
end
