class UserIdonCommentAllowNull < ActiveRecord::Migration[6.0]
  def change
    change_column :replies, :user_id, :bigint, null:true
  end
end
