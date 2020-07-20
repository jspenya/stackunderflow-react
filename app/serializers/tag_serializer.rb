class TagSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :post_id
  
  belongs_to :post

  def tags
    join_tags(@post)
  end
end