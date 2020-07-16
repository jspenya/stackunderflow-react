  class RepliesController < ApplicationController
  before_action :set_reply, only: [:show, :edit, :update, :destroy]

  def index
    @replies = Reply.all
  end

  def show
  end

  def new
    @reply = Reply.new
  end

  def edit
  end

  def create
    @reply = Reply.new(reply_params)
    @reply.user_id = current_user.id

    if @reply.save
      redirect_to comment_path(@reply.comment_id)
    else 
      render 'new'
    end
  end

  private
    def set_reply
      @reply = Reply.find(params[:id])
    end

    def reply_params
      params.require(:reply).permit(:body, :user_id, :comment_id)
    end
end