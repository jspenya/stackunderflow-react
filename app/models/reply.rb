# == Schema Information
#
# Table name: replies
#
#  id         :bigint           not null, primary key
#  body       :text
#  user_id    :bigint           not null
#  comment_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reply < ApplicationRecord
  # belongs_to :user
  belongs_to :comment
end
