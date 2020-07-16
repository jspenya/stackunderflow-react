# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  user_id        :bigint
#  title          :string
#  body           :text
#  upvotes        :integer
#  downvotes      :integer
#  total_comments :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Post < ApplicationRecord
    # validates_presence_of :title, :body, :user_id
    
    # belongs_to :user
    has_many :comments, dependent: :destroy
    has_many :upvotes, dependent: :destroy
    has_many :tags, dependent: :destroy

    def score
        upvotes.count
    end

    accepts_nested_attributes_for :tags, :allow_destroy => :true,
        :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank?} }

end
