class PublicController < ApplicationController

	def index
		@posts = Post.order(id: :desc).limit(20)
	end

	def show
		@posts = @user.posts
	end

end