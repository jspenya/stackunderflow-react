module Api
  module V1
    class CommentsController < ApplicationController
    protect_from_forgery with: :null_session
      def index
        comments = post.comments 
          # if params[:post_id]
          #   Comment.where post_id: params[:post_id]
          # else
          #   Comment.all
          # end

        render json: CommentSerializer.new(comments).serialized_json
      end

      def show
      end

      def create
        comment = post.comments.new(comment_params)

        if comment.save
          render json: CommentSerializer.new(comment).serialized_json
        else 
          render json: { error: comment.errors.messages }, status: 422
        end
      end

      def destroy
        comment = Comment.find(params[:id])

        if comment.destroy 
          head :no_content
        else 
          render json: { error: comment.errors.messages }, status: 422
        end
      end

      private

      def post
        @post ||= Post.find(params[:post_id])
      end

      def comment_params
        params.require(:comment).permit(:body, :post_id)
      end
    end
  end
end