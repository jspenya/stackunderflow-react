module Api
  module V1
    class TagsController < ApplicationController
      def index
        tags = post.tags

        render json: TagSerializer.new(tags).serialized_json
      end

      private
      def post
        @post ||= Post.find(params[:post_id])
      end
    end
  end
end
