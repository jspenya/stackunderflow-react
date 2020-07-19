module Api
  module V1
    class RepliesController < ApplicationController
    protect_from_forgery with: :null_session
      def index
        # replies = comment.replies 
          replies =
            if params[:comment_id]
              comment.replies
              # Reply.where comment_id: params[:comment_id]
            else
              Reply.all
            end

        render json: ReplySerializer.new(replies).serialized_json
      end

      def show
      end

      def create
        reply = comment.replies.new(reply_params)

        if reply.save
          render json: ReplySerializer.new(reply).serialized_json
        else 
          render json: { error: reply.errors.messages }, status: 422
        end
      end

      def destroy
        reply = Reply.find(params[:id])

        if reply.destroy 
          head :no_content
        else 
          render json: { error: reply.errors.messages }, status: 422
        end
      end

      private

      def comment
        Comment.find(params[:comment_id])
      end

      def reply_params
        params.require(:reply).permit(:body, :comment_id)
      end
    end
  end
end