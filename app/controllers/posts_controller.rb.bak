class PostsController < ApplicationController

	before_action :authenticate_user!, except: [ :index ]
	before_action :set_post, only: [ :show ]

	def index
		@posts = Post.all
	end

	def show
		@post = Post.find(params[:id])
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(post_values)
		@post.user_id = current_user.id
		@post.tags.build

		if @post.save
			redirect_to @post
		else 
			render 'new'
		end
	end


	private 

	def set_post
		@post = Post.find(params[:id])
	end


	def post_values
		params.require(:post).permit(:title, :body, tags_attributes: [:name])
	end

end
