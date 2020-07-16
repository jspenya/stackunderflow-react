class UpvotesController < ApplicationController
  protect_from_forgery

  def create
    @upvote = Upvote.new(secure_params)
    @upvote.post = Post.find(params[:post_id])
      if @upvote.save
        respond_to do |format|
        format.html { redirect_to @upvote.post }
        #Use later for ajax (?)
        format.js 
      end
    end
  end

  def destroy
  end

  private
    def secure_params
      params.require(:upvote).permit(:user_id, :post_id)
    end
end
