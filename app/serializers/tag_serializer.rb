class TagSerializer
  include FastJsonapi::ObjectSerializer
  
  belongs_to :post
end